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

const sequenceEls = {
  phaseLabel: document.querySelector("#sequencePhaseLabel"),
  resetButton: document.querySelector("#sequenceResetButton"),
  startButton: document.querySelector("#sequenceStartButton"),
  skipButton: document.querySelector("#sequenceSkipButton"),
  difficulty: document.querySelector("#sequenceDifficulty"),
  rounds: document.querySelector("#sequenceRounds"),
  correct: document.querySelector("#sequenceCorrect"),
  round: document.querySelector("#sequenceRound"),
  pace: document.querySelector("#sequencePace"),
  message: document.querySelector("#sequenceMessage"),
  timer: document.querySelector("#sequenceTimer"),
  target: document.querySelector("#sequenceTarget"),
  options: document.querySelector("#sequenceOptions"),
  score: document.querySelector("#sequenceScore"),
  stats: document.querySelector("#sequenceStats"),
  review: document.querySelector("#sequenceReview"),
};

const hanoiEls = {
  phaseLabel: document.querySelector("#hanoiPhaseLabel"),
  resetButton: document.querySelector("#hanoiResetButton"),
  startButton: document.querySelector("#hanoiStartButton"),
  nextButton: document.querySelector("#hanoiNextButton"),
  startLevel: document.querySelector("#hanoiStartLevel"),
  mode: document.querySelector("#hanoiMode"),
  level: document.querySelector("#hanoiLevel"),
  moves: document.querySelector("#hanoiMoves"),
  timer: document.querySelector("#hanoiTimer"),
  message: document.querySelector("#hanoiMessage"),
  targetLabel: document.querySelector("#hanoiTargetLabel"),
  board: document.querySelector("#hanoiBoard"),
  score: document.querySelector("#hanoiScore"),
  stats: document.querySelector("#hanoiStats"),
  review: document.querySelector("#hanoiReview"),
};

const fruitEls = {
  phaseLabel: document.querySelector("#fruitPhaseLabel"),
  resetButton: document.querySelector("#fruitResetButton"),
  tickButton: document.querySelector("#fruitTickButton"),
  startButton: document.querySelector("#fruitStartButton"),
  revealButton: document.querySelector("#fruitRevealButton"),
  duration: document.querySelector("#fruitDuration"),
  events: document.querySelector("#fruitEvents"),
  profit: document.querySelector("#fruitProfit"),
  accuracy: document.querySelector("#fruitAccuracy"),
  score: document.querySelector("#fruitScore"),
  message: document.querySelector("#fruitMessage"),
  bagA: document.querySelector("#fruitBagA"),
  bagB: document.querySelector("#fruitBagB"),
  eventLabel: document.querySelector("#fruitEventLabel"),
  timer: document.querySelector("#fruitTimer"),
  bid: document.querySelector("#fruitBid"),
  ask: document.querySelector("#fruitAsk"),
  sellButton: document.querySelector("#fruitSellButton"),
  buyButton: document.querySelector("#fruitBuyButton"),
  updateLine: document.querySelector("#fruitUpdateLine"),
  valueLabel: document.querySelector("#fruitValueLabel"),
  tape: document.querySelector("#fruitTape"),
};

const nextCardEls = {
  phaseLabel: document.querySelector("#nextCardPhaseLabel"),
  resetButton: document.querySelector("#nextCardResetButton"),
  nextButton: document.querySelector("#nextCardNextButton"),
  suits: document.querySelector("#nextCardSuits"),
  ace: document.querySelector("#nextCardAce"),
  stake: document.querySelector("#nextCardStake"),
  halfButton: document.querySelector("#nextCardHalfKellyButton"),
  bankroll: document.querySelector("#nextCardBankroll"),
  round: document.querySelector("#nextCardRound"),
  score: document.querySelector("#nextCardScore"),
  message: document.querySelector("#nextCardMessage"),
  deckCount: document.querySelector("#nextCardDeckCount"),
  current: document.querySelector("#nextCardCurrent"),
  reveal: document.querySelector("#nextCardReveal"),
  higherButton: document.querySelector("#nextCardHigherButton"),
  lowerButton: document.querySelector("#nextCardLowerButton"),
  bonus: document.querySelector("#nextCardBonus"),
  played: document.querySelector("#nextCardPlayed"),
  review: document.querySelector("#nextCardReview"),
};

const makeMarketEls = {
  phaseLabel: document.querySelector("#makeMarketPhaseLabel"),
  resetButton: document.querySelector("#makeMarketResetButton"),
  nextButton: document.querySelector("#makeMarketNextButton"),
  submitButton: document.querySelector("#makeMarketSubmitButton"),
  spread: document.querySelector("#makeMarketSpread"),
  bid: document.querySelector("#makeMarketBid"),
  ask: document.querySelector("#makeMarketAsk"),
  position: document.querySelector("#makeMarketPosition"),
  cash: document.querySelector("#makeMarketCash"),
  score: document.querySelector("#makeMarketScore"),
  message: document.querySelector("#makeMarketMessage"),
  round: document.querySelector("#makeMarketRound"),
  question: document.querySelector("#makeMarketQuestion"),
  hideHistory: document.querySelector("#makeMarketHideHistory"),
  answerStatus: document.querySelector("#makeMarketAnswerStatus"),
  review: document.querySelector("#makeMarketReview"),
};

const cardsMarketEls = {
  phaseLabel: document.querySelector("#cardsMarketPhaseLabel"),
  resetButton: document.querySelector("#cardsMarketResetButton"),
  nextButton: document.querySelector("#cardsMarketNextButton"),
  ace: document.querySelector("#cardsMarketAce"),
  bid: document.querySelector("#cardsMarketBid"),
  ask: document.querySelector("#cardsMarketAsk"),
  quoteButton: document.querySelector("#cardsMarketQuoteButton"),
  position: document.querySelector("#cardsMarketPosition"),
  cash: document.querySelector("#cardsMarketCash"),
  pnl: document.querySelector("#cardsMarketPnl"),
  message: document.querySelector("#cardsMarketMessage"),
  round: document.querySelector("#cardsMarketRound"),
  center: document.querySelector("#cardsMarketCenter"),
  hand: document.querySelector("#cardsMarketHand"),
  players: document.querySelector("#cardsMarketPlayers"),
  response: document.querySelector("#cardsMarketResponse"),
  tape: document.querySelector("#cardsMarketTape"),
  finalValue: document.querySelector("#cardsMarketFinalValue"),
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
const SEQUENCE_SETTINGS = {
  easy: {
    length: [5, 6],
    startPreviewMs: 1800,
    minPreviewMs: 700,
    maxPreviewMs: 2600,
    startMs: 4200,
    minMs: 1500,
    maxMs: 5200,
    alphabet: "ABCDEFGHJKLMNPQRSTUVWXYZ2346789",
  },
  medium: {
    length: [6, 8],
    startPreviewMs: 1450,
    minPreviewMs: 500,
    maxPreviewMs: 2200,
    startMs: 3200,
    minMs: 950,
    maxMs: 4400,
    alphabet: "ABCDEFGHJKLMNPQRSTUVWXYZ23456789",
  },
  hard: {
    length: [7, 9],
    startPreviewMs: 1100,
    minPreviewMs: 350,
    maxPreviewMs: 1800,
    startMs: 2400,
    minMs: 650,
    maxMs: 3600,
    alphabet: "ABCDEFGHJKLMNPQRSTUVWXYZ0123456789",
  },
};
const SEQUENCE_CONFUSABLES = {
  B: ["8", "R"],
  C: ["G", "O"],
  D: ["0", "O"],
  E: ["F", "3"],
  F: ["E", "P"],
  G: ["C", "6"],
  H: ["N", "M"],
  I: ["1", "L"],
  J: ["I", "1"],
  K: ["X", "R"],
  L: ["I", "1"],
  M: ["N", "H"],
  N: ["M", "H"],
  O: ["0", "Q", "D"],
  P: ["F", "R"],
  Q: ["O", "0"],
  R: ["B", "P"],
  S: ["5", "8"],
  T: ["7", "I"],
  U: ["V", "W"],
  V: ["U", "Y"],
  W: ["V", "M"],
  X: ["K", "Y"],
  Y: ["V", "X"],
  Z: ["2", "7"],
  0: ["O", "Q", "D"],
  1: ["I", "L", "J"],
  2: ["Z", "7"],
  3: ["E", "8"],
  4: ["A", "H"],
  5: ["S", "6"],
  6: ["G", "5"],
  7: ["T", "Z"],
  8: ["B", "S", "3"],
  9: ["G", "Q"],
};
const HANOI_MAX_BLOCKS = 7;
const HANOI_GOAL_ROD = 2;
const HANOI_MIN_OPTIMAL = {
  3: 5,
  4: 8,
  5: 12,
  6: 17,
  7: 24,
};
let state;
let etfState;
let sequenceState;
let hanoiState;
let hanoiPointerDrag = null;
let hanoiSuppressNextClick = false;
let fruitState;
let nextCardState;
let makeMarketState;
let cardsMarketState;
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
    els.appTitle.textContent = "Odds Calibration Lab";
    stopEtfTimer();
    stopSequenceTimer(false);
    stopHanoiTimer(false);
    stopFruitTimer(false);
    renderNextCard();
    renderMakeMarket();
    renderCardsMarket();
    renderStatus();
    renderScore();
    return;
  }

  if (game === "etf") {
    els.appEyebrow.textContent = "ETF arbitrage practice";
    els.appTitle.textContent = "Basket Arbitrage Drill";
    stopSequenceTimer(false);
    stopHanoiTimer(false);
    stopFruitTimer(false);
    renderNextCard();
    renderMakeMarket();
    renderCardsMarket();
    renderEtf();
    return;
  }

  if (game === "sequence") {
    els.appEyebrow.textContent = "OA attention drill";
    els.appTitle.textContent = "Sequence Recall Sprint";
    stopEtfTimer();
    stopHanoiTimer(false);
    stopFruitTimer(false);
    if (sequenceState?.phase === "playing" && !sequenceState.timerId) {
      startSequenceTimer();
    }
    renderNextCard();
    renderMakeMarket();
    renderCardsMarket();
    renderSequence();
    return;
  }

  if (game === "hanoi") {
    els.appEyebrow.textContent = "Optiver puzzle drill";
    els.appTitle.textContent = "Tower Transfer Sprint";
    stopEtfTimer();
    stopSequenceTimer(false);
    stopFruitTimer(false);
    if (hanoiState?.phase === "playing" && !hanoiState.timerId) {
      startHanoiTimer();
    }
    renderNextCard();
    renderMakeMarket();
    renderCardsMarket();
    renderHanoi();
    return;
  }

  if (game === "fruit") {
    els.appEyebrow.textContent = "Beginner market making";
    els.appTitle.textContent = "Produce Quote Drill";
    stopEtfTimer();
    stopSequenceTimer(false);
    stopHanoiTimer(false);
    if (fruitState?.phase === "running" && !fruitState.timerId) {
      startFruitTimer();
    }
    renderNextCard();
    renderMakeMarket();
    renderCardsMarket();
    renderFruit();
    return;
  }

  if (game === "next-card") {
    els.appEyebrow.textContent = "Card counting practice";
    els.appTitle.textContent = "Card Edge Trainer";
    stopEtfTimer();
    stopSequenceTimer(false);
    stopHanoiTimer(false);
    stopFruitTimer(false);
    renderMakeMarket();
    renderCardsMarket();
    renderNextCard();
    return;
  }

  if (game === "make-market") {
    els.appEyebrow.textContent = "Interview market making";
    els.appTitle.textContent = "Quote Range Trainer";
    stopEtfTimer();
    stopSequenceTimer(false);
    stopHanoiTimer(false);
    stopFruitTimer(false);
    renderNextCard();
    renderCardsMarket();
    renderMakeMarket();
    return;
  }

  els.appEyebrow.textContent = "Hidden-information trading";
  els.appTitle.textContent = "Card Market Simulator";
  stopEtfTimer();
  stopSequenceTimer(false);
  stopHanoiTimer(false);
  stopFruitTimer(false);
  renderNextCard();
  renderMakeMarket();
  renderCardsMarket();
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

