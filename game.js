const els = {
  bankrollValue: document.querySelector("#bankrollValue"),
  roundValue: document.querySelector("#roundValue"),
  skillValue: document.querySelector("#skillValue"),
  clockValue: document.querySelector("#clockValue"),
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
  edgeCount: document.querySelector("#edgeCount"),
  messageLine: document.querySelector("#messageLine"),
  marketGrid: document.querySelector("#marketGrid"),
  decisionScore: document.querySelector("#decisionScore"),
  sizingScore: document.querySelector("#sizingScore"),
  arbScore: document.querySelector("#arbScore"),
  decisionMeter: document.querySelector("#decisionMeter"),
  sizingMeter: document.querySelector("#sizingMeter"),
  arbMeter: document.querySelector("#arbMeter"),
  leaderboard: document.querySelector("#leaderboard"),
  tabBody: document.querySelector("#tabBody"),
  reviewDrawer: document.querySelector("#reviewDrawer"),
  reviewContent: document.querySelector("#reviewContent"),
  clearReviewButton: document.querySelector("#clearReviewButton"),
};

const EVENT_COUNT = 5;
const ROUND_SECONDS = 60;
const EDGE_EPSILON = 0.01;

const notebook = {
  rules: `
    <p>Each round offers dice, card, and coin events with quoted profit odds. Stake only when the payout is better than fair value, then size the bet from bankroll.</p>
    <ul>
      <li>Positive edge: true probability is higher than the quote implies.</li>
      <li>Results reveal the outcome, fair odds, edge, and Kelly stake.</li>
      <li>Skill combines decision quality, sizing efficiency, and arbitrage detection.</li>
    </ul>
  `,
  probability: `
    <div class="formula">edge = p * payout - (1 - p)</div>
    <div class="formula">kelly fraction = max(0, (b * p - q) / b)</div>
    <p>Common fair profit odds: coin heads 1:1, die shows 6 5:1, two dice doubles 5:1, card is ace 12:1, card is red 1:1.</p>
  `,
  examples: `
    <p>If a fair coin pays 1.30:1, each $1 has expected profit 0.50 * 1.30 - 0.50 = $0.15. Kelly stakes 0.15 / 1.30 = 11.5% of bankroll.</p>
    <p>If a die six pays 4:1, fair probability is 1/6 and expected profit is 1/6 * 4 - 5/6 = -16.7 cents per $1. Skip it.</p>
  `,
  strategy: `
    <ul>
      <li>Convert payout to implied probability: 1 / (payout + 1).</li>
      <li>Bet when your true probability is above the implied probability.</li>
      <li>For several strong edges, keep total risk under bankroll and scale stakes together.</li>
      <li>Complementary markets can be arbitrage when both sides are quoted too generously.</li>
    </ul>
  `,
};

let state;

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
    events: [],
    bets: {},
    history: [],
    totals: emptyTotals(),
    aiPlayers: createAiPlayers(bankroll),
  };
}

function emptyTotals() {
  return {
    decision: 0,
    decisionMax: 0,
    sizing: 0,
    sizingMax: 0,
    arb: 0,
  };
}

