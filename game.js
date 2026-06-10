const els = {
  appEyebrow: document.querySelector("#appEyebrow"),
  appTitle: document.querySelector("#appTitle"),
  statusLabelOne: document.querySelector("#statusLabelOne"),
  statusLabelTwo: document.querySelector("#statusLabelTwo"),
  statusLabelThree: document.querySelector("#statusLabelThree"),
  statusLabelFour: document.querySelector("#statusLabelFour"),
  bankrollValue: document.querySelector("#bankrollValue"),
  roundValue: document.querySelector("#roundValue"),
  skillValue: document.querySelector("#skillValue"),
  clockValue: document.querySelector("#clockValue"),
  gameTabs: document.querySelectorAll("[data-game-tab]"),
  gameViews: document.querySelectorAll("[data-game-view]"),
  phaseLabel: document.querySelector("#phaseLabel"),
  tableTitle: document.querySelector("#tableTitle"),
  submitButton: document.querySelector("#submitButton"),
  resetButton: document.querySelector("#resetButton"),
  startButton: document.querySelector("#startButton"),
  roundCount: document.querySelector("#roundCount"),
  bankrollStart: document.querySelector("#bankrollStart"),
  timedToggle: document.querySelector("#timedToggle"),
  totalStaked: document.querySelector("#totalStaked"),
  availableBankroll: document.querySelector("#availableBankroll"),
  correctLabel: document.querySelector("#correctLabel"),
  edgeCount: document.querySelector("#edgeCount"),
  messageLine: document.querySelector("#messageLine"),
  marketGrid: document.querySelector("#marketGrid"),
  decisionScore: document.querySelector("#decisionScore"),
  sizingScore: document.querySelector("#sizingScore"),
  decisionMeter: document.querySelector("#decisionMeter"),
  sizingMeter: document.querySelector("#sizingMeter"),
  reviewDrawer: document.querySelector("#reviewDrawer"),
  reviewContent: document.querySelector("#reviewContent"),
  clearReviewButton: document.querySelector("#clearReviewButton"),
};

const etfEls = {
  phaseLabel: document.querySelector("#etfPhaseLabel"),
  resetButton: document.querySelector("#etfResetButton"),
  tickButton: document.querySelector("#etfTickButton"),
  pauseButton: document.querySelector("#etfPauseButton"),
  pnl: document.querySelector("#etfPnl"),
  accuracy: document.querySelector("#etfAccuracy"),
  lastUpdate: document.querySelector("#etfLastUpdate"),
  message: document.querySelector("#etfMessage"),
  stockTable: document.querySelector("#stockTable"),
  board: document.querySelector("#etfBoard"),
  tape: document.querySelector("#etfTape"),
  score: document.querySelector("#etfScore"),
};

const ROUND_SECONDS = 60;
const SUITS = ["hearts", "diamonds", "clubs", "spades"];
const RANKS = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const QUOTE_PATTERNS = [
  ["high", "high", "low", "low", "fair", "fair"],
  ["high", "low", "low", "fair", "fair", "fair"],
  ["high", "high", "high", "low", "fair", "fair"],
  ["high", "high", "low", "low", "low", "fair"],
  ["high", "high", "low", "fair", "fair", "fair"],
];
const QUOTE_MULTIPLIERS = {
  high: [1.028, 1.034, 1.041, 1.048, 1.056],
  low: [0.944, 0.952, 0.959, 0.966, 0.972],
  fair: [1],
};
const MAX_QUOTE_DEVIATION = 0.06;
const ETF_SESSION_SECONDS = 120;
const ETF_TRADE_SIZE = 100;
const STOCK_HALF_SPREAD = 0.05;
const ETF_HALF_SPREAD = 0.1;
const ETF_STOCKS = [
  ["ALP", "Alpha Motors", 24.4],
  ["BEX", "Beacon Energy", 31.2],
  ["CRN", "Crown Cloud", 18.8],
  ["DEX", "Delta Foods", 27.6],
  ["ELM", "Elm Health", 42.1],
  ["FRO", "Frontier Robotics", 36.7],
  ["GLO", "Globe Media", 21.9],
];
const ETF_PRODUCTS = [
  { symbol: "TWO", name: "Two Stock ETF", constituents: ["ALP", "BEX"] },
  { symbol: "TRI", name: "Three Stock ETF", constituents: ["CRN", "DEX", "ELM"] },
  { symbol: "MIX", name: "Mixed Basket ETF", constituents: ["BEX", "FRO", "GLO", "ALP"] },
];

let state;
let etfState;
let activeGame = "probability";

function freshState() {
  const rounds = Number(els.roundCount.value);
  const bankroll = Number(els.bankrollStart.value);

  return {
    phase: "betting",
    round: 1,
    totalRounds: rounds,
    bankroll,
    startingBankroll: bankroll,
    roundStartBankroll: bankroll,
    timed: els.timedToggle.checked,
    timeRemaining: ROUND_SECONDS,
    timerId: null,
    board: null,
    bets: {},
    history: [],
    totals: emptyTotals(),
  };
}

function emptyTotals() {
  return {
    decision: 0,
    decisionMax: 0,
    sizing: 0,
    sizingMax: 0,
  };
}

function startGame() {
  clearTimer();
  state = freshState();
  els.reviewDrawer.classList.remove("is-open");
  setupRound();
}

function setupRound() {
  clearTimer();
  state.phase = "betting";
  state.roundStartBankroll = Math.max(0, state.bankroll);
  state.timeRemaining = ROUND_SECONDS;
  state.bets = {};
  state.board = createRoundBoard();
  showMessage("");

  if (state.timed) {
    state.timerId = window.setInterval(tickClock, 1000);
  }

  render();
}

function tickClock() {
  if (!state || state.phase !== "betting") return;
  state.timeRemaining -= 1;
  if (state.timeRemaining <= 0) {
    state.timeRemaining = 0;
    renderStatus();
    submitRound();
    return;
  }
  renderStatus();
}