function initSequenceGame() {
  stopSequenceTimer(false);
  sequenceState = createSequenceState("ready");
  renderSequence();
}

function createSequenceState(phase) {
  const difficulty = sequenceEls.difficulty.value;
  const settings = SEQUENCE_SETTINGS[difficulty];
  return {
    phase,
    difficulty,
    settings,
    rounds: Number(sequenceEls.rounds.value),
    questionIndex: 0,
    current: null,
    questionPhase: "idle",
    previewMs: settings.startPreviewMs,
    timeLimitMs: settings.startMs,
    deadline: null,
    timerId: null,
    correct: 0,
    wrong: 0,
    correctStreak: 0,
    wrongStreak: 0,
    bestStreak: 0,
    accepting: false,
    history: [],
  };
}

function startSequenceGame() {
  if (sequenceState?.phase === "playing") {
    finishSequenceGame();
    return;
  }

  sequenceState = createSequenceState("playing");
  beginSequenceQuestion();
}

function beginSequenceQuestion() {
  if (!sequenceState || sequenceState.phase !== "playing") return;
  if (sequenceState.questionIndex >= sequenceState.rounds) {
    finishSequenceGame();
    return;
  }

  sequenceState.current = generateSequenceQuestion(sequenceState.difficulty);
  sequenceState.questionPhase = "preview";
  sequenceState.deadline = Date.now() + sequenceState.previewMs;
  sequenceState.accepting = false;
  startSequenceTimer();
  renderSequence();
}

function stopSequenceTimer(markPaused = true) {
  if (sequenceState?.timerId) {
    window.clearInterval(sequenceState.timerId);
    sequenceState.timerId = null;
  }
  if (markPaused && sequenceState?.phase === "playing") {
    sequenceState.phase = "ready";
    sequenceState.accepting = false;
  }
}

function startSequenceTimer() {
  if (!sequenceState || sequenceState.phase !== "playing") return;
  if (sequenceState.timerId) window.clearInterval(sequenceState.timerId);
  sequenceState.timerId = window.setInterval(tickSequenceClock, 50);
}

function tickSequenceClock() {
  if (!sequenceState || sequenceState.phase !== "playing" || !sequenceState.current) return;
  const remainingMs = getSequenceRemainingMs();
  if (remainingMs <= 0) {
    if (sequenceState.questionPhase === "preview") {
      revealSequenceOptions();
      return;
    }
    recordSequenceAnswer(null, "timeout");
    return;
  }
  sequenceEls.timer.textContent = formatSequenceSeconds(remainingMs);
  if (activeGame === "sequence") {
    els.clockValue.textContent = formatSequenceSeconds(remainingMs);
  }
}

function revealSequenceOptions() {
  if (!sequenceState || sequenceState.phase !== "playing" || !sequenceState.current) return;
  sequenceState.questionPhase = "answering";
  sequenceState.deadline = Date.now() + sequenceState.timeLimitMs;
  sequenceState.accepting = true;
  renderSequence();
}

function recordSequenceAnswer(optionIndex, reason = "selected") {
  if (
    !sequenceState ||
    sequenceState.phase !== "playing" ||
    !sequenceState.accepting ||
    sequenceState.questionPhase !== "answering"
  ) {
    return;
  }
  sequenceState.accepting = false;
  stopSequenceTimer(false);

  const selected =
    optionIndex === null || optionIndex === undefined ? null : sequenceState.current.options[optionIndex];
  const correct = selected === sequenceState.current.target;
  const elapsedMs = Math.max(0, sequenceState.timeLimitMs - getSequenceRemainingMs());

  if (correct) {
    sequenceState.correct += 1;
    sequenceState.correctStreak += 1;
    sequenceState.wrongStreak = 0;
    sequenceState.bestStreak = Math.max(sequenceState.bestStreak, sequenceState.correctStreak);
  } else {
    sequenceState.wrong += 1;
    sequenceState.correctStreak = 0;
    sequenceState.wrongStreak += 1;
  }

  sequenceState.history.push({
    round: sequenceState.questionIndex + 1,
    target: sequenceState.current.target,
    selected,
    correct,
    reason,
    previewMs: sequenceState.previewMs,
    timeLimitMs: sequenceState.timeLimitMs,
    elapsedMs,
  });
  adjustSequencePace(correct);
  sequenceState.questionIndex += 1;

  if (sequenceState.questionIndex >= sequenceState.rounds) {
    finishSequenceGame();
    return;
  }

  beginSequenceQuestion();
}

function adjustSequencePace(correct) {
  const { minMs, maxMs, minPreviewMs, maxPreviewMs } = sequenceState.settings;
  if (correct) {
    const solveMultiplier = sequenceState.correctStreak > 0 && sequenceState.correctStreak % 5 === 0 ? 0.78 : 0.94;
    const previewMultiplier = sequenceState.correctStreak > 0 && sequenceState.correctStreak % 5 === 0 ? 0.84 : 0.96;
    sequenceState.timeLimitMs = clamp(Math.round(sequenceState.timeLimitMs * solveMultiplier), minMs, maxMs);
    sequenceState.previewMs = clamp(
      Math.round(sequenceState.previewMs * previewMultiplier),
      minPreviewMs,
      maxPreviewMs,
    );
    return;
  }

  if (sequenceState.wrongStreak >= 2) {
    sequenceState.timeLimitMs = clamp(Math.round(sequenceState.timeLimitMs * 1.16), minMs, maxMs);
    sequenceState.previewMs = clamp(Math.round(sequenceState.previewMs * 1.12), minPreviewMs, maxPreviewMs);
  }
}

function finishSequenceGame() {
  if (!sequenceState) return;
  stopSequenceTimer(false);
  sequenceState.phase = "finished";
  sequenceState.questionPhase = "idle";
  sequenceState.current = null;
  sequenceState.accepting = false;
  renderSequence();
}

function generateSequenceQuestion(difficulty) {
  const settings = SEQUENCE_SETTINGS[difficulty];
  const length = randomInt(settings.length[0], settings.length[1]);
  const target = Array.from({ length }, () => sample(settings.alphabet)).join("");
  const optionCount = difficulty === "easy" ? 5 : 6;
  const options = new Set([target]);
  let guard = 0;

  while (options.size < optionCount && guard < 80) {
    options.add(makeSequenceDistractor(target, difficulty, options));
    guard += 1;
  }

  while (options.size < optionCount) {
    options.add(Array.from({ length }, () => sample(settings.alphabet)).join(""));
  }

  return {
    target,
    options: shuffle([...options]),
  };
}

function makeSequenceDistractor(target, difficulty, existing) {
  const chars = target.split("");
  const edits = difficulty === "easy" ? 1 : randomInt(1, difficulty === "hard" ? 3 : 2);
  const used = new Set();
  for (let i = 0; i < edits; i += 1) {
    let index = randomInt(0, chars.length - 1);
    while (used.has(index) && used.size < chars.length) {
      index = randomInt(0, chars.length - 1);
    }
    used.add(index);
    chars[index] = getSequenceReplacement(chars[index], difficulty);
  }

  const candidate = chars.join("");
  if (candidate !== target && !existing.has(candidate)) return candidate;

  const fallbackIndex = randomInt(0, chars.length - 1);
  chars[fallbackIndex] = sample(SEQUENCE_SETTINGS[difficulty].alphabet);
  return chars.join("") === target ? target.split("").reverse().join("") : chars.join("");
}

function getSequenceReplacement(char, difficulty) {
  if (difficulty === "hard" && SEQUENCE_CONFUSABLES[char]) {
    return sample(SEQUENCE_CONFUSABLES[char]);
  }

  if (difficulty === "medium" && Math.random() < 0.45 && SEQUENCE_CONFUSABLES[char]) {
    return sample(SEQUENCE_CONFUSABLES[char]);
  }

  const alphabet = SEQUENCE_SETTINGS[difficulty].alphabet;
  let replacement = sample(alphabet);
  while (replacement === char) {
    replacement = sample(alphabet);
  }
  return replacement;
}

function getSequenceRemainingMs() {
  if (!sequenceState?.deadline) return sequenceState?.timeLimitMs ?? 0;
  return Math.max(0, sequenceState.deadline - Date.now());
}

function formatSequenceSeconds(ms) {
  return `${(ms / 1000).toFixed(2)}s`;
}

function getSequenceAccuracy() {
  if (!sequenceState?.history.length) return 0;
  return sequenceState.correct / sequenceState.history.length;
}

function getSequenceAverageMs() {
  if (!sequenceState?.history.length) return null;
  const answered = sequenceState.history.filter((item) => item.reason !== "timeout");
  if (!answered.length) return null;
  return answered.reduce((sum, item) => sum + item.elapsedMs, 0) / answered.length;
}

function getSequenceScore() {
  if (!sequenceState) return 0;
  const accuracyBonus = Math.round(getSequenceAccuracy() * 200);
  const streakBonus = sequenceState.bestStreak * 12;
  return Math.max(0, sequenceState.correct * 100 - sequenceState.wrong * 25 + accuracyBonus + streakBonus);
}

function renderSequence() {
  if (!sequenceState) return;
  if (activeGame === "sequence") renderSequenceStatus();

  sequenceEls.phaseLabel.textContent = getSequencePhaseLabel();
  sequenceEls.startButton.textContent = sequenceState.phase === "playing" ? "Finish" : "Start";
  sequenceEls.skipButton.disabled = sequenceState.phase !== "playing" || sequenceState.questionPhase !== "answering";
  sequenceEls.difficulty.disabled = sequenceState.phase === "playing";
  sequenceEls.rounds.disabled = sequenceState.phase === "playing";
  sequenceEls.correct.textContent =
    sequenceState.phase === "finished" ? `${sequenceState.correct} / ${sequenceState.history.length}` : "Hidden";
  sequenceEls.round.textContent = `${Math.min(sequenceState.questionIndex + (sequenceState.phase === "playing" ? 1 : 0), sequenceState.rounds)} / ${sequenceState.rounds}`;
  sequenceEls.pace.textContent = `${formatSequenceSeconds(sequenceState.previewMs)} / ${formatSequenceSeconds(sequenceState.timeLimitMs)}`;
  sequenceEls.score.textContent = sequenceState.phase === "finished" ? `${getSequenceScore()} pts` : "Hidden";

  if (sequenceState.phase === "ready") {
    sequenceEls.timer.textContent = "Ready";
    sequenceEls.target.textContent = "Press Start";
    sequenceEls.options.innerHTML = "";
    sequenceEls.message.textContent = "";
  } else if (sequenceState.phase === "finished") {
    sequenceEls.timer.textContent = "Complete";
    sequenceEls.target.textContent = `${sequenceState.correct} / ${sequenceState.history.length}`;
    sequenceEls.options.innerHTML = "";
    sequenceEls.message.textContent = "Results are now available in the session review.";
  } else {
    const isPreview = sequenceState.questionPhase === "preview";
    sequenceEls.timer.textContent = `${isPreview ? "Memorize " : "Choose "}${formatSequenceSeconds(getSequenceRemainingMs())}`;
    sequenceEls.target.textContent = sequenceState.current.target;
    sequenceEls.message.textContent = "";
    sequenceEls.options.innerHTML = isPreview
      ? `<div class="sequence-waiting">Options appear after the preview.</div>`
      : sequenceState.current.options
          .map(
            (option, index) => `
              <button class="sequence-option" type="button" data-sequence-option="${index}">
                ${option}
              </button>
            `,
          )
          .join("");
  }

  renderSequenceStats();
  renderSequenceReview();
}