function createAiPlayers(bankroll) {
  return [
    { name: "You", isPlayer: true, bankroll, totals: emptyTotals() },
    { name: "Kelly Desk", style: "kelly", bankroll, totals: emptyTotals() },
    { name: "Half Kelly", style: "half", bankroll, totals: emptyTotals() },
    { name: "Aggressive", style: "aggressive", bankroll, totals: emptyTotals() },
    { name: "Threshold", style: "threshold", bankroll, totals: emptyTotals() },
    { name: "Noise Trader", style: "noise", bankroll, totals: emptyTotals() },
    { name: "Flat Better", style: "flat", bankroll, totals: emptyTotals() },
  ];
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
  state.events = createRoundMarkets(state.round);
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

function createRoundMarkets(roundNumber) {
  const markets = [];
  const seen = new Set();
  const useArbPair = Math.random() < 0.38;

  if (useArbPair) {
    const pair = makeComplementPair(roundNumber);
    pair.forEach((market) => {
      markets.push(market);
      seen.add(market.title);
    });
  }

  let attempts = 0;
  while (markets.length < EVENT_COUNT && attempts < 120) {
    attempts += 1;
    const template = sample(marketTemplates);
    const base = template();
    if (seen.has(base.title)) continue;
    markets.push(quoteMarket(base));
    seen.add(base.title);
  }

  return shuffle(markets).slice(0, EVENT_COUNT);
}

function makeComplementPair(roundNumber) {
  const coin = {
    value: null,
    toss() {
      if (!this.value) this.value = Math.random() < 0.5 ? "Heads" : "Tails";
      return this.value;
    },
  };
  const group = `arb-coin-${roundNumber}-${Math.random().toString(16).slice(2)}`;
  const headBase = {
    category: "Coin",
    title: "Coin lands heads",
    description: "One fair coin, one shared toss.",
    p: 0.5,
    visual: { type: "coin", label: "H" },
    arbGroup: group,
    resolve: () => {
      const result = coin.toss();
      return { win: result === "Heads", outcomeText: result };
    },
  };
  const tailBase = {
    category: "Coin",
    title: "Coin lands tails",
    description: "The opposite side of the same shared toss.",
    p: 0.5,
    visual: { type: "coin", label: "T" },
    arbGroup: group,
    resolve: () => {
      const result = coin.toss();
      return { win: result === "Tails", outcomeText: result };
    },
  };

  return [
    quoteMarket(headBase, randomBetween(1.14, 1.42)),
    quoteMarket(tailBase, randomBetween(1.12, 1.4)),
  ];
}

const marketTemplates = [
  () => {
    const target = randomInt(1, 6);
    return {
      category: "Dice",
      title: `Die shows ${target}`,
      description: "One fair six-sided die.",
      p: 1 / 6,
      visual: { type: "die", value: target },
      resolve: () => {
        const roll = randomInt(1, 6);
        return { win: roll === target, outcomeText: `Rolled ${roll}` };
      },
    };
  },
  () => {
    const target = randomInt(3, 6);
    return {
      category: "Dice",
      title: `Die is at least ${target}`,
      description: "One fair six-sided die.",
      p: (7 - target) / 6,
      visual: { type: "die", value: target },
      resolve: () => {
        const roll = randomInt(1, 6);
        return { win: roll >= target, outcomeText: `Rolled ${roll}` };
      },
    };
  },
  () => {
    const wantsEven = Math.random() < 0.5;
    return {
      category: "Dice",
      title: `Die is ${wantsEven ? "even" : "odd"}`,
      description: "One fair six-sided die.",
      p: 0.5,
      visual: { type: "die", value: wantsEven ? 4 : 5 },
      resolve: () => {
        const roll = randomInt(1, 6);
        const win = wantsEven ? roll % 2 === 0 : roll % 2 === 1;
        return { win, outcomeText: `Rolled ${roll}` };
      },
    };
  },
  () => {
    const target = sample([7, 8, 9, 10, 11]);
    const wins = countTwoDice((a, b) => a + b >= target);
    return {
      category: "Dice",
      title: `Two dice sum >= ${target}`,
      description: "Two fair dice rolled together.",
      p: wins / 36,
      visual: { type: "die", value: 6 },
      resolve: () => {
        const a = randomInt(1, 6);
        const b = randomInt(1, 6);
        return {
          win: a + b >= target,
          outcomeText: `Rolled ${a} and ${b}; sum ${a + b}`,
        };
      },
    };
  },
  () => ({
    category: "Dice",
    title: "Two dice are doubles",
    description: "Two fair dice rolled together.",
    p: 1 / 6,
    visual: { type: "die", value: 2 },
    resolve: () => {
      const a = randomInt(1, 6);
      const b = randomInt(1, 6);
      return { win: a === b, outcomeText: `Rolled ${a} and ${b}` };
    },
  }),
  () => {
    const wantsHeads = Math.random() < 0.5;
    return {
      category: "Coin",
      title: `Coin lands ${wantsHeads ? "heads" : "tails"}`,
      description: "One fair coin toss.",
      p: 0.5,
      visual: { type: "coin", label: wantsHeads ? "H" : "T" },
      resolve: () => {
        const result = Math.random() < 0.5 ? "Heads" : "Tails";
        return {
          win: wantsHeads ? result === "Heads" : result === "Tails",
          outcomeText: result,
        };
      },
    };
  },
  () => ({
    category: "Coin",
    title: "Two coins both heads",
    description: "Two independent fair coin tosses.",
    p: 0.25,
    visual: { type: "coin", label: "HH" },
    resolve: () => {
      const first = Math.random() < 0.5 ? "H" : "T";
      const second = Math.random() < 0.5 ? "H" : "T";
      return {
        win: first === "H" && second === "H",
        outcomeText: `${first}${second}`,
      };
    },
  }),
  () => ({
    category: "Coin",
    title: "Exactly two heads in three",
    description: "Three independent fair coin tosses.",
    p: 3 / 8,
    visual: { type: "coin", label: "2H" },
    resolve: () => {
      const flips = Array.from({ length: 3 }, () =>
        Math.random() < 0.5 ? "H" : "T",
      );
      const heads = flips.filter((flip) => flip === "H").length;
      return {
        win: heads === 2,
        outcomeText: `${flips.join("")}; ${heads} heads`,
      };
    },
  }),
  () => ({
    category: "Cards",
    title: "Card is red",
    description: "One card drawn from a fresh 52-card deck.",
    p: 26 / 52,
    visual: { type: "card", label: "RED", color: "red" },
    resolve: () => {
      const card = drawCard();
      return {
        win: card.color === "red",
        outcomeText: card.name,
      };
    },
  }),
  () => ({
    category: "Cards",
    title: "Card is an ace",
    description: "One card drawn from a fresh 52-card deck.",
    p: 4 / 52,
    visual: { type: "card", label: "A" },
    resolve: () => {
      const card = drawCard();
      return {
        win: card.rank === "A",
        outcomeText: card.name,
      };
    },
  }),
  () => ({
    category: "Cards",
    title: "Card is a face card",
    description: "Jack, queen, or king from a fresh deck.",
    p: 12 / 52,
    visual: { type: "card", label: "JQK" },
    resolve: () => {
      const card = drawCard();
      return {
        win: ["J", "Q", "K"].includes(card.rank),
        outcomeText: card.name,
      };
    },
  }),
  () => ({
    category: "Cards",
    title: "Card is a heart",
    description: "One card drawn from a fresh 52-card deck.",
    p: 13 / 52,
    visual: { type: "card", label: "H", color: "red" },
    resolve: () => {
      const card = drawCard();
      return {
        win: card.suit === "hearts",
        outcomeText: card.name,
      };
    },
  }),
  () => ({
    category: "Cards",
    title: "Card is ten or higher",
    description: "Ten, jack, queen, king, or ace.",
    p: 20 / 52,
    visual: { type: "card", label: "10+" },
    resolve: () => {
      const card = drawCard();
      return {
        win: ["10", "J", "Q", "K", "A"].includes(card.rank),
        outcomeText: card.name,
      };
    },
  }),
  () => ({
    category: "Cards",
    title: "Card is black queen or king",
    description: "Queen or king of spades or clubs.",
    p: 4 / 52,
    visual: { type: "card", label: "BQK" },
    resolve: () => {
      const card = drawCard();
      return {
        win:
          card.color === "black" && (card.rank === "Q" || card.rank === "K"),
        outcomeText: card.name,
      };
    },
  }),
];

function quoteMarket(base, forcedMultiplier) {
  const fairB = (1 - base.p) / base.p;
  const multiplier = forcedMultiplier ?? sample([0.62, 0.76, 0.88, 0.96, 1, 1.08, 1.2, 1.36, 1.58]);
  const offeredB = roundOdds(Math.max(0.05, fairB * multiplier));
  const edge = base.p * offeredB - (1 - base.p);
  const kellyFrac = Math.max(0, edge / offeredB);

  return {
    ...base,
    id: `m-${Math.random().toString(16).slice(2)}`,
    fairB,
    offeredB,
    impliedP: 1 / (offeredB + 1),
    edge,
    kellyFrac,
  };
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

  const aiRoundBets = state.aiPlayers
    .filter((player) => !player.isPlayer)
    .map((player) => ({
      player,
      bets: chooseAiBets(player, state.events),
      startBankroll: player.bankroll,
    }));

  const results = state.events.map((market) => {
    const outcome = market.resolve();
    const stake = getBet(market.id);
    const pnl = stake > 0 ? (outcome.win ? stake * market.offeredB : -stake) : 0;
    const analysis = analyzeStake(market, stake, state.roundStartBankroll);

    return {
      market,
      outcome,
      stake,
      pnl,
      analysis,
    };
  });

  const playerPnl = results.reduce((sum, result) => sum + result.pnl, 0);
  state.bankroll = Math.max(0, state.bankroll + playerPnl);
  state.aiPlayers[0].bankroll = state.bankroll;

  applyRoundScores(state.totals, results, state.bets, state.roundStartBankroll);
  applyArbitrageScore(state.totals, results, state.bets);

  aiRoundBets.forEach(({ player, bets, startBankroll }) => {
    const pnl = results.reduce((sum, result) => {
      const stake = bets[result.market.id] || 0;
      return sum + (stake > 0 ? (result.outcome.win ? stake * result.market.offeredB : -stake) : 0);
    }, 0);
    player.bankroll = Math.max(0, player.bankroll + pnl);
    applyRoundScores(player.totals, results, bets, startBankroll);
    applyArbitrageScore(player.totals, results, bets);
  });

  state.history.push({
    round: state.round,
    startBankroll: state.roundStartBankroll,
    endBankroll: state.bankroll,
    pnl: playerPnl,
    results,
  });

  state.phase = state.round >= state.totalRounds ? "final" : "results";
  render();

  if (state.phase === "final") {
    els.reviewDrawer.classList.add("is-open");
    renderReview();
  }
}

function nextRound() {
  if (state.phase === "results") {
    state.round += 1;
    setupRound();
  }
}

function chooseAiBets(player, markets) {
  const bets = {};
  const bankroll = Math.max(0, player.bankroll);

  markets.forEach((market) => {
    const optimal = market.kellyFrac * bankroll;
    let stake = 0;

    if (player.style === "kelly") {
      stake = optimal;
    } else if (player.style === "half") {
      stake = optimal * 0.5;
    } else if (player.style === "aggressive") {
      stake = market.edge > 0 ? optimal * 1.45 : randomChance(0.12) ? bankroll * 0.04 : 0;
    } else if (player.style === "threshold") {
      stake = market.edge > 0.08 ? optimal * 0.8 : 0;
    } else if (player.style === "noise") {
      stake = randomChance(market.edge > 0 ? 0.7 : 0.22) ? bankroll * randomBetween(0.02, 0.12) : 0;
    } else if (player.style === "flat") {
      stake = market.edge > 0 ? Math.min(75, bankroll * 0.08) : 0;
    }

    bets[market.id] = Math.max(0, Math.round(stake));
  });

  const total = Object.values(bets).reduce((sum, stake) => sum + stake, 0);
  if (total > bankroll && total > 0) {
    const scale = bankroll / total;
    Object.keys(bets).forEach((id) => {
      bets[id] = Math.floor(bets[id] * scale);
    });
  }

  return bets;
}

function applyRoundScores(totals, results, betMap, bankrollBase) {
  results.forEach((result) => {
    const stake = betMap[result.market.id] || 0;
    const analysis = analyzeStake(result.market, stake, bankrollBase);
    totals.decision += analysis.decisionScore;
    totals.decisionMax += 1;
    totals.sizing += analysis.sizingScore;
    totals.sizingMax += 1;
  });
}

function applyArbitrageScore(totals, results, betMap) {
  const groups = new Map();
  results.forEach((result) => {
    if (!result.market.arbGroup) return;
    if (!groups.has(result.market.arbGroup)) groups.set(result.market.arbGroup, []);
    groups.get(result.market.arbGroup).push(result);
  });

  groups.forEach((groupResults) => {
    if (groupResults.length < 2) return;
    const impliedSum = groupResults.reduce(
      (sum, result) => sum + result.market.impliedP,
      0,
    );
    const betAllSides = groupResults.every(
      (result) => (betMap[result.market.id] || 0) > 0,
    );

    if (impliedSum < 1 && betAllSides) {
      totals.arb += 2;
    }
  });
}

function analyzeStake(market, stake, bankrollBase) {
  const optimalStake = market.kellyFrac * bankrollBase;
  const isPositive = market.edge > EDGE_EPSILON;
  const isNegative = market.edge < -EDGE_EPSILON;
  let decisionScore = 0;

  if (!isPositive && !isNegative) {
    decisionScore = stake === 0 ? 1 : 0.5;
  } else if (isPositive) {
    decisionScore = stake > 0 ? 1 : 0;
  } else {
    decisionScore = stake === 0 ? 1 : 0;
  }

  const scale = Math.max(optimalStake, bankrollBase * 0.05, 1);
  const sizingScore = clamp(1 - Math.abs(stake - optimalStake) / scale, 0, 1);

  return {
    decisionScore,
    sizingScore,
    optimalStake,
  };
}

function getScoreParts(totals) {
  const decision = totals.decisionMax ? (totals.decision / totals.decisionMax) * 50 : 0;
  const sizing = totals.sizingMax ? (totals.sizing / totals.sizingMax) * 40 : 0;
  const arb = Math.min(10, totals.arb);
  return {
    decision,
    sizing,
    arb,
    total: decision + sizing + arb,
  };
}

function getRoundBonus(totalRounds) {
  if (totalRounds >= 9) return 1.5;
  if (totalRounds >= 7) return 1;
  if (totalRounds >= 5) return 0.5;
  return 0;
}

function render() {
  renderStatus();
  renderScore();
  renderLeaderboard();

  if (state.phase === "betting") {
    els.phaseLabel.textContent = "Betting phase";
    els.tableTitle.textContent = "Find the mispriced bets";
    els.submitButton.textContent = "Submit bets";
    els.submitButton.disabled = state.bankroll <= 0;
    els.edgeCount.textContent = "Hidden";
    renderMarkets();
    updateRoundStats();
    return;
  }

  if (state.phase === "results") {
    els.phaseLabel.textContent = "Results reveal";
    els.tableTitle.textContent = "Fair odds and outcomes";
    els.submitButton.textContent = "Next round";
    els.submitButton.disabled = false;
    els.edgeCount.textContent = String(state.events.filter((market) => market.edge > EDGE_EPSILON).length);
    renderMarkets(state.history[state.history.length - 1].results);
    updateRoundStats();
    return;
  }

  els.phaseLabel.textContent = "Game end";
  els.tableTitle.textContent = "Skill score breakdown";
  els.submitButton.textContent = "New game";
  els.submitButton.disabled = false;
  els.edgeCount.textContent = "Complete";
  updateRoundStats();
  renderFinalSummary();
}

function renderStatus() {
  if (!state) return;
  const parts = getScoreParts(state.totals);
  els.bankrollValue.textContent = formatMoney(state.bankroll);
  els.roundValue.textContent = `${Math.min(state.round, state.totalRounds)} / ${state.totalRounds}`;
  els.skillValue.textContent = parts.total.toFixed(1);
  els.clockValue.textContent = state.timed ? `${state.timeRemaining}s` : "Practice";
}

function renderScore() {
  if (!state) return;
  const parts = getScoreParts(state.totals);
  els.decisionScore.textContent = `${parts.decision.toFixed(1)} / 50`;
  els.sizingScore.textContent = `${parts.sizing.toFixed(1)} / 40`;
  els.arbScore.textContent = `${parts.arb.toFixed(1)} / 10`;
  els.decisionMeter.style.width = `${(parts.decision / 50) * 100}%`;
  els.sizingMeter.style.width = `${(parts.sizing / 40) * 100}%`;
  els.arbMeter.style.width = `${(parts.arb / 10) * 100}%`;
}

function renderLeaderboard() {
  if (!state) return;
  const rows = state.aiPlayers
    .map((player) => {
      const score = player.isPlayer ? getScoreParts(state.totals) : getScoreParts(player.totals);
      return {
        name: player.name,
        bankroll: player.isPlayer ? state.bankroll : player.bankroll,
        score: score.total,
        isPlayer: player.isPlayer,
      };
    })
    .sort((a, b) => b.score - a.score || b.bankroll - a.bankroll);

  els.leaderboard.innerHTML = rows
    .map(
      (row) => `
        <li>
          <div class="leader-row">
            <span>${row.isPlayer ? "You" : row.name}</span>
            <strong>${row.score.toFixed(1)}</strong>
          </div>
          <div class="analysis-line">${formatMoney(row.bankroll)}</div>
        </li>
      `,
    )
    .join("");
}

function renderMarkets(results = null) {
  const resultMap = new Map((results || []).map((result) => [result.market.id, result]));
  els.marketGrid.innerHTML = state.events
    .map((market) => renderMarketCard(market, resultMap.get(market.id)))
    .join("");
}

function renderMarketCard(market, result) {
  const edgeClass = market.edge > EDGE_EPSILON ? "good" : market.edge < -EDGE_EPSILON ? "bad" : "fair";
  const isResolved = Boolean(result);
  const stake = result ? result.stake : getBet(market.id);
  const maxBet = Math.floor(Math.max(0, state.bankroll));
  const edgeText = market.edge > EDGE_EPSILON ? "Positive edge" : market.edge < -EDGE_EPSILON ? "Negative edge" : "Near fair";
  const edgePillClass = market.edge > EDGE_EPSILON ? "positive" : market.edge < -EDGE_EPSILON ? "negative" : "neutral";

  return `
    <article class="market-card ${isResolved ? edgeClass : ""}">
      <div class="market-visual" aria-hidden="true">
        ${renderVisual(market.visual)}
      </div>
      <div class="market-body">
        <div class="market-title-row">
          <h3>${market.title}</h3>
          ${
            isResolved
              ? `<span class="edge-pill ${edgePillClass}">${edgeText}</span>`
              : `<span class="tag">${market.category}</span>`
          }
        </div>
        <p class="market-copy">${market.description}</p>
      </div>
      <div class="quote-box">
        <div>
          <span>${isResolved ? "Fair odds" : "Quoted payout"}</span>
          <strong>${formatOdds(isResolved ? market.fairB : market.offeredB)}</strong>
        </div>
        <div>
          <span>${isResolved ? "Kelly stake" : "Implied prob"}</span>
          <strong>${isResolved ? formatMoney(result.analysis.optimalStake) : formatPercent(market.impliedP)}</strong>
        </div>
      </div>
      <div class="bet-controls">
        <div class="bet-line">
          <input
            type="range"
            min="0"
            max="${maxBet}"
            step="5"
            value="${stake}"
            data-market-id="${market.id}"
            data-stake-input="range"
            ${isResolved ? "disabled" : ""}
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
            ${isResolved ? "disabled" : ""}
            aria-label="Stake amount for ${market.title}"
          />
        </div>
        ${
          isResolved
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
      </div>
    </article>
  `;
}

function renderResultStrip(result) {
  if (result.stake <= 0) {
    return `
      <div class="result-strip skip">
        Skipped. Outcome: ${result.outcome.outcomeText}. Edge ${formatSignedPercent(result.market.edge)}.
      </div>
    `;
  }

  const className = result.outcome.win ? "win" : "loss";
  const pnlText = result.pnl >= 0 ? `+${formatMoney(result.pnl)}` : `-${formatMoney(Math.abs(result.pnl))}`;
  return `
    <div class="result-strip ${className}">
      ${result.outcome.win ? "Won" : "Lost"} ${formatMoney(result.stake)}. P&L ${pnlText}. Outcome: ${result.outcome.outcomeText}. Edge ${formatSignedPercent(result.market.edge)}.
    </div>
  `;
}

function renderFinalSummary() {
  const score = getScoreParts(state.totals);
  const bonus = getRoundBonus(state.totalRounds);
  const totalWithBonus = score.total + bonus;
  const pnl = state.bankroll - state.startingBankroll;
  const pnlText = pnl >= 0 ? `+${formatMoney(pnl)}` : `-${formatMoney(Math.abs(pnl))}`;

  els.marketGrid.innerHTML = `
    <div class="empty-state">
      <div>
        <p class="eyebrow">Final score</p>
        <h2>${totalWithBonus.toFixed(1)} leaderboard points</h2>
        <p>Base skill ${score.total.toFixed(1)} plus ${bonus.toFixed(1)} round bonus. Final bankroll ${formatMoney(state.bankroll)} (${pnlText}).</p>
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
              <td>${result.market.title}</td>
              <td>${formatPercent(result.market.p)}<br><span class="analysis-line">${formatOdds(result.market.fairB)} fair</span></td>
              <td>${formatOdds(result.market.offeredB)}<br><span class="analysis-line">${formatSignedPercent(result.market.edge)} edge</span></td>
              <td>${formatMoney(result.stake)}<br><span class="analysis-line">Kelly ${formatMoney(result.analysis.optimalStake)}</span></td>
              <td>${result.outcome.outcomeText}<br><span class="analysis-line">${result.outcome.win ? "Event won" : "Event lost"}</span></td>
              <td>${result.pnl >= 0 ? "+" : "-"}${formatMoney(Math.abs(result.pnl))}</td>
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
                <th>Market</th>
                <th>Fair probability</th>
                <th>Quote</th>
                <th>Your stake</th>
                <th>Outcome</th>
                <th>P&L</th>
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </section>
      `;
    })
    .join("");
}