function clearTimer() {
  if (state?.timerId) {
    window.clearInterval(state.timerId);
    state.timerId = null;
  }
}

function createRoundBoard() {
  const quotePlans = createRoundQuotePlans();
  const nextQuotePlan = () => quotePlans.shift();
  const board = {
    dice: {
      key: "dice",
      label: "Two Dice",
      display: [6, 6],
      outcome: null,
      markets: quoteTwoMarkets(diceMarketTemplates, nextQuotePlan),
    },
    cards: {
      key: "cards",
      label: "Two Cards",
      display: [null, null],
      outcome: null,
      markets: quoteTwoMarkets(cardMarketTemplates, nextQuotePlan),
    },
    coins: {
      key: "coins",
      label: "Three Coins",
      display: ["H", "H", "H"],
      outcome: null,
      markets: quoteTwoMarkets(coinMarketTemplates, nextQuotePlan),
    },
  };

  Object.values(board).forEach((instrument) => {
    instrument.markets.forEach((market) => {
      market.instrument = instrument.key;
    });
  });

  return board;
}

function createRoundQuotePlans() {
  return shuffle(sample(QUOTE_PATTERNS)).map((kind) => ({
    kind,
    multiplier: sample(QUOTE_MULTIPLIERS[kind]),
  }));
}

function quoteTwoMarkets(templates, nextQuotePlan) {
  const picked = shuffle(templates).slice(0, 2);
  return picked.map((template) => quoteMarket(template(), nextQuotePlan()));
}

const diceMarketTemplates = [
  () => {
    const target = sample([7, 8, 9, 10]);
    return {
      title: `Sum is at least ${target}`,
      description: "Uses the total of the two dice.",
      probability: countDiceOutcomes((a, b) => a + b >= target) / 36,
      settles: ({ dice }) => dice[0] + dice[1] >= target,
    };
  },
  () => {
    const target = sample([5, 6, 7, 8]);
    return {
      title: `Sum is at most ${target}`,
      description: "Uses the total of the two dice.",
      probability: countDiceOutcomes((a, b) => a + b <= target) / 36,
      settles: ({ dice }) => dice[0] + dice[1] <= target,
    };
  },
  () => ({
    title: "At least one die is 6",
    description: "Either die may show the six.",
    probability: countDiceOutcomes((a, b) => a === 6 || b === 6) / 36,
    settles: ({ dice }) => dice[0] === 6 || dice[1] === 6,
  }),
  () => ({
    title: "The dice are doubles",
    description: "Both dice must show the same number.",
    probability: countDiceOutcomes((a, b) => a === b) / 36,
    settles: ({ dice }) => dice[0] === dice[1],
  }),
  () => ({
    title: "The sum is even",
    description: "The two dice total must be even.",
    probability: 0.5,
    settles: ({ dice }) => (dice[0] + dice[1]) % 2 === 0,
  }),
  () => ({
    title: "Both dice are 4 or higher",
    description: "Each die must be 4, 5, or 6.",
    probability: countDiceOutcomes((a, b) => a >= 4 && b >= 4) / 36,
    settles: ({ dice }) => dice[0] >= 4 && dice[1] >= 4,
  }),
];

const cardMarketTemplates = [
  () => ({
    title: "At least one card is an ace",
    description: "Two cards are drawn without replacement.",
    probability: cardProbability((cards) => cards.some((card) => card.rank === "A")),
    settles: ({ cards }) => cards.some((card) => card.rank === "A"),
  }),
  () => ({
    title: "Both cards are red",
    description: "Hearts and diamonds count as red.",
    probability: cardProbability((cards) => cards.every((card) => card.color === "red")),
    settles: ({ cards }) => cards.every((card) => card.color === "red"),
  }),
  () => ({
    title: "Exactly one card is red",
    description: "One red card and one black card.",
    probability: cardProbability(
      (cards) => cards.filter((card) => card.color === "red").length === 1,
    ),
    settles: ({ cards }) => cards.filter((card) => card.color === "red").length === 1,
  }),
  () => ({
    title: "At least one face card",
    description: "Jack, queen, or king appears.",
    probability: cardProbability((cards) =>
      cards.some((card) => ["J", "Q", "K"].includes(card.rank)),
    ),
    settles: ({ cards }) => cards.some((card) => ["J", "Q", "K"].includes(card.rank)),
  }),
  () => ({
    title: "The two cards pair",
    description: "Both cards have the same rank.",
    probability: cardProbability((cards) => cards[0].rank === cards[1].rank),
    settles: ({ cards }) => cards[0].rank === cards[1].rank,
  }),
  () => ({
    title: "Both cards are 10 or higher",
    description: "Ten, jack, queen, king, or ace.",
    probability: cardProbability((cards) =>
      cards.every((card) => ["10", "J", "Q", "K", "A"].includes(card.rank)),
    ),
    settles: ({ cards }) =>
      cards.every((card) => ["10", "J", "Q", "K", "A"].includes(card.rank)),
  }),
  () => ({
    title: "At least one heart",
    description: "One or both cards are hearts.",
    probability: cardProbability((cards) => cards.some((card) => card.suit === "hearts")),
    settles: ({ cards }) => cards.some((card) => card.suit === "hearts"),
  }),
];