function getSequencePhaseLabel() {
  if (sequenceState.phase === "playing" && sequenceState.questionPhase === "preview") return "Memorize";
  if (sequenceState.phase === "playing") return "Timed match";
  if (sequenceState.phase === "finished") return "Review";
  return "Ready";
}

function renderSequenceStatus() {
  els.statusLabelOne.textContent = "Correct";
  els.statusLabelTwo.textContent = "Round";
  els.statusLabelThree.textContent = "Preview / solve";
  els.statusLabelFour.textContent = "Clock";
  els.bankrollValue.textContent =
    sequenceState.phase === "finished" ? `${sequenceState.correct} / ${sequenceState.history.length}` : "Hidden";
  els.roundValue.textContent = `${Math.min(sequenceState.questionIndex + (sequenceState.phase === "playing" ? 1 : 0), sequenceState.rounds)} / ${sequenceState.rounds}`;
  els.skillValue.textContent = `${formatSequenceSeconds(sequenceState.previewMs)} / ${formatSequenceSeconds(sequenceState.timeLimitMs)}`;
  els.clockValue.textContent =
    sequenceState.phase === "playing" ? formatSequenceSeconds(getSequenceRemainingMs()) : formatSequenceSeconds(sequenceState.timeLimitMs);
}

function renderSequenceStats() {
  if (sequenceState.phase !== "finished") {
    sequenceEls.stats.innerHTML = `
      <div><span>Accuracy</span><strong>Hidden</strong></div>
      <div><span>Best streak</span><strong>Hidden</strong></div>
      <div><span>Avg answer</span><strong>Hidden</strong></div>
    `;
    return;
  }

  const avgMs = getSequenceAverageMs();
  sequenceEls.stats.innerHTML = `
    <div><span>Accuracy</span><strong>${Math.round(getSequenceAccuracy() * 100)}%</strong></div>
    <div><span>Best streak</span><strong>${sequenceState.bestStreak}</strong></div>
    <div><span>Avg answer</span><strong>${avgMs === null ? "-" : formatSequenceSeconds(avgMs)}</strong></div>
  `;
}

function renderSequenceReview() {
  if (sequenceState.phase !== "finished") {
    sequenceEls.review.innerHTML = `<div class="review-item"><strong>Feedback is hidden while you play</strong><span>Answers, misses, and near-match errors appear after the final round.</span></div>`;
    return;
  }

  if (!sequenceState.history.length) {
    sequenceEls.review.innerHTML = `<div class="review-item"><strong>No rounds played</strong><span>Press Start to begin the sequence drill.</span></div>`;
    return;
  }

  sequenceEls.review.innerHTML = sequenceState.history
    .map((item) => {
      const className = item.correct ? "correct" : item.reason === "timeout" ? "missed" : "incorrect";
      const submitted = item.selected ?? (item.reason === "timeout" ? "Timed out" : "Skipped");
      return `
        <div class="review-item ${className}">
          <strong>${item.round}. ${item.target}</strong>
          <span>${item.correct ? "Correct" : "Wrong"}; chose ${submitted}; preview ${formatSequenceSeconds(item.previewMs)}; limit ${formatSequenceSeconds(item.timeLimitMs)}; answered in ${formatSequenceSeconds(item.elapsedMs)}</span>
        </div>
      `;
    })
    .join("");
}

function initHanoiGame() {
  stopHanoiTimer(false);
  hanoiState = createHanoiState("ready");
  renderHanoi();
}

function createHanoiState(phase, diskCount = Number(hanoiEls.startLevel.value)) {
  return {
    phase,
    mode: hanoiEls.mode.value,
    diskCount,
    rods: [[], [], []],
    initialRods: [[], [], []],
    optimalMoves: 0,
    moves: 0,
    startedAt: null,
    elapsedMs: 0,
    timerId: null,
    selectedRod: null,
    score: 0,
    completed: [],
    history: [],
    lastResult: null,
  };
}

function startOrAdvanceHanoi() {
  if (!hanoiState || hanoiState.phase === "ready") {
    startHanoiPuzzle(Number(hanoiEls.startLevel.value));
    return;
  }

  if (hanoiState.phase === "playing") {
    resetHanoiPuzzle();
    return;
  }

  startHanoiPuzzle(getNextHanoiDiskCount());
}

function startHanoiPuzzle(diskCount) {
  stopHanoiTimer(false);
  const puzzle = generateHanoiPuzzle(diskCount);
  const completed = hanoiState?.completed ?? [];
  hanoiState = {
    ...createHanoiState("playing", diskCount),
    rods: cloneRods(puzzle.rods),
    initialRods: cloneRods(puzzle.rods),
    optimalMoves: puzzle.optimalMoves,
    startedAt: Date.now(),
    completed,
  };
  hanoiEls.message.textContent = "";
  startHanoiTimer();
  renderHanoi();
}

function resetHanoiPuzzle() {
  if (!hanoiState || !hanoiState.initialRods.some((rod) => rod.length)) {
    initHanoiGame();
    return;
  }

  stopHanoiTimer(false);
  hanoiState = {
    ...hanoiState,
    phase: "playing",
    rods: cloneRods(hanoiState.initialRods),
    moves: 0,
    elapsedMs: 0,
    startedAt: Date.now(),
    selectedRod: null,
    history: [],
    lastResult: null,
  };
  hanoiEls.message.textContent = "";
  startHanoiTimer();
  renderHanoi();
}

function stopHanoiTimer(markPaused = true) {
  if (hanoiState?.timerId) {
    window.clearInterval(hanoiState.timerId);
    hanoiState.timerId = null;
  }
  if (markPaused && hanoiState?.phase === "playing") {
    hanoiState.phase = "ready";
  }
}

function startHanoiTimer() {
  if (!hanoiState || hanoiState.phase !== "playing") return;
  if (hanoiState.timerId) window.clearInterval(hanoiState.timerId);
  hanoiState.timerId = window.setInterval(tickHanoiClock, 100);
}

function tickHanoiClock() {
  if (!hanoiState || hanoiState.phase !== "playing") return;
  hanoiState.elapsedMs = Date.now() - hanoiState.startedAt;
  hanoiEls.timer.textContent = formatHanoiTime(hanoiState.elapsedMs);
  if (activeGame === "hanoi") {
    els.clockValue.textContent = formatHanoiTime(hanoiState.elapsedMs);
  }
}

function generateHanoiPuzzle(diskCount) {
  let best = null;
  const minOptimal = HANOI_MIN_OPTIMAL[diskCount] ?? diskCount + 2;

  for (let attempt = 0; attempt < 160; attempt += 1) {
    const assignment = Array.from({ length: diskCount }, () => String(randomInt(0, 1))).join("");
    if (!assignment.includes("0") || !assignment.includes("1")) continue;
    const optimalMoves = getHanoiOptimalMoves(assignment);
    const rods = hanoiStateToRods(assignment);
    if (!best || optimalMoves > best.optimalMoves) {
      best = { rods, optimalMoves };
    }
    if (optimalMoves >= minOptimal) {
      return { rods, optimalMoves };
    }
  }

  if (best) return best;
  const fallback = "0".repeat(diskCount);
  return {
    rods: hanoiStateToRods(fallback),
    optimalMoves: getHanoiOptimalMoves(fallback),
  };
}

function getHanoiOptimalMoves(startState) {
  const goal = String(HANOI_GOAL_ROD).repeat(startState.length);
  if (startState === goal) return 0;
  const queue = [startState];
  const distance = new Map([[startState, 0]]);

  for (let head = 0; head < queue.length; head += 1) {
    const stateKey = queue[head];
    const currentDistance = distance.get(stateKey);
    for (const nextState of getHanoiNextStates(stateKey)) {
      if (distance.has(nextState)) continue;
      const nextDistance = currentDistance + 1;
      if (nextState === goal) return nextDistance;
      distance.set(nextState, nextDistance);
      queue.push(nextState);
    }
  }

  return 0;
}

function getHanoiNextStates(stateKey) {
  const topDisks = getHanoiTopDisks(stateKey);
  const states = [];
  for (let from = 0; from < 3; from += 1) {
    const disk = topDisks[from];
    if (!disk) continue;
    for (let to = 0; to < 3; to += 1) {
      if (from === to) continue;
      const destinationTop = topDisks[to];
      if (destinationTop && disk > destinationTop) continue;
      const chars = stateKey.split("");
      chars[disk - 1] = String(to);
      states.push(chars.join(""));
    }
  }
  return states;
}

function getHanoiTopDisks(stateKey) {
  const topDisks = [null, null, null];
  for (let disk = 1; disk <= stateKey.length; disk += 1) {
    const rod = Number(stateKey[disk - 1]);
    if (topDisks[rod] === null) topDisks[rod] = disk;
  }
  return topDisks;
}

function hanoiStateToRods(stateKey) {
  const rods = [[], [], []];
  for (let disk = stateKey.length; disk >= 1; disk -= 1) {
    rods[Number(stateKey[disk - 1])].push(disk);
  }
  return rods;
}

function cloneRods(rods) {
  return rods.map((rod) => [...rod]);
}

function getNextHanoiDiskCount() {
  if (!hanoiState) return Number(hanoiEls.startLevel.value);
  if (hanoiState.mode === "fixed" || !hanoiState.lastResult) return hanoiState.diskCount;
  const efficient = hanoiState.lastResult.moves <= hanoiState.lastResult.optimalMoves + Math.max(1, Math.floor(hanoiState.lastResult.optimalMoves * 0.15));
  return clamp(hanoiState.diskCount + (efficient ? 1 : 0), Number(hanoiEls.startLevel.value), HANOI_MAX_BLOCKS);
}