function renderVisual(visual) {
  if (visual.type === "die") return renderDie(visual.value);
  if (visual.type === "coin") return `<div class="asset-coin">${visual.label}</div>`;
  if (visual.type === "card") {
    return `<div class="asset-card ${visual.color === "red" ? "red" : ""}">${visual.label}</div>`;
  }
  return "";
}

function renderDie(value) {
  const positions = {
    1: [[2, 2]],
    2: [[1, 1], [3, 3]],
    3: [[1, 1], [2, 2], [3, 3]],
    4: [[1, 1], [1, 3], [3, 1], [3, 3]],
    5: [[1, 1], [1, 3], [2, 2], [3, 1], [3, 3]],
    6: [[1, 1], [1, 3], [2, 1], [2, 3], [3, 1], [3, 3]],
  };

  return `
    <div class="asset-die">
      ${(positions[value] || positions[6])
        .map(([row, col]) => `<span style="grid-row:${row};grid-column:${col}"></span>`)
        .join("")}
    </div>
  `;
}

function setStake(id, value) {
  const cleaned = Math.max(0, Math.min(Math.floor(Number(value) || 0), Math.floor(Math.max(0, state.bankroll))));
  state.bets[id] = cleaned;
  document
    .querySelectorAll(`[data-market-id="${id}"][data-stake-input]`)
    .forEach((input) => {
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

function drawCard() {
  const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  const suits = ["hearts", "diamonds", "clubs", "spades"];
  const rank = sample(ranks);
  const suit = sample(suits);
  const color = suit === "hearts" || suit === "diamonds" ? "red" : "black";
  return {
    rank,
    suit,
    color,
    name: `${rank} of ${suit}`,
  };
}

function countTwoDice(predicate) {
  let count = 0;
  for (let a = 1; a <= 6; a += 1) {
    for (let b = 1; b <= 6; b += 1) {
      if (predicate(a, b)) count += 1;
    }
  }
  return count;
}

function formatMoney(value) {
  return `$${Math.round(value).toLocaleString("en-US")}`;
}

function formatOdds(value) {
  if (value >= 10) return `${value.toFixed(1)}:1`;
  return `${value.toFixed(2)}:1`;
}

function formatPercent(value) {
  return `${(value * 100).toFixed(1)}%`;
}

function formatSignedPercent(value) {
  const sign = value >= 0 ? "+" : "";
  return `${sign}${(value * 100).toFixed(1)}%`;
}

function roundOdds(value) {
  if (value >= 10) return Math.round(value * 10) / 10;
  return Math.round(value * 100) / 100;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function randomChance(probability) {
  return Math.random() < probability;
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

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((button) => {
      button.classList.toggle("is-active", button === tab);
    });
    els.tabBody.innerHTML = notebook[tab.dataset.tab];
  });
});

els.clearReviewButton.addEventListener("click", () => {
  els.reviewDrawer.classList.remove("is-open");
});

els.tabBody.innerHTML = notebook.rules;
startGame();