const coinMarketTemplates = [
  () => ({
    title: "Exactly two heads",
    description: "Three fair coins are flipped.",
    probability: coinProbability((coins) => countHeads(coins) === 2),
    settles: ({ coins }) => countHeads(coins) === 2,
  }),
  () => ({
    title: "At least two heads",
    description: "Two or three coins land heads.",
    probability: coinProbability((coins) => countHeads(coins) >= 2),
    settles: ({ coins }) => countHeads(coins) >= 2,
  }),
  () => ({
    title: "All three heads",
    description: "Every coin must land heads.",
    probability: coinProbability((coins) => countHeads(coins) === 3),
    settles: ({ coins }) => countHeads(coins) === 3,
  }),
  () => ({
    title: "At least one tail",
    description: "Any coin may land tails.",
    probability: coinProbability((coins) => coins.includes("T")),
    settles: ({ coins }) => coins.includes("T"),
  }),
  () => ({
    title: "Exactly one head",
    description: "Only one of the three coins lands heads.",
    probability: coinProbability((coins) => countHeads(coins) === 1),
    settles: ({ coins }) => countHeads(coins) === 1,
  }),
  () => ({
    title: "All coins match",
    description: "HHH or TTT wins.",
    probability: coinProbability((coins) => new Set(coins).size === 1),
    settles: ({ coins }) => new Set(coins).size === 1,
  }),
  () => ({
    title: "More tails than heads",
    description: "Two or three coins land tails.",
    probability: coinProbability((coins) => countHeads(coins) <= 1),
    settles: ({ coins }) => countHeads(coins) <= 1,
  }),
];

function quoteMarket(base, quotePlan) {
  const fairOdds = (1 - base.probability) / base.probability;
  const offeredOdds = buildQuotedOdds(fairOdds, quotePlan);
  const rawEdge = base.probability * offeredOdds - (1 - base.probability);
  const edge = quotePlan.kind === "fair" ? 0 : rawEdge;
  const kellyFraction = quotePlan.kind === "high" && edge > 0 ? edge / offeredOdds : 0;

  return {
    ...base,
    id: `m-${Math.random().toString(16).slice(2)}`,
    fairOdds,
    offeredOdds,
    edge,
    kellyFraction,
    quoteKind: quotePlan.kind,
  };
}

function buildQuotedOdds(fairOdds, quotePlan) {
  if (quotePlan.kind === "fair") return roundOdds(fairOdds);

  let quoted = roundOdds(Math.max(0.05, fairOdds * quotePlan.multiplier));
  const increment = 0.01;

  if (quotePlan.kind === "high" && quoted <= fairOdds) {
    quoted = roundOdds(fairOdds + increment);
  }

  if (quotePlan.kind === "low" && quoted >= fairOdds) {
    quoted = roundOdds(Math.max(0.05, fairOdds - increment));
  }

  return clampQuotedOdds(quoted, fairOdds, quotePlan.kind);
}

function clampQuotedOdds(quoted, fairOdds, kind) {
  const increment = 0.01;
  let adjusted = quoted;

  while (Math.abs(adjusted / fairOdds - 1) > MAX_QUOTE_DEVIATION) {
    adjusted = kind === "high" ? roundOdds(adjusted - increment) : roundOdds(adjusted + increment);

    if (kind === "high" && adjusted <= fairOdds) {
      return roundOdds(fairOdds + increment);
    }

    if (kind === "low" && adjusted >= fairOdds) {
      return roundOdds(Math.max(0.05, fairOdds - increment));
    }
  }

  return adjusted;
}

function submitRound() {
  if (!state || state.phase !== "betting") return;
  const staked = getTotalStake();
  if (staked > state.bankroll + 0.001) {
    showMessage("Total stake is above bankroll. Reduce one or more bets.");
    return;
  }

  clearTimer();
  showMessage("");

  const outcomes = runSimulation();
  state.board.dice.display = outcomes.dice;
  state.board.cards.display = outcomes.cards;
  state.board.coins.display = outcomes.coins;
  state.board.dice.outcome = outcomes.dice;
  state.board.cards.outcome = outcomes.cards;
  state.board.coins.outcome = outcomes.coins;

  const markets = allMarkets();
  const results = markets.map((market) => {
    const won = market.settles(outcomes);
    const stake = getBet(market.id);
    const pnl = stake > 0 ? (won ? stake * market.offeredOdds : -stake) : 0;
    const analysis = analyzeStake(market, stake, state.roundStartBankroll, markets);

    return {
      market,
      won,
      stake,
      pnl,
      analysis,
    };
  });

  const roundPnl = results.reduce((sum, result) => sum + result.pnl, 0);
  state.bankroll = Math.max(0, state.bankroll + roundPnl);
  applyRoundScores(state.totals, results, state.roundStartBankroll, markets);

  state.history.push({
    round: state.round,
    startBankroll: state.roundStartBankroll,
    endBankroll: state.bankroll,
    pnl: roundPnl,
    outcomes,
    results,
  });

  state.phase = state.round >= state.totalRounds ? "final" : "results";
  if (state.phase === "final") {
    els.reviewDrawer.classList.add("is-open");
    renderReview();
  }
  render();
}

function nextRound() {
  if (state.phase !== "results") return;
  state.round += 1;
  setupRound();
}

function runSimulation() {
  return {
    dice: [randomInt(1, 6), randomInt(1, 6)],
    cards: drawCards(2),
    coins: Array.from({ length: 3 }, () => (Math.random() < 0.5 ? "H" : "T")),
  };
}

function applyRoundScores(totals, results, bankrollBase, markets) {
  results.forEach((result) => {
    const analysis = analyzeStake(result.market, result.stake, bankrollBase, markets);
    totals.decision += analysis.decisionScore;
    totals.decisionMax += 1;
    totals.sizing += analysis.sizingScore;
    totals.sizingMax += 1;
  });
}

function analyzeStake(market, stake, bankrollBase, markets) {
  const optimalStake = getOptimalStake(market, bankrollBase, markets);
  const shouldBet = optimalStake > 0;
  const didBet = stake > 0;
  const decisionScore = shouldBet === didBet ? 1 : 0;
  const denominator = Math.max(optimalStake, bankrollBase * 0.05, 1);
  const sizingScore = clamp(1 - Math.abs(stake - optimalStake) / denominator, 0, 1);

  return {
    decisionScore,
    sizingScore,
    optimalStake,
    shouldBet,
  };
}