function moveHanoiBlock(fromRod, toRod) {
  if (!hanoiState || hanoiState.phase !== "playing") return;
  if (fromRod === toRod) {
    hanoiState.selectedRod = null;
    renderHanoi();
    return;
  }

  const source = hanoiState.rods[fromRod];
  const destination = hanoiState.rods[toRod];
  const disk = source[source.length - 1];
  const destinationTop = destination[destination.length - 1];

  if (!disk) {
    hanoiEls.message.textContent = "Choose a pole with a top block.";
    hanoiState.selectedRod = null;
    renderHanoi();
    return;
  }

  if (destinationTop && disk > destinationTop) {
    hanoiEls.message.textContent = "Illegal move: a larger block cannot go on a smaller block.";
    hanoiState.selectedRod = fromRod;
    renderHanoi();
    return;
  }

  source.pop();
  destination.push(disk);
  hanoiState.moves += 1;
  hanoiState.selectedRod = null;
  hanoiState.history.unshift(`Move ${hanoiState.moves}: block ${disk} from pole ${fromRod + 1} to pole ${toRod + 1}`);
  hanoiState.history = hanoiState.history.slice(0, 20);
  hanoiEls.message.textContent = "";

  if (isHanoiComplete()) {
    completeHanoiPuzzle();
    return;
  }

  renderHanoi();
}

function isHanoiComplete() {
  return hanoiState.rods[HANOI_GOAL_ROD].length === hanoiState.diskCount;
}

function completeHanoiPuzzle() {
  hanoiState.elapsedMs = Date.now() - hanoiState.startedAt;
  stopHanoiTimer(false);
  hanoiState.phase = "complete";
  const efficiency = hanoiState.optimalMoves ? hanoiState.optimalMoves / hanoiState.moves : 0;
  const timeBonus = Math.max(0, 80 - hanoiState.elapsedMs / 1000);
  const score = Math.max(0, Math.round(100 * efficiency + timeBonus + hanoiState.diskCount * 20));
  hanoiState.score += score;
  hanoiState.lastResult = {
    diskCount: hanoiState.diskCount,
    moves: hanoiState.moves,
    optimalMoves: hanoiState.optimalMoves,
    elapsedMs: hanoiState.elapsedMs,
    score,
  };
  hanoiState.completed.unshift(hanoiState.lastResult);
  hanoiState.completed = hanoiState.completed.slice(0, 8);
  renderHanoi();
}

function handleHanoiRodClick(rodIndex) {
  if (!hanoiState || hanoiState.phase !== "playing") return;
  if (hanoiState.selectedRod === null) {
    if (!hanoiState.rods[rodIndex].length) return;
    hanoiState.selectedRod = rodIndex;
    hanoiEls.message.textContent = `Selected pole ${rodIndex + 1}. Choose a destination pole.`;
    renderHanoi();
    return;
  }
  moveHanoiBlock(hanoiState.selectedRod, rodIndex);
}

function startHanoiPointerDrag(event) {
  const block = event.target.closest("[data-hanoi-disk]");
  if (!block || !block.classList.contains("top") || !hanoiState || hanoiState.phase !== "playing") return;
  const point = getHanoiEventPoint(event);
  if (!point) return;
  hanoiPointerDrag = {
    fromRod: Number(block.dataset.hanoiSource),
    block,
  };
  block.classList.add("dragging");
  event.preventDefault();
}

function finishHanoiPointerDrag(event) {
  if (!hanoiPointerDrag) return;
  const { fromRod, block } = hanoiPointerDrag;
  hanoiPointerDrag = null;
  block.classList.remove("dragging");

  const point = getHanoiEventPoint(event);
  if (!point) return;
  const target = document.elementFromPoint(point.x, point.y);
  const rod = target?.closest("[data-hanoi-rod]");
  if (!rod) return;
  hanoiSuppressNextClick = true;
  moveHanoiBlock(fromRod, Number(rod.dataset.hanoiRod));
}

function getHanoiEventPoint(event) {
  const touch = event.changedTouches?.[0] ?? event.touches?.[0];
  if (touch) {
    return { x: touch.clientX, y: touch.clientY };
  }
  if (Number.isFinite(event.clientX) && Number.isFinite(event.clientY)) {
    return { x: event.clientX, y: event.clientY };
  }
  return null;
}

function renderHanoi() {
  if (!hanoiState) return;
  if (activeGame === "hanoi") renderHanoiStatus();

  hanoiEls.phaseLabel.textContent = getHanoiPhaseLabel();
  hanoiEls.startButton.textContent = hanoiState.phase === "playing" ? "Reset puzzle" : hanoiState.phase === "complete" ? "Next puzzle" : "Start";
  hanoiEls.nextButton.disabled = hanoiState.phase === "playing";
  hanoiEls.startLevel.disabled = hanoiState.phase === "playing";
  hanoiEls.mode.disabled = hanoiState.phase === "playing";
  hanoiEls.level.textContent = `${hanoiState.diskCount} blocks`;
  hanoiEls.moves.textContent = `${hanoiState.moves} / ${hanoiState.optimalMoves || "-"}`;
  hanoiEls.timer.textContent = formatHanoiTime(hanoiState.elapsedMs);
  hanoiEls.score.textContent = `${hanoiState.score} pts`;

  if (hanoiState.phase === "ready") {
    hanoiEls.message.textContent = "Press Start to generate a legal starting puzzle on poles 1 and 2.";
    hanoiEls.board.innerHTML = renderHanoiEmptyBoard();
  } else {
    hanoiEls.board.innerHTML = hanoiState.rods.map((rod, index) => renderHanoiRod(rod, index)).join("");
    if (hanoiState.phase === "complete") {
      hanoiEls.message.textContent = `Solved in ${hanoiState.moves} moves. Optimal was ${hanoiState.optimalMoves}.`;
    }
  }

  renderHanoiStats();
  renderHanoiReview();
}

function getHanoiPhaseLabel() {
  if (hanoiState.phase === "playing") return "Solving";
  if (hanoiState.phase === "complete") return "Complete";
  return "Ready";
}

function renderHanoiStatus() {
  els.statusLabelOne.textContent = "Level";
  els.statusLabelTwo.textContent = "Moves";
  els.statusLabelThree.textContent = "Optimal";
  els.statusLabelFour.textContent = "Clock";
  els.bankrollValue.textContent = `${hanoiState.diskCount} blocks`;
  els.roundValue.textContent = String(hanoiState.moves);
  els.skillValue.textContent = hanoiState.optimalMoves ? String(hanoiState.optimalMoves) : "-";
  els.clockValue.textContent = formatHanoiTime(hanoiState.elapsedMs);
}

function renderHanoiEmptyBoard() {
  return [0, 1, 2].map((_, index) => renderHanoiRod([], index)).join("");
}

function renderHanoiRod(rod, index) {
  const topDisk = rod[rod.length - 1];
  const selected = hanoiState.selectedRod === index ? " selected" : "";
  const goal = index === HANOI_GOAL_ROD ? " goal" : "";
  return `
    <div class="hanoi-pole${selected}${goal}" data-hanoi-rod="${index}">
      <div class="hanoi-stack">
        ${rod
          .map((disk) => {
            const isTop = disk === topDisk && hanoiState.phase === "playing";
            return `
              <button
                class="hanoi-block disk-${disk}${isTop ? " top" : ""}"
                type="button"
                draggable="${isTop ? "true" : "false"}"
                data-hanoi-disk="${disk}"
                data-hanoi-source="${index}"
                style="--disk-width: ${34 + disk * 9}%"
              >
                ${disk}
              </button>
            `;
          })
          .join("")}
      </div>
      <div class="hanoi-pole-line" aria-hidden="true"></div>
      <div class="hanoi-base">Pole ${index + 1}</div>
    </div>
  `;
}

function renderHanoiStats() {
  const last = hanoiState.lastResult;
  const moveDelta = last ? last.moves - last.optimalMoves : null;
  hanoiEls.stats.innerHTML = `
    <div><span>Best target</span><strong>${hanoiState.optimalMoves || "-"}</strong></div>
    <div><span>Move delta</span><strong>${moveDelta === null ? "-" : moveDelta <= 0 ? "Optimal" : `+${moveDelta}`}</strong></div>
    <div><span>Next level</span><strong>${hanoiState.phase === "complete" ? `${getNextHanoiDiskCount()} blocks` : "-"}</strong></div>
  `;
}

function renderHanoiReview() {
  if (hanoiState.phase === "ready") {
    hanoiEls.review.innerHTML = `<div class="review-item"><strong>No puzzle yet</strong><span>Generated starts use only poles 1 and 2; the goal is always pole 3.</span></div>`;
    return;
  }

  if (hanoiState.phase === "complete" && hanoiState.lastResult) {
    const result = hanoiState.lastResult;
    hanoiEls.review.innerHTML = `
      <div class="review-item ${result.moves === result.optimalMoves ? "correct" : "missed"}">
        <strong>${result.diskCount} blocks solved in ${result.moves} moves</strong>
        <span>Optimal ${result.optimalMoves}; time ${formatHanoiTime(result.elapsedMs)}; score +${result.score}</span>
      </div>
      ${hanoiState.completed
        .slice(1)
        .map(
          (item) => `
            <div class="review-item">
              <strong>${item.diskCount} blocks | ${item.moves}/${item.optimalMoves} moves</strong>
              <span>${formatHanoiTime(item.elapsedMs)}; +${item.score} pts</span>
            </div>
          `,
        )
        .join("")}
    `;
    return;
  }

  if (!hanoiState.history.length) {
    hanoiEls.review.innerHTML = `<div class="review-item"><strong>Drag or click a top block</strong><span>Only the top block on each pole can move.</span></div>`;
    return;
  }

  hanoiEls.review.innerHTML = hanoiState.history
    .map((item) => `<div class="review-item"><strong>${item}</strong></div>`)
    .join("");
}

function formatHanoiTime(ms) {
  return `${(ms / 1000).toFixed(1)}s`;
}

function initFruitGame() {
  stopFruitTimer(false);
  fruitState = createFruitState();
  renderFruit();
}

function createFruitState() {
  const stateValue = {
    phase: "ready",
    durationSeconds: Number(fruitEls.duration.value),
    timeLeft: Number(fruitEls.duration.value),
    nextUpdateIn: randomInt(15, 20),
    timerId: null,
    bags: {
      a: makeFruitBag(),
      b: makeFruitBag(),
    },
    event: { type: "none", label: "No event" },
    bid: 0,
    ask: 0,
    rawProfit: 0,
    periods: [],
    tape: [],
    valueRevealed: false,
  };
  setFruitQuote(stateValue);
  startFruitPeriod(stateValue);
  return stateValue;
}

function makeFruitBag() {
  return {
    apples: randomInt(3, 8),
    oranges: randomInt(3, 8),
  };
}

function toggleFruitTimer() {
  if (!fruitState) return;
  if (fruitState.phase === "running") {
    fruitState.phase = "paused";
    stopFruitTimer(false);
  } else {
    fruitState.phase = "running";
    startFruitTimer();
  }
  renderFruit();
}

function startFruitTimer() {
  if (!fruitState || fruitState.timerId || fruitState.timeLeft <= 0) return;
  fruitState.timerId = window.setInterval(tickFruitClock, 1000);
}

function stopFruitTimer(markPaused = true) {
  if (fruitState?.timerId) {
    window.clearInterval(fruitState.timerId);
    fruitState.timerId = null;
  }
  if (markPaused && fruitState?.phase === "running") {
    fruitState.phase = "paused";
  }
}