function getOptimalStake(market, bankrollBase, markets) {
  if (market.kellyFraction <= 0) return 0;

  const rawPositiveTotal = markets.reduce((sum, item) => {
    return sum + Math.max(0, item.kellyFraction * bankrollBase);
  }, 0);
  const scale = rawPositiveTotal > bankrollBase ? bankrollBase / rawPositiveTotal : 1;

  return market.kellyFraction * bankrollBase * scale;
}

function getScoreParts(totals) {
  const decision = totals.decisionMax ? (totals.decision / totals.decisionMax) * 60 : 0;
  const sizing = totals.sizingMax ? (totals.sizing / totals.sizingMax) * 40 : 0;
  return {
    decision,
    sizing,
    total: decision + sizing,
  };
}

function render() {
  renderStatus();
  renderScore();
  updateRoundStats();

  if (state.phase === "betting") {
    els.phaseLabel.textContent = "Betting phase";
    els.tableTitle.textContent = "Choose which posted payouts are worth betting";
    els.submitButton.textContent = "Submit bets";
    els.submitButton.disabled = state.bankroll <= 0;
    els.correctLabel.textContent = "Correct entries";
    els.edgeCount.textContent = "Hidden";
    renderBoard();
    return;
  }

  if (state.phase === "results") {
    els.phaseLabel.textContent = "Results reveal";
    els.tableTitle.textContent = "Simulation results and correct sizing";
    els.submitButton.textContent = "Next round";
    els.submitButton.disabled = false;
    renderCorrectEntryCount();
    renderBoard(state.history[state.history.length - 1].results);
    return;
  }

  els.phaseLabel.textContent = "Game end";
  els.tableTitle.textContent = "Final score";
  els.submitButton.textContent = "New game";
  els.submitButton.disabled = false;
  renderCorrectEntryCount();
  renderFinalSummary();
}

function renderStatus() {
  if (!state) return;
  if (activeGame !== "probability") return;
  const parts = getScoreParts(state.totals);
  els.statusLabelOne.textContent = "Bankroll";
  els.statusLabelTwo.textContent = "Round";
  els.statusLabelThree.textContent = "Score";
  els.statusLabelFour.textContent = "Clock";
  els.bankrollValue.textContent = formatMoney(state.bankroll);
  els.roundValue.textContent = `${Math.min(state.round, state.totalRounds)} / ${state.totalRounds}`;
  els.skillValue.textContent = parts.total.toFixed(1);
  els.clockValue.textContent = state.timed ? `${state.timeRemaining}s` : "Practice";
}

function renderScore() {
  if (!state) return;
  const parts = getScoreParts(state.totals);
  els.decisionScore.textContent = `${parts.decision.toFixed(1)} / 60`;
  els.sizingScore.textContent = `${parts.sizing.toFixed(1)} / 40`;
  els.decisionMeter.style.width = `${(parts.decision / 60) * 100}%`;
  els.sizingMeter.style.width = `${(parts.sizing / 40) * 100}%`;
}

function renderCorrectEntryCount() {
  const latest = state.history[state.history.length - 1];
  if (!latest) {
    els.edgeCount.textContent = "Hidden";
    return;
  }
  const correct = latest.results.filter((result) => result.analysis.decisionScore === 1).length;
  els.correctLabel.textContent = "Correct entries";
  els.edgeCount.textContent = `${correct} / ${latest.results.length}`;
}

function renderBoard(results = null) {
  const resultMap = new Map((results || []).map((result) => [result.market.id, result]));
  els.marketGrid.innerHTML = Object.values(state.board)
    .map((instrument) => renderInstrumentColumn(instrument, resultMap))
    .join("");
}

function renderInstrumentColumn(instrument, resultMap) {
  return `
    <article class="instrument-column">
      <div class="instrument-head">
        <p class="eyebrow">${instrument.label}</p>
        <div class="asset-row ${instrument.key}">
          ${renderInstrumentAssets(instrument)}
        </div>
        ${renderOutcomeLine(instrument)}
      </div>
      <div class="market-list">
        ${instrument.markets.map((market) => renderMarket(market, resultMap.get(market.id))).join("")}
      </div>
    </article>
  `;
}

function renderInstrumentAssets(instrument) {
  if (instrument.key === "dice") {
    return instrument.display.map((value) => renderDie(value)).join("");
  }

  if (instrument.key === "cards") {
    return instrument.display.map((card) => renderCard(card)).join("");
  }

  return instrument.display.map((coin) => `<div class="asset-coin">${coin}</div>`).join("");
}

function renderOutcomeLine(instrument) {
  if (state.phase === "betting") {
    return `<p class="outcome-line">Payout odds are profit per $1 staked.</p>`;
  }

  if (instrument.key === "dice") {
    const total = instrument.display[0] + instrument.display[1];
    return `<p class="outcome-line">Rolled ${instrument.display.join(" and ")}; sum ${total}</p>`;
  }

  if (instrument.key === "cards") {
    return `<p class="outcome-line">${instrument.display.map((card) => card.name).join(" and ")}</p>`;
  }

  return `<p class="outcome-line">Flipped ${instrument.display.join("")}; ${countHeads(instrument.display)} heads</p>`;
}

function renderMarket(market, result) {
  const stake = result ? result.stake : getBet(market.id);
  const maxBet = Math.floor(Math.max(0, state.bankroll));

  return `
    <section class="market-card ${result ? getResultClass(result) : ""}">
      <div class="market-title-row">
        <div>
          <h3>${market.title}</h3>
          <p>${market.description}</p>
        </div>
        ${result ? renderActionPill(result.analysis.shouldBet) : ""}
      </div>
      <div class="quote-box">
        <span>Given payout odds</span>
        <strong>${formatOdds(market.offeredOdds)}</strong>
      </div>
      <div class="bet-line">
        <input
          type="range"
          min="0"
          max="${maxBet}"
          step="5"
          value="${stake}"
          data-market-id="${market.id}"
          data-stake-input="range"
          ${result ? "disabled" : ""}
          aria-label="Stake for ${market.title}"
        />
        <input
          type="number"
          min="0"
          max="${maxBet}"
          step="5"
          value="${stake}"
          data-market-id="${market.id}"
          data-stake-input="number"
          ${result ? "disabled" : ""}
          aria-label="Stake amount for ${market.title}"
        />
      </div>
      ${
        result
          ? renderResultStrip(result)
          : `
            <div class="quick-stakes">
              <button class="small-button" type="button" data-market-id="${market.id}" data-quick-stake="0">Pass</button>
              <button class="small-button" type="button" data-market-id="${market.id}" data-quick-stake="25">$25</button>
              <button class="small-button" type="button" data-market-id="${market.id}" data-quick-stake="100">$100</button>
              <button class="small-button" type="button" data-market-id="${market.id}" data-quick-stake="250">$250</button>
            </div>
          `
      }
    </section>
  `;
}

function renderActionPill(shouldBet) {
  return `<span class="action-pill ${shouldBet ? "bet" : "pass"}">${shouldBet ? "Bet" : "Pass"}</span>`;
}

function renderResultStrip(result) {
  const pnlText = result.pnl >= 0 ? `+${formatMoney(result.pnl)}` : `-${formatMoney(Math.abs(result.pnl))}`;
  const edgeText = result.market.edge >= 0 ? `+${formatMoneyCents(result.market.edge)}` : `-${formatMoneyCents(Math.abs(result.market.edge))}`;

  return `
    <div class="result-strip">
      <div>
        <span>Outcome</span>
        <strong>${result.won ? "Won" : "Lost"} (${pnlText})</strong>
      </div>
      <div>
        <span>Correct stake</span>
        <strong>${formatMoney(result.analysis.optimalStake)}</strong>
      </div>
      <div>
        <span>Expected profit per $1</span>
        <strong>${edgeText}</strong>
      </div>
    </div>
  `;
}

function renderFinalSummary() {
  const score = getScoreParts(state.totals);
  const pnl = state.bankroll - state.startingBankroll;
  const pnlText = pnl >= 0 ? `+${formatMoney(pnl)}` : `-${formatMoney(Math.abs(pnl))}`;

  els.marketGrid.innerHTML = `
    <div class="empty-state">
      <div>
        <p class="eyebrow">Final score</p>
        <h2>${score.total.toFixed(1)} / 100</h2>
        <p>Correct markets: ${score.decision.toFixed(1)} / 60. Kelly sizing: ${score.sizing.toFixed(1)} / 40. Final bankroll ${formatMoney(state.bankroll)} (${pnlText}).</p>
        <button class="primary-button" type="button" data-show-review="true">Show round review</button>
      </div>
    </div>
  `;
}

function renderReview() {
  if (!state.history.length) {
    els.reviewContent.innerHTML = `<p class="analysis-line">No completed rounds yet.</p>`;
    return;
  }

  els.reviewContent.innerHTML = state.history
    .map((round) => {
      const rows = round.results
        .map(
          (result) => `
            <tr>
              <td>${getInstrumentName(result.market.instrument)}</td>
              <td>${result.market.title}</td>
              <td>${formatOdds(result.market.offeredOdds)}</td>
              <td>${result.analysis.shouldBet ? "Bet" : "Pass"}</td>
              <td>${formatMoney(result.stake)}<br><span class="analysis-line">Correct ${formatMoney(result.analysis.optimalStake)}</span></td>
              <td>${result.won ? "Won" : "Lost"}<br><span class="analysis-line">${result.pnl >= 0 ? "+" : "-"}${formatMoney(Math.abs(result.pnl))}</span></td>
            </tr>
          `,
        )
        .join("");

      return `
        <section class="review-round">
          <h3>Round ${round.round}: ${formatMoney(round.startBankroll)} to ${formatMoney(round.endBankroll)}</h3>
          <table class="review-table">
            <thead>
              <tr>
                <th>Object</th>
                <th>Market</th>
                <th>Given odds</th>
                <th>Correct action</th>
                <th>Your stake</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </section>
      `;
    })
    .join("");
}

function renderDie(value) {
  const positions = {
    1: [[2, 2]],
    2: [
      [1, 1],
      [3, 3],
    ],
    3: [
      [1, 1],
      [2, 2],
      [3, 3],
    ],
    4: [
      [1, 1],
      [1, 3],
      [3, 1],
      [3, 3],
    ],
    5: [
      [1, 1],
      [1, 3],
      [2, 2],
      [3, 1],
      [3, 3],
    ],
    6: [
      [1, 1],
      [1, 3],
      [2, 1],
      [2, 3],
      [3, 1],
      [3, 3],
    ],
  };

  return `
    <div class="asset-die">
      ${(positions[value] || positions[6])
        .map(([row, col]) => `<span style="grid-row:${row};grid-column:${col}"></span>`)
        .join("")}
    </div>
  `;
}

function renderCard(card) {
  if (!card) {
    return `<div class="asset-card face-down" aria-label="Face-down card"></div>`;
  }

  return `
    <div class="asset-card ${card.color === "red" ? "red" : ""}">
      <span>${card.rank}</span>
      <small>${card.symbol}</small>
    </div>
  `;
}

function getResultClass(result) {
  if (result.analysis.shouldBet && result.stake > 0) return "correct";
  if (!result.analysis.shouldBet && result.stake === 0) return "correct";
  return "incorrect";
}

function setStake(id, value) {
  const cleaned = Math.max(
    0,
    Math.min(Math.floor(Number(value) || 0), Math.floor(Math.max(0, state.bankroll))),
  );
  state.bets[id] = cleaned;
  document.querySelectorAll(`[data-market-id="${id}"][data-stake-input]`).forEach((input) => {
    input.value = String(cleaned);
  });
  updateRoundStats();
}