function tickFruitClock() {
  if (!fruitState || fruitState.phase !== "running") return;
  fruitState.timeLeft -= 1;
  fruitState.nextUpdateIn -= 1;
  if (fruitState.nextUpdateIn <= 0) {
    updateFruitMarket();
  }
  if (fruitState.timeLeft <= 0) {
    fruitState.timeLeft = 0;
    fruitState.phase = "finished";
    stopFruitTimer(false);
  }
  renderFruit();
}

function updateFruitMarket() {
  if (!fruitState) return;
  ["a", "b"].forEach((key) => {
    const bag = fruitState.bags[key];
    bag.apples += randomInt(0, 3);
    bag.oranges += randomInt(0, 3);
    if (bag.apples > 12 || bag.oranges > 12) {
      fruitState.bags[key] = makeFruitBag();
    }
  });
  fruitState.nextUpdateIn = randomInt(15, 20);
  fruitState.event = chooseFruitEvent();
  fruitState.valueRevealed = false;
  setFruitQuote(fruitState);
  startFruitPeriod(fruitState);
  fruitState.message = "Market updated. Recalculate the bags.";
  renderFruit();
}

function chooseFruitEvent() {
  if (fruitEls.events.value !== "on" || Math.random() < 0.45) {
    return { type: "none", label: "No event" };
  }
  return sample([
    { type: "apple-inflation", label: "Apple inflation: apples count 2x" },
    { type: "orange-deflation", label: "Orange deflation: oranges count 0.5x, rounded up" },
    { type: "no-apples-a", label: "No apples in Bag A" },
    { type: "rounding", label: "Rounding event: value rounds to nearest 10" },
  ]);
}

function startFruitPeriod(targetState) {
  targetState.periods.push({
    value: calculateFruitValue(targetState),
    firstTradeProfitable: null,
    trades: 0,
  });
  targetState.periods = targetState.periods.slice(-20);
}

function setFruitQuote(targetState) {
  const value = calculateFruitValue(targetState);
  const spread = randomInt(3, 6);
  const edge = randomInt(1, 6);
  const mode = sample(["buy", "sell", "none", "none"]);

  if (mode === "buy") {
    targetState.ask = Math.max(1, value - edge);
    targetState.bid = targetState.ask - spread;
  } else if (mode === "sell") {
    targetState.bid = value + edge;
    targetState.ask = targetState.bid + spread;
  } else {
    const mid = value + randomInt(-2, 2);
    targetState.bid = mid - Math.ceil(spread / 2);
    targetState.ask = targetState.bid + spread;
  }
}

function calculateFruitValue(targetState = fruitState) {
  let apples = targetState.bags.a.apples + targetState.bags.b.apples;
  let oranges = targetState.bags.a.oranges + targetState.bags.b.oranges;

  if (targetState.event.type === "apple-inflation") {
    apples *= 2;
  } else if (targetState.event.type === "orange-deflation") {
    oranges = Math.ceil(oranges * 0.5);
  } else if (targetState.event.type === "no-apples-a") {
    apples = targetState.bags.b.apples;
  }

  let value = apples * oranges;
  if (targetState.event.type === "rounding") {
    value = Math.round(value / 10) * 10;
  }
  return value;
}

function executeFruitTrade(side) {
  if (!fruitState || fruitState.phase === "finished") return;
  const value = calculateFruitValue();
  const pnl = side === "buy" ? value - fruitState.ask : fruitState.bid - value;
  const profitable = pnl > 0;
  const currentPeriod = fruitState.periods[fruitState.periods.length - 1];
  if (currentPeriod && currentPeriod.firstTradeProfitable === null) {
    currentPeriod.firstTradeProfitable = profitable;
  }
  if (currentPeriod) currentPeriod.trades += 1;
  fruitState.rawProfit += pnl;
  fruitState.valueRevealed = true;
  fruitState.tape.unshift({
    side,
    price: side === "buy" ? fruitState.ask : fruitState.bid,
    value,
    pnl,
    event: fruitState.event.label,
  });
  fruitState.tape = fruitState.tape.slice(0, 16);
  fruitState.message = `${side === "buy" ? "Bought" : "Sold"} for ${pnl >= 0 ? "+" : ""}${pnl} P&L.`;
  renderFruit();
}

function getFruitAccuracyParts() {
  const firstClicks = fruitState.periods.filter((period) => period.firstTradeProfitable !== null);
  const correct = firstClicks.filter((period) => period.firstTradeProfitable).length;
  return { correct, total: firstClicks.length };
}

function getFruitScore() {
  const { correct, total } = getFruitAccuracyParts();
  const accuracy = total ? correct / total : 0;
  return Math.round(fruitState.rawProfit * accuracy * 10) / 10;
}

function revealFruitValue() {
  if (!fruitState) return;
  fruitState.valueRevealed = true;
  fruitState.message = "Value revealed for review. Trading still uses the visible bid/ask.";
  renderFruit();
}

function renderFruit() {
  if (!fruitState) return;
  if (activeGame === "fruit") renderFruitStatus();
  fruitEls.phaseLabel.textContent =
    fruitState.phase === "running" ? "Trading period" : fruitState.phase === "finished" ? "Final scoring" : "Paused practice";
  fruitEls.startButton.textContent = fruitState.phase === "running" ? "Pause" : "Start";
  fruitEls.duration.disabled = fruitState.phase === "running";
  fruitEls.events.disabled = fruitState.phase === "running";
  fruitEls.profit.textContent = signedNumber(fruitState.rawProfit);
  const accuracy = getFruitAccuracyParts();
  fruitEls.accuracy.textContent = `${accuracy.correct} / ${accuracy.total}`;
  fruitEls.score.textContent = signedNumber(getFruitScore());
  fruitEls.message.textContent = fruitState.message || "";
  fruitEls.bagA.innerHTML = renderFruitBag("Bag A", fruitState.bags.a);
  fruitEls.bagB.innerHTML = renderFruitBag("Bag B", fruitState.bags.b);
  fruitEls.eventLabel.textContent = fruitState.event.label;
  fruitEls.timer.textContent = `${fruitState.timeLeft}s`;
  fruitEls.bid.textContent = String(fruitState.bid);
  fruitEls.ask.textContent = String(fruitState.ask);
  fruitEls.updateLine.textContent =
    fruitState.phase === "finished" ? "Session complete." : `Next update in ${fruitState.nextUpdateIn}s.`;
  fruitEls.valueLabel.textContent = fruitState.valueRevealed ? `Value ${calculateFruitValue()}` : "Value hidden";
  fruitEls.buyButton.disabled = fruitState.phase === "finished";
  fruitEls.sellButton.disabled = fruitState.phase === "finished";
  renderFruitTape();
}

function renderFruitStatus() {
  const accuracy = getFruitAccuracyParts();
  els.statusLabelOne.textContent = "Raw P&L";
  els.statusLabelTwo.textContent = "Time";
  els.statusLabelThree.textContent = "Accuracy";
  els.statusLabelFour.textContent = "Score";
  els.bankrollValue.textContent = signedNumber(fruitState.rawProfit);
  els.roundValue.textContent = `${fruitState.timeLeft}s`;
  els.skillValue.textContent = `${accuracy.correct} / ${accuracy.total}`;
  els.clockValue.textContent = signedNumber(getFruitScore());
}

function renderFruitBag(label, bag) {
  return `
    <h3>${label}</h3>
    <div class="fruit-count"><span>Apples</span><strong>${bag.apples}</strong></div>
    <div class="fruit-count"><span>Oranges</span><strong>${bag.oranges}</strong></div>
  `;
}

function renderFruitTape() {
  if (!fruitState.tape.length) {
    fruitEls.tape.innerHTML = `<div class="tape-item"><div><span>Waiting</span><strong>No trades yet</strong></div><div class="tape-pnl">0</div></div>`;
    return;
  }

  fruitEls.tape.innerHTML = fruitState.tape
    .map(
      (trade) => `
        <div class="tape-item">
          <div>
            <span>${trade.event}</span>
            <strong>${trade.side === "buy" ? "Buy" : "Sell"} at ${trade.price}; value ${trade.value}</strong>
            <span>${trade.pnl >= 0 ? "Profitable" : "Losing"} trade</span>
          </div>
          <div class="tape-pnl ${trade.pnl >= 0 ? "positive" : "negative"}">${signedNumber(trade.pnl)}</div>
        </div>
      `,
    )
    .join("");
}

function signedNumber(value) {
  if (value > 0) return `+${value}`;
  return String(value);
}

function initNextCardGame() {
  nextCardState = createNextCardState();
  renderNextCard();
}

function createNextCardState() {
  const deck = shuffle(createNextCardDeck());
  const currentCard = deck.pop();
  return {
    phase: "ready",
    deck,
    currentCard,
    nextCard: null,
    bankroll: 1000,
    startingBankroll: 1000,
    round: 0,
    totalRounds: 12,
    aceMode: nextCardEls.ace.value,
    suits: Number(nextCardEls.suits.value),
    history: [],
    totals: {
      decision: 0,
      sizing: 0,
      count: 0,
    },
  };
}