function getBet(id) {
  return Math.max(0, Number(state.bets[id] || 0));
}

function getTotalStake() {
  return Object.values(state.bets).reduce((sum, value) => sum + Number(value || 0), 0);
}

function updateRoundStats() {
  if (!state) return;
  const staked = getTotalStake();
  const available = state.bankroll - staked;
  els.totalStaked.textContent = formatMoney(staked);
  els.availableBankroll.textContent = formatMoney(Math.max(0, available));
  els.availableBankroll.style.color = available < 0 ? "var(--red)" : "inherit";
}

function showMessage(message) {
  els.messageLine.textContent = message;
}

function allMarkets() {
  return Object.values(state.board).flatMap((instrument) => instrument.markets);
}

function drawCards(count) {
  const deck = createDeck();
  const cards = [];
  for (let i = 0; i < count; i += 1) {
    const index = randomInt(0, deck.length - 1);
    cards.push(deck.splice(index, 1)[0]);
  }
  return cards;
}

function createDeck() {
  return SUITS.flatMap((suit) =>
    RANKS.map((rank) => {
      const color = suit === "hearts" || suit === "diamonds" ? "red" : "black";
      const symbol = { hearts: "H", diamonds: "D", clubs: "C", spades: "S" }[suit];
      return {
        rank,
        suit,
        color,
        symbol,
        name: `${rank}${symbol}`,
      };
    }),
  );
}

function countDiceOutcomes(predicate) {
  let count = 0;
  for (let a = 1; a <= 6; a += 1) {
    for (let b = 1; b <= 6; b += 1) {
      if (predicate(a, b)) count += 1;
    }
  }
  return count;
}

function cardProbability(predicate) {
  const deck = createDeck();
  let wins = 0;
  let total = 0;
  for (let i = 0; i < deck.length; i += 1) {
    for (let j = i + 1; j < deck.length; j += 1) {
      total += 1;
      if (predicate([deck[i], deck[j]])) wins += 1;
    }
  }
  return wins / total;
}

function coinProbability(predicate) {
  const outcomes = [];
  ["H", "T"].forEach((a) => {
    ["H", "T"].forEach((b) => {
      ["H", "T"].forEach((c) => {
        outcomes.push([a, b, c]);
      });
    });
  });
  return outcomes.filter(predicate).length / outcomes.length;
}

function countHeads(coins) {
  return coins.filter((coin) => coin === "H").length;
}

function getInstrumentName(key) {
  return {
    dice: "Dice",
    cards: "Cards",
    coins: "Coins",
  }[key];
}

function formatMoney(value) {
  return `$${Math.round(value).toLocaleString("en-US")}`;
}

function formatMoneyCents(value) {
  return `$${value.toFixed(2)}`;
}

function formatOdds(value) {
  return `${value.toFixed(2)}:1`;
}

function roundOdds(value) {
  return Math.round(value * 100) / 100;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sample(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function setActiveGame(game) {
  activeGame = game;
  els.gameTabs.forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.gameTab === game);
  });
  els.gameViews.forEach((view) => {
    view.classList.toggle("is-active", view.dataset.gameView === game);
  });

  if (game === "probability") {
    els.appEyebrow.textContent = "Kelly sizing practice";
    els.appTitle.textContent = "Probability Betting";
    stopEtfTimer();
    renderStatus();
    renderScore();
    return;
  }

  els.appEyebrow.textContent = "ETF arbitrage practice";
  els.appTitle.textContent = "ETF Challenge";
  renderEtf();
}

function setupGameTabs() {
  els.gameTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      setActiveGame(tab.dataset.gameTab);
    });
  });
}

function initEtfGame() {
  stopEtfTimer();
  etfState = createEtfState();
  renderEtf();
}

function createEtfState() {
  const stocks = Object.fromEntries(
    ETF_STOCKS.map(([symbol, name, mid]) => [symbol, makeStock(symbol, name, mid)]),
  );
  const etfs = ETF_PRODUCTS.map((product) => makeEtf(product, stocks));

  return {
    stocks,
    etfs,
    running: false,
    timeLeft: ETF_SESSION_SECONDS,
    timerId: null,
    pnl: 0,
    newsPnl: 0,
    normalPnl: 0,
    trades: 0,
    profitableTrades: 0,
    lastUpdate: "Setup",
    lastUpdateType: "normal",
    tape: [],
  };
}

function makeStock(symbol, name, mid) {
  return quoteStock({
    symbol,
    name,
    mid,
    flash: "",
  });
}

function makeEtf(product, stocks) {
  const mid = product.constituents.reduce((sum, symbol) => sum + stocks[symbol].mid, 0);
  return quoteEtf({
    ...product,
    mid,
    flash: "",
  });
}

function quoteStock(stock) {
  stock.mid = roundCents(Math.max(1, stock.mid));
  stock.bid = roundCents(stock.mid - STOCK_HALF_SPREAD);
  stock.ask = roundCents(stock.mid + STOCK_HALF_SPREAD);
  return stock;
}

function quoteEtf(etf) {
  etf.mid = roundCents(Math.max(1, etf.mid));
  etf.bid = roundCents(etf.mid - ETF_HALF_SPREAD);
  etf.ask = roundCents(etf.mid + ETF_HALF_SPREAD);
  return etf;
}

function toggleEtfTimer() {
  if (!etfState) return;
  etfState.running = !etfState.running;
  if (etfState.running) {
    startEtfTimer();
  } else {
    stopEtfTimer();
  }
  renderEtf();
}

function startEtfTimer() {
  if (!etfState || etfState.timerId || etfState.timeLeft <= 0) return;
  etfState.timerId = window.setInterval(() => {
    runEtfTick();
  }, 1500);
}