function createNextCardDeck() {
  const suitCount = Number(nextCardEls.suits.value);
  const suits = SUITS.slice(0, suitCount);
  return suits.flatMap((suit) =>
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

function startOrAdvanceNextCard() {
  if (!nextCardState || nextCardState.phase === "finished") {
    initNextCardGame();
  }

  if (nextCardState.phase === "ready") {
    nextCardState.phase = "betting";
    nextCardState.round = 1;
    renderNextCard();
    return;
  }

  if (nextCardState.phase === "result") {
    if (nextCardState.round >= nextCardState.totalRounds || nextCardState.deck.length <= 1 || nextCardState.bankroll <= 0) {
      nextCardState.phase = "finished";
      renderNextCard();
      return;
    }
    nextCardState.currentCard = nextCardState.nextCard;
    nextCardState.nextCard = null;
    nextCardState.round += 1;
    nextCardState.phase = "betting";
    renderNextCard();
  }
}

function executeNextCardBet(side) {
  if (!nextCardState || nextCardState.phase !== "betting") return;
  const stake = clamp(Math.floor(Number(nextCardEls.stake.value) || 0), 0, Math.floor(nextCardState.bankroll));
  if (stake <= 0) {
    nextCardEls.message.textContent = "Enter a positive stake.";
    return;
  }

  const analysis = analyzeNextCardDecision(nextCardState.currentCard, nextCardState.deck, nextCardState.bankroll);
  const drawIndex = randomInt(0, nextCardState.deck.length - 1);
  const nextCard = nextCardState.deck.splice(drawIndex, 1)[0];
  const currentValue = getNextCardValue(nextCardState.currentCard);
  const nextValue = getNextCardValue(nextCard);
  let outcome = "push";
  let pnl = 0;
  if (nextValue > currentValue) {
    outcome = "higher";
    pnl = side === "higher" ? stake : -stake;
  } else if (nextValue < currentValue) {
    outcome = "lower";
    pnl = side === "lower" ? stake : -stake;
  }

  const optimalStake = Math.round(analysis.optimalKelly * nextCardState.bankroll);
  const decisionScore = side === analysis.bestSide && analysis.bestKelly > 0 ? 1 : 0;
  const sizingDenominator = Math.max(optimalStake, nextCardState.bankroll * 0.05, 1);
  const sizingScore = clamp(1 - Math.abs(stake - optimalStake) / sizingDenominator, 0, 1);
  nextCardState.totals.decision += decisionScore;
  nextCardState.totals.sizing += sizingScore;
  nextCardState.totals.count += 1;
  nextCardState.bankroll = Math.max(0, nextCardState.bankroll + pnl);
  nextCardState.nextCard = nextCard;
  nextCardState.phase = "result";
  nextCardState.history.unshift({
    currentCard: nextCardState.currentCard,
    nextCard,
    side,
    outcome,
    stake,
    pnl,
    analysis,
    optimalStake,
    decisionScore,
    sizingScore,
  });
  nextCardState.history = nextCardState.history.slice(0, 20);
  nextCardEls.message.textContent =
    outcome === "push" ? "Equal rank: stake returned." : `${outcome === side ? "Correct" : "Wrong"} for ${formatMoney(pnl)}.`;
  renderNextCard();
}

function analyzeNextCardDecision(currentCard, deck, bankroll) {
  const currentValue = getNextCardValue(currentCard);
  const counts = deck.reduce(
    (acc, card) => {
      const value = getNextCardValue(card);
      if (value > currentValue) acc.higher += 1;
      else if (value < currentValue) acc.lower += 1;
      else acc.equal += 1;
      return acc;
    },
    { higher: 0, lower: 0, equal: 0 },
  );
  const total = deck.length;
  const higherKelly = getPushAwareKelly(counts.higher, counts.lower);
  const lowerKelly = getPushAwareKelly(counts.lower, counts.higher);
  const bestSide = higherKelly >= lowerKelly ? "higher" : "lower";
  const bestKelly = Math.max(higherKelly, lowerKelly);
  return {
    counts,
    total,
    higherKelly,
    lowerKelly,
    bestSide,
    bestKelly,
    optimalKelly: bestKelly,
    optimalStake: Math.round(bestKelly * bankroll),
  };
}

function getPushAwareKelly(winCount, loseCount) {
  if (winCount <= loseCount || winCount + loseCount === 0) return 0;
  return (winCount - loseCount) / (winCount + loseCount);
}

function getNextCardValue(card) {
  if (card.rank === "A") return nextCardState.aceMode === "high" ? 14 : 1;
  if (card.rank === "J") return 11;
  if (card.rank === "Q") return 12;
  if (card.rank === "K") return 13;
  return Number(card.rank);
}

function setNextCardHalfBankroll() {
  if (!nextCardState) return;
  nextCardEls.stake.value = String(Math.floor(nextCardState.bankroll / 2));
}

function getNextCardSkillScore() {
  if (!nextCardState?.totals.count) return getNextCardSuitBonus();
  const decision = (nextCardState.totals.decision / nextCardState.totals.count) * 3;
  const sizing = (nextCardState.totals.sizing / nextCardState.totals.count) * 7;
  return decision + sizing + getNextCardSuitBonus();
}

function getNextCardSuitBonus() {
  return Math.max(0, nextCardState.suits - 1);
}

function renderNextCard() {
  if (!nextCardState) return;
  if (activeGame === "next-card") renderNextCardStatus();
  const isBetting = nextCardState.phase === "betting";
  nextCardEls.phaseLabel.textContent =
    nextCardState.phase === "betting"
      ? "Betting phase"
      : nextCardState.phase === "result"
        ? "Result"
        : nextCardState.phase === "finished"
          ? "Final scoring"
          : "Ready";
  nextCardEls.nextButton.textContent =
    nextCardState.phase === "ready"
      ? "Start"
      : nextCardState.phase === "result"
        ? nextCardState.round >= nextCardState.totalRounds
          ? "Finish"
          : "Next round"
        : nextCardState.phase === "finished"
          ? "New game"
          : "Bet first";
  nextCardEls.nextButton.disabled = isBetting;
  nextCardEls.suits.disabled = nextCardState.phase !== "ready" && nextCardState.phase !== "finished";
  nextCardEls.ace.disabled = nextCardState.phase !== "ready" && nextCardState.phase !== "finished";
  nextCardEls.higherButton.disabled = !isBetting;
  nextCardEls.lowerButton.disabled = !isBetting;
  nextCardEls.stake.disabled = !isBetting;
  nextCardEls.bankroll.textContent = formatMoney(nextCardState.bankroll);
  nextCardEls.round.textContent = `${nextCardState.round} / ${nextCardState.totalRounds}`;
  nextCardEls.score.textContent = getNextCardSkillScore().toFixed(1);
  nextCardEls.deckCount.textContent = `${nextCardState.deck.length} left`;
  nextCardEls.current.innerHTML = renderCard(nextCardState.currentCard);
  nextCardEls.reveal.innerHTML = nextCardState.phase === "result" || nextCardState.phase === "finished" ? renderCard(nextCardState.nextCard) : renderCard(null);
  nextCardEls.bonus.textContent = `+${getNextCardSuitBonus()} suit bonus`;
  renderNextCardPlayed();
  renderNextCardReview();
}

function renderNextCardStatus() {
  els.statusLabelOne.textContent = "Bankroll";
  els.statusLabelTwo.textContent = "Round";
  els.statusLabelThree.textContent = "Score";
  els.statusLabelFour.textContent = "Deck";
  els.bankrollValue.textContent = formatMoney(nextCardState.bankroll);
  els.roundValue.textContent = `${nextCardState.round} / ${nextCardState.totalRounds}`;
  els.skillValue.textContent = getNextCardSkillScore().toFixed(1);
  els.clockValue.textContent = String(nextCardState.deck.length);
}

function renderNextCardPlayed() {
  const played = nextCardState.history.flatMap((item) => [item.currentCard, item.nextCard]).slice(0, 18);
  if (!played.length) {
    nextCardEls.played.innerHTML = `<span class="analysis-line">Played cards appear here after each result.</span>`;
    return;
  }
  nextCardEls.played.innerHTML = played
    .map((card) => `<span class="played-card-chip ${card.color === "red" ? "red" : ""}">${card.name}</span>`)
    .join("");
}

function renderNextCardReview() {
  if (!nextCardState.history.length) {
    nextCardEls.review.innerHTML = `<div class="review-item"><strong>No completed bets yet</strong><span>Probabilities and Kelly sizing are revealed only after a bet resolves.</span></div>`;
    return;
  }
  nextCardEls.review.innerHTML = nextCardState.history
    .map((item) => {
      const counts = item.analysis.counts;
      return `
        <div class="review-item ${item.pnl >= 0 ? "correct" : "incorrect"}">
          <strong>${item.currentCard.name} -> ${item.nextCard.name}: ${item.outcome}; ${formatMoney(item.pnl)}</strong>
          <span>Higher ${counts.higher}/${item.analysis.total}, lower ${counts.lower}/${item.analysis.total}, equal ${counts.equal}/${item.analysis.total}. Best: ${item.analysis.bestSide}, Kelly stake ${formatMoney(item.optimalStake)}.</span>
        </div>
      `;
    })
    .join("");
}

function initMakeMarketGame() {
  makeMarketState = createMakeMarketState();
  makeMarketEls.bid.value = "50";
  makeMarketEls.ask.value = "300";
  renderMakeMarket();
}

function createMakeMarketState() {
  return {
    phase: "quoting",
    round: 0,
    maxRounds: 5,
    question: {
      prompt: "How many countries are UN member states?",
      answer: 193,
      lowerBound: 0,
      upperBound: 400,
    },
    position: 0,
    cash: 0,
    trades: [],
    quotes: [],
    quiz: [],
    quizScore: 0,
    finalMarket: null,
  };
}

function submitMakeMarketQuote() {
  if (!makeMarketState || makeMarketState.phase !== "quoting") return;
  const bid = Number(makeMarketEls.bid.value);
  const ask = Number(makeMarketEls.ask.value);
  if (!Number.isFinite(bid) || !Number.isFinite(ask) || bid >= ask) {
    makeMarketEls.message.textContent = "Quote must have a finite bid below ask.";
    return;
  }
  if (makeMarketState.round > 0) {
    const maxSpread = getMakeMarketMaxSpread(bid);
    if (ask - bid > maxSpread) {
      makeMarketEls.message.textContent = `Spread too wide. Max spread is ${maxSpread.toFixed(1)}.`;
      return;
    }
  }

  const answer = makeMarketState.question.answer;
  let trade = null;
  if (bid > answer) {
    trade = { side: "buy", price: bid, detail: "Computer sold to your bid" };
    makeMarketState.position += 1;
    makeMarketState.cash -= bid;
  } else if (ask < answer) {
    trade = { side: "sell", price: ask, detail: "Computer bought from your ask" };
    makeMarketState.position -= 1;
    makeMarketState.cash += ask;
  }

  if (makeMarketState.round === 0) {
    makeMarketState.question.lowerBound = bid;
    makeMarketState.question.upperBound = ask;
  }

  const quote = {
    round: makeMarketState.round,
    bid,
    ask,
    trade,
    positionAfter: makeMarketState.position,
    cashAfter: makeMarketState.cash,
  };
  makeMarketState.quotes.unshift(quote);
  makeMarketState.finalMarket = { bid, ask };
  if (trade) makeMarketState.trades.unshift({ ...trade, round: makeMarketState.round });
  makeMarketState.phase = "result";
  makeMarketEls.message.textContent = trade ? trade.detail : "No trade. Your market straddled the answer.";
  renderMakeMarket();
}

function getMakeMarketMaxSpread(bid) {
  const rule = makeMarketEls.spread.value;
  if (rule === "fixed") {
    return niceSpread(makeMarketState.question.answer * 0.01);
  }
  return Math.max(1, bid * Number(rule));
}

function niceSpread(value) {
  const nice = [0.1, 0.2, 0.5, 1, 2, 5, 10, 20, 50, 100];
  return nice.find((item) => item >= value) || 100;
}

function advanceMakeMarket() {
  if (!makeMarketState || makeMarketState.phase === "finished") {
    initMakeMarketGame();
    return;
  }
  if (makeMarketState.phase === "quoting") return;
  if (makeMarketState.phase === "result") {
    if (makeMarketState.round >= makeMarketState.maxRounds) {
      makeMarketState.phase = "quiz";
      makeMarketState.quiz = buildMakeMarketQuiz();
      renderMakeMarket();
      return;
    }
    makeMarketState.round += 1;
    makeMarketState.phase = "quoting";
    setMakeMarketSuggestedQuote();
    renderMakeMarket();
    return;
  }
  if (makeMarketState.phase === "quiz") {
    scoreMakeMarketQuiz();
    makeMarketState.phase = "finished";
    renderMakeMarket();
  }
}

function setMakeMarketSuggestedQuote() {
  const examples = [
    [50, 300],
    [100, 110],
    [200, 210],
    [180, 190],
    [190, 200],
    [192, 198],
  ];
  const [bid, ask] = examples[Math.min(makeMarketState.round, examples.length - 1)];
  makeMarketEls.bid.value = String(bid);
  makeMarketEls.ask.value = String(ask);
}

function buildMakeMarketQuiz() {
  const position = makeMarketState.position;
  const cash = makeMarketState.cash;
  const breakEven = position === 0 ? null : -cash / position;
  const pnlAtAnswer = cash + position * makeMarketState.question.answer;
  const maxLoss = Math.min(
    cash + position * makeMarketState.question.lowerBound,
    cash + position * makeMarketState.question.upperBound,
  );
  return [
    makeQuizQuestion("What is your final position?", position, [position - 2, position - 1, position + 1]),
    makeQuizQuestion(
      "What is your break-even price?",
      breakEven === null ? "Flat" : Math.round(breakEven),
      breakEven === null ? ["0", "193", "200"] : [Math.round(breakEven - 20), Math.round(breakEven + 20), Math.round(breakEven + 50)],
    ),
    makeQuizQuestion("What is your P&L at the true answer?", pnlAtAnswer, [pnlAtAnswer - 20, pnlAtAnswer + 20, pnlAtAnswer + 50]),
    makeQuizQuestion("What is your max guaranteed P&L inside your first interval?", maxLoss, [maxLoss - 25, maxLoss + 25, maxLoss + 60]),
  ];
}

function makeQuizQuestion(prompt, answer, distractors) {
  const choices = shuffle([String(answer), ...distractors.map((item) => String(item))]).slice(0, 4);
  return { prompt, answer: String(answer), choices, selected: null };
}

function selectMakeMarketQuiz(index, choice) {
  if (!makeMarketState || makeMarketState.phase !== "quiz") return;
  makeMarketState.quiz[index].selected = choice;
  renderMakeMarket();
}

function scoreMakeMarketQuiz() {
  const perCorrect = makeMarketEls.hideHistory.checked ? 1 : 0.5;
  const correctCount = makeMarketState.quiz.filter((item) => item.selected === item.answer).length;
  makeMarketState.quizScore = correctCount * perCorrect + getMakeMarketClosenessBonus();
}

function getMakeMarketClosenessBonus() {
  if (!makeMarketState?.finalMarket) return 0;
  const mid = (makeMarketState.finalMarket.bid + makeMarketState.finalMarket.ask) / 2;
  const pct = Math.abs(mid - makeMarketState.question.answer) / makeMarketState.question.answer;
  if (pct <= 0.05) return 2;
  if (pct <= 0.1) return 1;
  return 0;
}

function renderMakeMarket() {
  if (!makeMarketState) return;
  if (activeGame === "make-market") renderMakeMarketStatus();
  makeMarketEls.phaseLabel.textContent =
    makeMarketState.phase === "quoting"
      ? makeMarketState.round === 0
        ? "Confidence interval"
        : "Market making"
      : makeMarketState.phase === "result"
        ? "Trading results"
        : makeMarketState.phase === "quiz"
          ? "Final questions"
          : "Final scoring";
  makeMarketEls.nextButton.textContent =
    makeMarketState.phase === "result"
      ? makeMarketState.round >= makeMarketState.maxRounds
        ? "Final questions"
        : "Next quote"
      : makeMarketState.phase === "quiz"
        ? "Score quiz"
        : makeMarketState.phase === "finished"
          ? "New game"
          : "Quote first";
  makeMarketEls.nextButton.disabled = makeMarketState.phase === "quoting";
  makeMarketEls.submitButton.disabled = makeMarketState.phase !== "quoting";
  makeMarketEls.bid.disabled = makeMarketState.phase !== "quoting";
  makeMarketEls.ask.disabled = makeMarketState.phase !== "quoting";
  makeMarketEls.spread.disabled = makeMarketState.round > 0;
  makeMarketEls.hideHistory.disabled = makeMarketState.phase !== "quoting";
  makeMarketEls.position.textContent = String(makeMarketState.position);
  makeMarketEls.cash.textContent = signedNumber(makeMarketState.cash);
  makeMarketEls.score.textContent = makeMarketState.quizScore.toFixed(1);
  makeMarketEls.round.textContent = `Round ${makeMarketState.round}`;
  makeMarketEls.question.textContent = makeMarketState.question.prompt;
  makeMarketEls.answerStatus.textContent =
    makeMarketState.phase === "finished" ? `Answer ${makeMarketState.question.answer}` : "Answer hidden";
  renderMakeMarketReview();
}

function renderMakeMarketStatus() {
  els.statusLabelOne.textContent = "Position";
  els.statusLabelTwo.textContent = "Cash";
  els.statusLabelThree.textContent = "Round";
  els.statusLabelFour.textContent = "Quiz";
  els.bankrollValue.textContent = String(makeMarketState.position);
  els.roundValue.textContent = signedNumber(makeMarketState.cash);
  els.skillValue.textContent = String(makeMarketState.round);
  els.clockValue.textContent = makeMarketState.quizScore.toFixed(1);
}

function renderMakeMarketReview() {
  if (makeMarketState.phase === "quiz" || makeMarketState.phase === "finished") {
    renderMakeMarketQuiz();
    return;
  }

  if (!makeMarketState.quotes.length || makeMarketEls.hideHistory.checked) {
    makeMarketEls.review.innerHTML = `<div class="review-item"><strong>${makeMarketEls.hideHistory.checked ? "Trade history hidden" : "No quotes yet"}</strong><span>Final questions are worth more when history is hidden.</span></div>`;
    return;
  }

  makeMarketEls.review.innerHTML = makeMarketState.quotes
    .map(
      (quote) => `
        <div class="review-item ${quote.trade ? "correct" : ""}">
          <strong>Round ${quote.round}: ${quote.bid} / ${quote.ask}</strong>
          <span>${quote.trade ? `${quote.trade.detail} at ${quote.trade.price}` : "No trade"}; position ${quote.positionAfter}, cash ${signedNumber(quote.cashAfter)}</span>
        </div>
      `,
    )
    .join("");
}

function renderMakeMarketQuiz() {
  makeMarketEls.review.innerHTML = makeMarketState.quiz
    .map(
      (item, index) => `
        <div class="review-item ${makeMarketState.phase === "finished" ? (item.selected === item.answer ? "correct" : "incorrect") : ""}">
          <strong>${item.prompt}</strong>
          <span>${makeMarketState.phase === "finished" ? `Answer: ${item.answer}; selected ${item.selected || "none"}` : "Choose one answer."}</span>
          <div class="quiz-option-grid">
            ${item.choices
              .map(
                (choice) => `
                  <button class="small-button ${item.selected === choice ? "choice-button correct" : ""}" type="button" data-make-quiz-index="${index}" data-make-quiz-choice="${choice}" ${makeMarketState.phase === "finished" ? "disabled" : ""}>${choice}</button>
                `,
              )
              .join("")}
          </div>
        </div>
      `,
    )
    .join("");
}

function initCardsMarketGame() {
  cardsMarketState = createCardsMarketState();
  cardsMarketEls.bid.value = "300";
  cardsMarketEls.ask.value = "380";
  renderCardsMarket();
}

function createCardsMarketState() {
  const deck = shuffle(createDeck());
  const players = ["You", "Bot 1", "Bot 2", "Bot 3"].map((name) => ({
    name,
    hand: [deck.pop(), deck.pop()],
  }));
  return {
    phase: "ready",
    deck,
    players,
    center: [deck.pop(), deck.pop(), deck.pop()],
    revealedCenter: 0,
    activeIndex: 0,
    position: 0,
    cash: 0,
    tape: [],
    botQuote: null,
  };
}

function startOrAdvanceCardsMarket() {
  if (!cardsMarketState || cardsMarketState.phase === "final") {
    initCardsMarketGame();
    return;
  }
  if (cardsMarketState.phase === "ready") {
    cardsMarketState.phase = cardsMarketState.activeIndex === 0 ? "quoting" : "responding";
    if (cardsMarketState.phase === "responding") makeBotCardsQuote();
    renderCardsMarket();
    return;
  }
  if (cardsMarketState.phase === "result") {
    revealNextCenterCard();
    if (cardsMarketState.revealedCenter >= cardsMarketState.center.length) {
      cardsMarketState.phase = "final";
    } else {
      cardsMarketState.activeIndex = (cardsMarketState.activeIndex + 1) % cardsMarketState.players.length;
      cardsMarketState.phase = cardsMarketState.activeIndex === 0 ? "quoting" : "responding";
      if (cardsMarketState.phase === "responding") makeBotCardsQuote();
    }
    renderCardsMarket();
  }
}

function submitCardsMarketQuote() {
  if (!cardsMarketState || cardsMarketState.phase !== "quoting") return;
  const bid = Number(cardsMarketEls.bid.value);
  const ask = Number(cardsMarketEls.ask.value);
  if (!Number.isFinite(bid) || !Number.isFinite(ask) || bid >= ask) {
    cardsMarketEls.message.textContent = "Quote must have a bid below ask.";
    return;
  }

  const responses = cardsMarketState.players
    .slice(1)
    .map((player) => {
      const fair = estimateCardsFairValue(player);
      if (fair > ask + 25) return { player, action: "buy", reaction: randomInt(1, 9), fair };
      if (fair < bid - 25) return { player, action: "sell", reaction: randomInt(1, 9), fair };
      return { player, action: "pass", reaction: 99, fair };
    })
    .filter((response) => response.action !== "pass")
    .sort((a, b) => a.reaction - b.reaction);

  if (responses.length) {
    const fill = responses[0];
    if (fill.action === "buy") {
      cardsMarketState.position -= 1;
      cardsMarketState.cash += ask;
    } else {
      cardsMarketState.position += 1;
      cardsMarketState.cash -= bid;
    }
    addCardsTape(`${fill.player.name} ${fill.action === "buy" ? "bought your ask" : "sold to your bid"} at ${fill.action === "buy" ? ask : bid}`);
  } else {
    addCardsTape(`You quoted ${bid} / ${ask}; all bots passed`);
  }
  cardsMarketState.phase = "result";
  renderCardsMarket();
}

function makeBotCardsQuote() {
  const bot = cardsMarketState.players[cardsMarketState.activeIndex];
  const fair = estimateCardsFairValue(bot);
  const width = randomInt(50, 90);
  cardsMarketState.botQuote = {
    bot,
    bid: Math.round((fair - width / 2) / 5) * 5,
    ask: Math.round((fair + width / 2) / 5) * 5,
    fair,
  };
}

function respondToCardsMarket(side) {
  if (!cardsMarketState || cardsMarketState.phase !== "responding" || !cardsMarketState.botQuote) return;
  const quote = cardsMarketState.botQuote;
  if (side === "buy") {
    cardsMarketState.position += 1;
    cardsMarketState.cash -= quote.ask;
    addCardsTape(`You bought ${quote.bot.name}'s ask at ${quote.ask}`);
  } else if (side === "sell") {
    cardsMarketState.position -= 1;
    cardsMarketState.cash += quote.bid;
    addCardsTape(`You sold to ${quote.bot.name}'s bid at ${quote.bid}`);
  } else {
    addCardsTape(`You passed ${quote.bot.name}'s ${quote.bid} / ${quote.ask} market`);
  }
  cardsMarketState.phase = "result";
  renderCardsMarket();
}

function revealNextCenterCard() {
  if (cardsMarketState.revealedCenter < cardsMarketState.center.length) {
    const card = cardsMarketState.center[cardsMarketState.revealedCenter];
    cardsMarketState.revealedCenter += 1;
    addCardsTape(`Center card revealed: ${card.name} (${signedNumber(getMarketCardValue(card))})`);
  }
}

function estimateCardsFairValue(player) {
  const revealedValue = cardsMarketState.center
    .slice(0, cardsMarketState.revealedCenter)
    .reduce((sum, card) => sum + getMarketCardValue(card), 0);
  const handValue = player.hand.reduce((sum, card) => sum + getMarketCardValue(card), 0);
  const unknownCenter = cardsMarketState.center.length - cardsMarketState.revealedCenter;
  const unknownHands = (cardsMarketState.players.length - 1) * 2;
  return revealedValue + handValue + (unknownCenter + unknownHands) * 40;
}

function getMarketCardValue(card) {
  if (["2", "3", "4", "5", "6", "7", "8", "9", "10"].includes(card.rank)) {
    return Number(card.rank) * 10;
  }
  if (card.rank === "A") {
    if (cardsMarketEls.ace.value === "low") return 10;
    return card.color === "red" ? 140 : -140;
  }
  const faceValue = { J: 110, Q: 120, K: 130 }[card.rank];
  return card.color === "red" ? faceValue : -faceValue;
}

function getCardsFinalValue() {
  const centerValue = cardsMarketState.center.reduce((sum, card) => sum + getMarketCardValue(card), 0);
  const handValue = cardsMarketState.players.flatMap((player) => player.hand).reduce((sum, card) => sum + getMarketCardValue(card), 0);
  return centerValue + handValue;
}

function getCardsProjectedPnl() {
  const value =
    cardsMarketState.phase === "final"
      ? getCardsFinalValue()
      : estimateCardsFairValue(cardsMarketState.players[0]);
  return cardsMarketState.cash + cardsMarketState.position * value;
}

function addCardsTape(text) {
  cardsMarketState.tape.unshift(text);
  cardsMarketState.tape = cardsMarketState.tape.slice(0, 20);
  cardsMarketEls.message.textContent = text;
}

function renderCardsMarket() {
  if (!cardsMarketState) return;
  if (activeGame === "cards-market") renderCardsMarketStatus();
  cardsMarketEls.phaseLabel.textContent =
    cardsMarketState.phase === "quoting"
      ? "Quoting phase"
      : cardsMarketState.phase === "responding"
        ? "Response phase"
        : cardsMarketState.phase === "result"
          ? "Round end"
          : cardsMarketState.phase === "final"
            ? "Final scoring"
            : "Ready phase";
  cardsMarketEls.nextButton.textContent =
    cardsMarketState.phase === "ready"
      ? "Start"
      : cardsMarketState.phase === "result"
        ? cardsMarketState.revealedCenter + 1 >= cardsMarketState.center.length
          ? "Settle"
          : "Reveal center"
        : cardsMarketState.phase === "final"
          ? "New game"
          : "Trade first";
  cardsMarketEls.nextButton.disabled = cardsMarketState.phase === "quoting" || cardsMarketState.phase === "responding";
  cardsMarketEls.quoteButton.disabled = cardsMarketState.phase !== "quoting";
  cardsMarketEls.bid.disabled = cardsMarketState.phase !== "quoting";
  cardsMarketEls.ask.disabled = cardsMarketState.phase !== "quoting";
  cardsMarketEls.ace.disabled = cardsMarketState.phase !== "ready";
  cardsMarketEls.position.textContent = String(cardsMarketState.position);
  cardsMarketEls.cash.textContent = signedNumber(cardsMarketState.cash);
  cardsMarketEls.pnl.textContent = signedNumber(getCardsProjectedPnl());
  cardsMarketEls.round.textContent = `Center ${cardsMarketState.revealedCenter} / ${cardsMarketState.center.length}`;
  cardsMarketEls.finalValue.textContent =
    cardsMarketState.phase === "final" ? `Final value ${getCardsFinalValue()}` : "Final hidden";
  renderCardsMarketTable();
  renderCardsMarketResponse();
  renderCardsMarketTape();
}

function renderCardsMarketStatus() {
  els.statusLabelOne.textContent = "Position";
  els.statusLabelTwo.textContent = "Cash";
  els.statusLabelThree.textContent = "P&L";
  els.statusLabelFour.textContent = "Center";
  els.bankrollValue.textContent = String(cardsMarketState.position);
  els.roundValue.textContent = signedNumber(cardsMarketState.cash);
  els.skillValue.textContent = signedNumber(getCardsProjectedPnl());
  els.clockValue.textContent = `${cardsMarketState.revealedCenter} / ${cardsMarketState.center.length}`;
}

function renderCardsMarketTable() {
  cardsMarketEls.center.innerHTML = cardsMarketState.center
    .map((card, index) => renderCard(index < cardsMarketState.revealedCenter || cardsMarketState.phase === "final" ? card : null))
    .join("");
  cardsMarketEls.hand.innerHTML = cardsMarketState.players[0].hand.map(renderCard).join("");
  cardsMarketEls.players.innerHTML = cardsMarketState.players
    .map((player, index) => {
      const visible = index === 0 || cardsMarketState.phase === "final";
      return `
        <div class="cards-player">
          <strong>${player.name}</strong>
          <div class="mini-card-row">${player.hand.map((card) => renderCard(visible ? card : null)).join("")}</div>
        </div>
      `;
    })
    .join("");
}

function renderCardsMarketResponse() {
  if (cardsMarketState.phase === "quoting") {
    cardsMarketEls.response.innerHTML = `<div class="review-item"><strong>Your turn to quote</strong><span>Bots can buy your ask, sell to your bid, or pass. First interested bot gets the trade.</span></div>`;
    return;
  }

  if (cardsMarketState.phase === "responding" && cardsMarketState.botQuote) {
    const quote = cardsMarketState.botQuote;
    cardsMarketEls.response.innerHTML = `
      <div class="review-item">
        <strong>${quote.bot.name} quotes ${quote.bid} / ${quote.ask}</strong>
        <span>Buy at ask, sell at bid, or pass.</span>
      </div>
      <div class="cards-response-actions">
        <button class="buy-button" type="button" data-cards-response="buy">Buy</button>
        <button class="sell-button" type="button" data-cards-response="sell">Sell</button>
        <button class="secondary-button" type="button" data-cards-response="pass">Pass</button>
      </div>
    `;
    return;
  }

  if (cardsMarketState.phase === "final") {
    cardsMarketEls.response.innerHTML = `<div class="review-item correct"><strong>Final value ${getCardsFinalValue()}</strong><span>Final P&L = cash + position x final value = ${signedNumber(getCardsProjectedPnl())}.</span></div>`;
    return;
  }

  cardsMarketEls.response.innerHTML = `<div class="review-item"><strong>Round complete</strong><span>Reveal one center card to update known information.</span></div>`;
}

function renderCardsMarketTape() {
  if (!cardsMarketState.tape.length) {
    cardsMarketEls.tape.innerHTML = `<div class="review-item"><strong>No trades yet</strong><span>Quotes and reveals will appear here.</span></div>`;
    return;
  }
  cardsMarketEls.tape.innerHTML = cardsMarketState.tape
    .map((item) => `<div class="review-item"><strong>${item}</strong></div>`)
    .join("");
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

sequenceEls.resetButton.addEventListener("click", initSequenceGame);
sequenceEls.startButton.addEventListener("click", startSequenceGame);
sequenceEls.skipButton.addEventListener("click", () => recordSequenceAnswer(null, "skipped"));
sequenceEls.options.addEventListener("click", (event) => {
  const option = event.target.closest("[data-sequence-option]");
  if (!option) return;
  recordSequenceAnswer(Number(option.dataset.sequenceOption), "selected");
});

hanoiEls.resetButton.addEventListener("click", resetHanoiPuzzle);
hanoiEls.startButton.addEventListener("click", startOrAdvanceHanoi);
hanoiEls.nextButton.addEventListener("click", () => startHanoiPuzzle(getNextHanoiDiskCount()));
hanoiEls.board.addEventListener("click", (event) => {
  if (hanoiSuppressNextClick) {
    hanoiSuppressNextClick = false;
    event.preventDefault();
    return;
  }
  const rod = event.target.closest("[data-hanoi-rod]");
  if (!rod) return;
  handleHanoiRodClick(Number(rod.dataset.hanoiRod));
});
hanoiEls.board.addEventListener("mousedown", startHanoiPointerDrag);
hanoiEls.board.addEventListener("touchstart", startHanoiPointerDrag, { passive: false });
hanoiEls.board.addEventListener("dragstart", (event) => {
  const block = event.target.closest("[data-hanoi-disk]");
  if (!block || !block.classList.contains("top")) {
    event.preventDefault();
    return;
  }
  event.dataTransfer.setData("text/plain", block.dataset.hanoiSource);
  event.dataTransfer.effectAllowed = "move";
});
hanoiEls.board.addEventListener("dragover", (event) => {
  if (event.target.closest("[data-hanoi-rod]")) {
    event.preventDefault();
  }
});
hanoiEls.board.addEventListener("drop", (event) => {
  const rod = event.target.closest("[data-hanoi-rod]");
  if (!rod) return;
  event.preventDefault();
  const fromRod = Number(event.dataTransfer.getData("text/plain"));
  moveHanoiBlock(fromRod, Number(rod.dataset.hanoiRod));
});
document.addEventListener("mouseup", finishHanoiPointerDrag);
document.addEventListener("touchend", finishHanoiPointerDrag);

fruitEls.resetButton.addEventListener("click", initFruitGame);
fruitEls.startButton.addEventListener("click", toggleFruitTimer);
fruitEls.tickButton.addEventListener("click", updateFruitMarket);
fruitEls.revealButton.addEventListener("click", revealFruitValue);
fruitEls.buyButton.addEventListener("click", () => executeFruitTrade("buy"));
fruitEls.sellButton.addEventListener("click", () => executeFruitTrade("sell"));

nextCardEls.resetButton.addEventListener("click", initNextCardGame);
nextCardEls.nextButton.addEventListener("click", startOrAdvanceNextCard);
nextCardEls.halfButton.addEventListener("click", setNextCardHalfBankroll);
nextCardEls.higherButton.addEventListener("click", () => executeNextCardBet("higher"));
nextCardEls.lowerButton.addEventListener("click", () => executeNextCardBet("lower"));

makeMarketEls.resetButton.addEventListener("click", initMakeMarketGame);
makeMarketEls.submitButton.addEventListener("click", submitMakeMarketQuote);
makeMarketEls.nextButton.addEventListener("click", advanceMakeMarket);
makeMarketEls.review.addEventListener("click", (event) => {
  const option = event.target.closest("[data-make-quiz-index]");
  if (!option) return;
  selectMakeMarketQuiz(Number(option.dataset.makeQuizIndex), option.dataset.makeQuizChoice);
});

cardsMarketEls.resetButton.addEventListener("click", initCardsMarketGame);
cardsMarketEls.nextButton.addEventListener("click", startOrAdvanceCardsMarket);
cardsMarketEls.quoteButton.addEventListener("click", submitCardsMarketQuote);
cardsMarketEls.response.addEventListener("click", (event) => {
  const action = event.target.closest("[data-cards-response]");
  if (!action) return;
  respondToCardsMarket(action.dataset.cardsResponse);
});

setupGameTabs();
startGame();
initEtfGame();
initSequenceGame();
initHanoiGame();
initFruitGame();
initNextCardGame();
initMakeMarketGame();
initCardsMarketGame();
setActiveGame("probability");