function stopEtfTimer() {
  if (etfState?.timerId) {
    window.clearInterval(etfState.timerId);
    etfState.timerId = null;
  }
}

function runEtfTick() {
  if (!etfState || etfState.timeLeft <= 0) {
    stopEtfTimer();
    if (etfState) etfState.running = false;
    renderEtf();
    return;
  }

  clearEtfFlashes();
  const isNews = Math.random() < 0.22;
  etfState.lastUpdateType = isNews ? "news" : "normal";

  if (isNews) {
    const stock = sample(Object.values(etfState.stocks));
    const move = sample([-0.55, -0.4, 0.4, 0.55]);
    moveStock(stock.symbol, move);
    etfState.lastUpdate = `News: ${stock.symbol} ${move > 0 ? "up" : "down"}`;
  } else {
    const moves = randomInt(2, 4);
    for (let i = 0; i < moves; i += 1) {
      if (Math.random() < 0.65) {
        const stock = sample(Object.values(etfState.stocks));
        moveStock(stock.symbol, sample([-0.2, -0.1, 0.1, 0.2]));
      } else {
        const etf = sample(etfState.etfs);
        moveEtf(etf.symbol, sample([-0.25, -0.15, 0.15, 0.25]));
      }
    }
    etfState.lastUpdate = "Normal quote update";
  }

  if (Math.random() < 0.48) {
    injectEtfOpportunity(isNews ? "news" : "normal");
  }

  etfState.timeLeft -= 1;
  if (etfState.timeLeft <= 0) {
    etfState.running = false;
    stopEtfTimer();
    etfState.lastUpdate = "Session complete";
  }

  renderEtf();
}

function clearEtfFlashes() {
  Object.values(etfState.stocks).forEach((stock) => {
    stock.flash = "";
  });
  etfState.etfs.forEach((etf) => {
    etf.flash = "";
  });
}

function moveStock(symbol, move) {
  const stock = etfState.stocks[symbol];
  stock.mid = roundCents(stock.mid + move);
  stock.flash = move >= 0 ? "up" : "down";
  quoteStock(stock);
}

function moveEtf(symbol, move) {
  const etf = getEtf(symbol);
  etf.mid = roundCents(etf.mid + move);
  etf.flash = move >= 0 ? "up" : "down";
  quoteEtf(etf);
}

function injectEtfOpportunity(type) {
  const etf = sample(etfState.etfs);
  const side = sample(["buy", "sell"]);
  const arb = calculateEtfArb(etf);
  const edge = sample([0.12, 0.16, 0.22, 0.28, 0.34]);

  if (side === "buy") {
    etf.mid = roundCents(Math.max(1, arb.stockBidSum - edge - ETF_HALF_SPREAD));
    etf.flash = "down";
    etfState.lastUpdate = `${type === "news" ? "News" : "Normal"} dislocation in ${etf.symbol}`;
  } else {
    etf.mid = roundCents(arb.stockAskSum + edge + ETF_HALF_SPREAD);
    etf.flash = "up";
    etfState.lastUpdate = `${type === "news" ? "News" : "Normal"} dislocation in ${etf.symbol}`;
  }

  quoteEtf(etf);
}

function executeEtfTrade(symbol, side) {
  if (!etfState || etfState.timeLeft <= 0) return;
  const etf = getEtf(symbol);
  const arb = calculateEtfArb(etf);
  const edge = side === "buy" ? arb.buyEdge : arb.sellEdge;
  const pnl = roundCents(edge * ETF_TRADE_SIZE);
  const profitable = pnl > 0;

  etfState.pnl = roundCents(etfState.pnl + pnl);
  etfState.trades += 1;
  if (profitable) etfState.profitableTrades += 1;
  if (etfState.lastUpdateType === "news") {
    etfState.newsPnl = roundCents(etfState.newsPnl + pnl);
  } else {
    etfState.normalPnl = roundCents(etfState.normalPnl + pnl);
  }

  etfState.tape.unshift({
    text: `${side === "buy" ? "Buy" : "Sell"} ${etf.symbol}`,
    detail:
      side === "buy"
        ? `Sold basket at bids, bought ETF at ask`
        : `Sold ETF at bid, bought basket at asks`,
    pnl,
    edge,
    type: etfState.lastUpdateType,
  });
  etfState.tape = etfState.tape.slice(0, 12);
  etfState.lastUpdate = `${profitable ? "Profitable" : "Losing"} ${etf.symbol} trade`;

  resetConstituentStocks(etf);
  renderEtf();
}

function resetConstituentStocks(etf) {
  const currentSum = etf.constituents.reduce((sum, symbol) => sum + etfState.stocks[symbol].mid, 0);
  const factor = etf.mid / currentSum;
  etf.constituents.forEach((symbol) => {
    const stock = etfState.stocks[symbol];
    const nextMid = roundCents(stock.mid * factor);
    stock.flash = nextMid >= stock.mid ? "up" : "down";
    stock.mid = nextMid;
    quoteStock(stock);
  });
}

function calculateEtfArb(etf) {
  const stockBidSum = roundCents(
    etf.constituents.reduce((sum, symbol) => sum + etfState.stocks[symbol].bid, 0),
  );
  const stockAskSum = roundCents(
    etf.constituents.reduce((sum, symbol) => sum + etfState.stocks[symbol].ask, 0),
  );
  return {
    stockBidSum,
    stockAskSum,
    buyEdge: roundCents(stockBidSum - etf.ask),
    sellEdge: roundCents(etf.bid - stockAskSum),
  };
}

function renderEtf() {
  if (!etfState) return;
  if (activeGame === "etf") renderEtfStatus();
  etfEls.phaseLabel.textContent = etfState.running ? "Live pricing phase" : "Paused practice";
  etfEls.pauseButton.textContent = etfState.running ? "Pause" : "Start";
  etfEls.pnl.textContent = formatCash(etfState.pnl);
  etfEls.pnl.style.color = etfState.pnl >= 0 ? "var(--green)" : "var(--red)";
  etfEls.accuracy.textContent = `${etfState.profitableTrades} / ${etfState.trades}`;
  etfEls.lastUpdate.textContent = etfState.lastUpdate;
  etfEls.score.textContent = `Score ${getEtfScore().toFixed(1)}`;
  etfEls.stockTable.innerHTML = renderStockRows();
  etfEls.board.innerHTML = etfState.etfs.map(renderEtfCard).join("");
  etfEls.tape.innerHTML = renderEtfTape();
}

function renderEtfStatus() {
  els.statusLabelOne.textContent = "Total P&L";
  els.statusLabelTwo.textContent = "Time";
  els.statusLabelThree.textContent = "Accuracy";
  els.statusLabelFour.textContent = "Trades";
  els.bankrollValue.textContent = formatCash(etfState.pnl);
  els.roundValue.textContent = `${etfState.timeLeft}s`;
  els.skillValue.textContent = etfState.trades
    ? `${Math.round((etfState.profitableTrades / etfState.trades) * 100)}%`
    : "0%";
  els.clockValue.textContent = String(etfState.trades);
}

function renderStockRows() {
  return Object.values(etfState.stocks)
    .map(
      (stock) => `
        <div class="stock-row">
          <div class="stock-symbol">
            <strong>${stock.symbol}</strong>
            <span>${stock.name}</span>
          </div>
          <div class="quote-cell ${stock.flash ? `flash-${stock.flash}` : ""}">${formatPrice(stock.bid)}</div>
          <div class="quote-cell ${stock.flash ? `flash-${stock.flash}` : ""}">${formatPrice(stock.ask)}</div>
        </div>
      `,
    )
    .join("");
}

function renderEtfCard(etf) {
  const disabled = etfState.timeLeft <= 0 ? "disabled" : "";
  return `
    <article class="etf-card">
      <div>
        <p class="eyebrow">${etf.name}</p>
        <h3>${etf.symbol}</h3>
      </div>
      <div class="etf-composition">
        ${etf.constituents.map((symbol) => `<span class="ticker-chip">${symbol}</span>`).join("")}
      </div>
      <div class="etf-quote-grid">
        <div class="${etf.flash ? `flash-${etf.flash}` : ""}">
          <span>ETF bid</span>
          <strong>${formatPrice(etf.bid)}</strong>
        </div>
        <div class="${etf.flash ? `flash-${etf.flash}` : ""}">
          <span>ETF ask</span>
          <strong>${formatPrice(etf.ask)}</strong>
        </div>
      </div>
      <div class="etf-actions">
        <button class="buy-button" type="button" data-etf-trade="buy" data-etf-symbol="${etf.symbol}" ${disabled}>Buy ETF</button>
        <button class="sell-button" type="button" data-etf-trade="sell" data-etf-symbol="${etf.symbol}" ${disabled}>Sell ETF</button>
      </div>
    </article>
  `;
}

function renderEtfTape() {
  if (!etfState.tape.length) {
    return `<div class="tape-item"><div><span>Waiting</span><strong>No trades yet</strong></div><div class="tape-pnl">$0.00</div></div>`;
  }

  return etfState.tape
    .map(
      (trade) => `
        <div class="tape-item">
          <div>
            <span>${trade.type === "news" ? "News P&L" : "Normal P&L"} | Edge ${formatCash(trade.edge)}</span>
            <strong>${trade.text}</strong>
            <span>${trade.detail}</span>
          </div>
          <div class="tape-pnl ${trade.pnl >= 0 ? "positive" : "negative"}">${formatCash(trade.pnl)}</div>
        </div>
      `,
    )
    .join("");
}

function getEtf(symbol) {
  return etfState.etfs.find((etf) => etf.symbol === symbol);
}

function getEtfScore() {
  const accuracy = etfState.trades ? etfState.profitableTrades / etfState.trades : 0;
  return Math.max(0, etfState.pnl) * accuracy;
}

function formatPrice(value) {
  return value.toFixed(2);
}

function formatCash(value) {
  const sign = value < 0 ? "-" : "";
  return `${sign}$${Math.abs(value).toFixed(2)}`;
}

function roundCents(value) {
  return Math.round(value * 100) / 100;
}

els.submitButton.addEventListener("click", () => {
  if (state.phase === "betting") {
    submitRound();
  } else if (state.phase === "results") {
    nextRound();
  } else {
    startGame();
  }
});

els.resetButton.addEventListener("click", startGame);
els.startButton.addEventListener("click", startGame);

els.marketGrid.addEventListener("input", (event) => {
  const input = event.target.closest("[data-stake-input]");
  if (!input || state.phase !== "betting") return;
  setStake(input.dataset.marketId, input.value);
});

els.marketGrid.addEventListener("click", (event) => {
  const quick = event.target.closest("[data-quick-stake]");
  if (quick && state.phase === "betting") {
    setStake(quick.dataset.marketId, quick.dataset.quickStake);
    return;
  }

  const reviewButton = event.target.closest("[data-show-review]");
  if (reviewButton) {
    els.reviewDrawer.classList.add("is-open");
    renderReview();
  }
});

els.clearReviewButton.addEventListener("click", () => {
  els.reviewDrawer.classList.remove("is-open");
});

etfEls.resetButton.addEventListener("click", initEtfGame);
etfEls.tickButton.addEventListener("click", runEtfTick);
etfEls.pauseButton.addEventListener("click", toggleEtfTimer);

etfEls.board.addEventListener("click", (event) => {
  const tradeButton = event.target.closest("[data-etf-trade]");
  if (!tradeButton) return;
  executeEtfTrade(tradeButton.dataset.etfSymbol, tradeButton.dataset.etfTrade);
});

setupGameTabs();
startGame();
initEtfGame();
setActiveGame("probability");
