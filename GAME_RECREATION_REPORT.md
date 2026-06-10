# MarketMakingGames Recreation Report

Date researched: 2026-06-10

## Scope

The local site currently recreates:

- Probability Betting
- ETF Challenge

The MarketMakingGames index lists 8 games total. The remaining unbuilt games are:

- Market of Cards
- Make Me a Market
- Fermi Questions Challenge
- Fruit Market Game
- Next Card Betting
- Math Challenge

This report summarizes the public rules, scoring, examples, and strategy details from the game index and the individual game pages. It is written as an implementation brief for recreating each remaining game as another tab in the current static app.

## Shared Build Guidance

- Keep the existing tabbed app structure and add one tab per game.
- Each game should be fully playable in single-player practice mode. Where the source describes multiplayer, simulate counterparties/bots locally.
- Do not require login, rooms, websockets, or server state for the first recreation pass.
- Each game should have a live phase, a result/review phase, score state, and a short trade/answer history.
- During live play, do not reveal the true answer, fair value, or optimal action unless that is part of the original game loop.
- After each round or at final review, reveal enough analysis for the player to learn from mistakes.
- Prefer deterministic state objects per game rather than mixing every game into one large global state.
- Reuse common UI primitives: top status strip, game tabs, reset/start buttons, summary metrics, review drawer, tape/history list, and responsive panels.

## Source Inventory

| Game | Status | Source URL | Players | Duration | Difficulty |
| --- | --- | --- | --- | --- | --- |
| Probability Betting | Built | https://marketmakinggames.com/games/probability-betting | 1-30 | ~10 min | Medium |
| ETF Challenge | Built | https://marketmakinggames.com/games/etf-challenge | 1-20 | ~10 min | Hard |
| Market of Cards | Unbuilt | https://marketmakinggames.com/games/market-of-cards | 1-15 | ~15 min | Medium |
| Make Me a Market | Unbuilt | https://marketmakinggames.com/games/make-me-a-market | 1-30 | ~10 min | Medium |
| Fermi Questions Challenge | Unbuilt | https://marketmakinggames.com/games/fermi-questions | 1-50 | ~5 min | Easy |
| Fruit Market Game | Unbuilt | https://marketmakinggames.com/games/fruit-market-game | 1-30 | ~5 min | Easy |
| Next Card Betting | Unbuilt | https://marketmakinggames.com/games/next-card | 1-30 | ~5 min | Easy |
| Math Challenge | Unbuilt | https://marketmakinggames.com/games/math-challenge | 1-200 | ~6 min | Easy |

## Recommended Implementation Order

1. Math Challenge: simplest state model and scoring.
2. Fermi Questions Challenge: numeric input plus log-scale scoring.
3. Fruit Market Game: small live-trading engine with clear fair-value arithmetic.
4. Next Card Betting: deck state, probability calculation, Kelly sizing review.
5. Make Me a Market: quote/trade loop plus final position questions.
6. Market of Cards: richest simulation because of hidden information, turn order, quoting, response timing, card values, and P&L settlement.

## Game 1: Math Challenge

### Source Summary

Math Challenge is a timed mental-math competition. The player answers as many questions as possible before the countdown ends. Question modes include integers, decimals, fractions, and mixed mode. Answers can be multiple choice or typed. Correct answers score +1, wrong answers score -1. Final review shows score, speed stats, and per-question correctness.

### Rules And Phases

- Start: timer begins and one question appears.
- Answer: player submits an answer, receives the next question, and continues until time expires.
- Review: final score, speed stats, and a question-by-question review are shown.

### Scoring

- Correct answer: +1.
- Wrong answer: -1.
- Final score = correct answers - wrong answers.
- Speed metric = seconds per net score point.
- Full, decimals, and fractions leaderboard thresholds:
  - 3 points: <= 6.0 seconds per net score point.
  - 2 points: <= 6.75 seconds per net score point.
  - 1 point: <= 7.5 seconds per net score point.
- Integers leaderboard thresholds:
  - 3 points: <= 3.0 seconds per net score point.
  - 2 points: <= 3.5 seconds per net score point.
  - 1 point: <= 4.5 seconds per net score point.
- Open Challenge ranking: best score, then fewest attempts, then highest average score per attempt.
- Public page says single-player leaderboard durations are limited to 6, 7, or 8 minutes.

### Example Question Types

- Integer arithmetic: `47 + 86 = 133`.
- Fractions: `3/4 + 1/6 = 11/12`.
- Add generators for:
  - integer add/subtract/multiply/divide,
  - decimal add/subtract/multiply,
  - fraction add/subtract/simplify,
  - percent shortcuts,
  - mixed mode.

### UI Requirements

- Mode selector: integers, decimals, fractions, mixed.
- Duration selector: 6, 7, or 8 minutes for leaderboard-compatible mode; allow shorter practice mode for local testing.
- Large question display.
- Either multiple-choice buttons or a typed input. Build both if time permits.
- Score, correct count, wrong count, attempts, timer, and seconds per net score point.
- Review list with question, submitted answer, correct answer, and result.

### State Model

```js
{
  mode,
  durationSeconds,
  timeLeft,
  currentQuestion,
  score,
  correct,
  wrong,
  attempts,
  history: [
    { prompt, answer, choices, submitted, correct, elapsedMs }
  ]
}
```

### Acceptance Criteria

- Timer drives the test and locks input at zero.
- Correct answers increment net score; wrong answers decrement it.
- Review shows every answered question.
- Leaderboard points are computed from the correct threshold table.
- No layout overflow at mobile width.

## Game 2: Fermi Questions Challenge

### Source Summary

Fermi Questions Challenge asks players to estimate numeric answers. The core scoring is logarithmic: being off by a factor of 2 above or below is treated equally. Questions can be verifiable facts or back-of-the-envelope guesstimates.

### Rules And Phases

- Estimation: show one question and collect a numeric answer before the timer expires.
- Explanation: reveal correct answer, explanation, and comparison between estimates.
- Scoring: award points from logarithmic closeness.
- Final results: rank by total score after all rounds.

### Scoring

Use factor error:

```js
factor = max(estimate / answer, answer / estimate)
```

Recommended threshold table from the source:

| Accuracy | Points |
| --- | ---: |
| Within about 1.1x | 10 |
| Within about 1.3x | 8 |
| Within about 1.6x | 6 |
| Within about 2x | 4 |
| Within about 3x | 2 |
| Within 10x | 1 |
| More than 10x off | 0 |
| No answer | -2 |

Leaderboard points:

- Multiplayer: 1 point per player outranked, plus performance bonus of +3 for score >= 80, +2 for score >= 60, +1 for score >= 40.
- Single-player: 3 points for score >= 80, 2 for score >= 60, 1 for score >= 40, otherwise 0.

### Example Content To Seed

- Fact question: adult human body bones, answer 206.
- Guesstimate question: golf balls in a school bus, answer around 500,000.
- Scoring demo with correct answer 1,000 and estimates at 1.05x, 1.25x, 2x, 3x, 10x, and 50x.

Add at least 25 questions so the game does not feel repetitive. Store each as:

```js
{
  prompt,
  answer,
  type: "fact" | "guesstimate",
  explanation,
  hints: []
}
```

### UI Requirements

- Round number, timer, total score.
- Numeric answer input with submit button.
- Submitted status for simulated players/bots.
- Explanation panel after submission.
- Score badge showing factor error and points.
- Final leaderboard against simple bot estimates.

### Bot Approximation

For local single-player, create 4-8 bots. For each question:

- Generate bot estimates by multiplying the true answer by log-normal noise.
- Use tighter noise for stronger bots.
- Apply the same scoring table.

### Acceptance Criteria

- Overestimates and underestimates by the same factor score the same.
- No-answer timeout applies -2.
- Explanation phase reveals answer and calculation.
- Final ranking and performance bonus are visible.

## Game 3: Fruit Market Game

### Source Summary

Fruit Market is a beginner market-making game. Two bags contain apples and oranges. The true market value is:

```text
total apples across both bags x total oranges across both bags
```

The market quotes bid/ask around the true value. Buy is profitable if true value is above ask. Sell is profitable if true value is below bid.

### Rules And Phases

- Game start: both bags initialize with random apples and oranges, 3-8 of each.
- Trading period: player may buy or sell repeatedly while quotes are live.
- Market updates: every 15-20 seconds, each fruit count increases by 0-3. If a count exceeds max size, that bag resets to random 3-8.
- Market events: optional rule modifiers can alter value calculation.
- Final scoring: raw profit multiplied by First Click Accuracy.

### Value Rules

Base value:

```js
value = (bagA.apples + bagB.apples) * (bagA.oranges + bagB.oranges)
```

Trade P&L:

```js
buyPnl = value - ask
sellPnl = bid - value
```

No-trade zone:

```text
bid <= value <= ask
```

Event modifiers described by the source:

- Fruit inflation: a fruit count is doubled.
- Fruit deflation: a fruit count is halved, rounded up.
- Nullification: a specific fruit in one bag is treated as zero.
- Rounding: final value rounded to nearest 10.

### Scoring

- Raw profit accumulates from all trades.
- First Click Accuracy = percentage of first trades in each market period that were profitable.
- Final score = raw profit x First Click Accuracy.
- Multiplayer leaderboard: 1 point per player outranked plus +2 accuracy bonus at >=80%, +1 at >=60%.
- Single-player leaderboard: 2 points at >=80% first-click accuracy, 1 point at >=60%.

### UI Requirements

- Two bag panels showing apple/orange counts.
- Event banner when an event is active.
- Bid and ask quote panel.
- Buy and Sell buttons.
- Timer to next market update.
- Raw P&L, first-click accuracy, final score preview.
- Trade tape showing side, price, true value after reveal, and P&L.

### Implementation Notes

- Do not show the true value during the live trading period. The player must calculate it.
- Quotes should usually be close to fair value, sometimes buyable, sometimes sellable, sometimes no trade.
- Track first trade only once per market period for first-click accuracy.
- Allow repeated trades after the first click because the source says the player can trade as often as desired.

### State Model

```js
{
  timeLeft,
  nextUpdateIn,
  bags: {
    a: { apples, oranges },
    b: { apples, oranges }
  },
  event,
  bid,
  ask,
  rawProfit,
  periods: [
    { value, firstTradeProfitable: null | boolean, trades: [] }
  ]
}
```

### Acceptance Criteria

- Counts update every 15-20 seconds in live mode.
- Exceeding max size resets a bag to 3-8 values.
- Event modifiers visibly change the required arithmetic.
- Score uses first-click accuracy multiplier, not just raw P&L.

## Game 4: Next Card Betting

### Source Summary

Next Card Betting shows a reference card and asks the player to bet whether the next card will be higher or lower. The player sizes bets using Kelly criterion. The game supports configurable suit counts and ace high/low settings.

### Rules And Phases

- Card reveal: a reference card is shown.
- Betting: player chooses higher or lower and bet amount.
- Result: next card is drawn. Correct prediction wins bet amount, incorrect loses bet amount, equal rank pushes and returns the bet.
- Final scoring: decision quality plus sizing efficiency, with an opportunity participation adjustment and suit-count bonus.

### Card Values

- 2 = 2, 3-10 = face value.
- Jack = 11, Queen = 12, King = 13.
- Ace can be high at 14 or low at 1.
- Number of suits in play is configurable from 1 to 4.
- With 1 suit, one card exists per rank. With 4 suits, four cards exist per rank.

### Probability And Kelly

For each live decision, compute remaining deck counts:

```js
higherCount = remaining cards with rank value > current value
lowerCount = remaining cards with rank value < current value
equalCount = remaining cards with rank value === current value
```

If ties push, the Kelly fraction for an even-money higher/lower bet should account for push probability:

```js
pWin = chosenCount / remainingCount
pLose = oppositeCount / remainingCount
kelly = max(0, (pWin - pLose) / (pWin + pLose))
```

When there is no push probability, this simplifies to the source's examples:

```js
kelly = 2 * pWin - 1
```

Source examples:

- Current card 3 with ace high: higher is about 11/12, Kelly around 84%.
- Current card 7 with ace high: higher is about 7/12, Kelly around 16%.
- Late in a 1-suit game, card counting can turn a seemingly directional card into a 50/50.

### Scoring

- Skill score is based on:
  - decision quality, up to 3 points,
  - sizing efficiency, up to 7 points,
  - sizing efficiency scaled by opportunity participation rate,
  - cycle bonus by suit count: 1 suit +0, 2 suits +1, 3 suits +2, 4 suits +3.
- Multiplayer tiebreaker: final balance.
- Bankrupt players receive 0 leaderboard points.

### UI Requirements

- Current/reference card, next card hidden until reveal.
- Deck settings: suit count and ace high/low.
- Higher and Lower bet controls.
- Stake slider/number input.
- Bankroll and round/cycle status.
- Played-card history for card counting.
- Result reveal with correct probability, correct action, optimal Kelly stake, and player P&L.

### Implementation Notes

- During the betting phase, show only the reference card, visible deck history, and bankroll. Do not show calculated probabilities unless this game is explicitly framed as training mode.
- Add a review mode that explains the remaining higher/lower/equal counts after each result.
- The deck should draw without replacement.
- If the next card is equal, return the stake and score decision quality neutrally or based on whether the chosen side was +EV before the draw.

### Acceptance Criteria

- Suit count changes deck composition and probabilities.
- Ace high/low changes rank ordering.
- Equal rank returns stake.
- Kelly sizing review matches the remaining deck, not a fresh deck.

## Game 5: Make Me a Market

### Source Summary

Make Me a Market recreates the classic interview exercise where the player quotes bid/ask markets around an unknown numerical answer. A computer counterparty trades against exploitable quotes. In multiplayer, crossed quotes can trade against other players. After trading, the player answers technical questions about their own trade history and position.

### Rules And Phases

- Confidence interval: submit an initial wide bid/ask representing a 95% confidence interval. No spread restriction applies.
- Market making: submit tighter quotes within a configured spread constraint.
- Trading results: review buys, sells, position, and prior rounds.
- Final questions: answer position, maximum guaranteed loss, break-even, and P&L-at-price questions.

### Spread Rules

Configured spread modes:

| Mode | Rule |
| --- | --- |
| Fixed | closest nice number to about 1% of answer |
| 1% | max spread = bid x 0.01 |
| 5% | max spread = bid x 0.05 |
| 10% | max spread = bid x 0.10 |
| 15% | max spread = bid x 0.15 |
| 20% | max spread = bid x 0.20 |

Round 0 has no spread restriction. Spread enforcement begins after that. Fixed spreads use nice numbers like 0.1, 0.2, 0.5, 1, 2, 5, 10, 20, 50, 100, etc.

### Counterparty Trading Logic

Let `answer` be the true value.

```js
if (bid > answer) {
  // counterparty sells to the player at bid
  player buys 1 at bid
}

if (ask < answer) {
  // counterparty buys from the player at ask
  player sells 1 at ask
}
```

If bid <= answer <= ask, no trade occurs.

### Trade Accounting

Use standard position/cash accounting:

```js
position = buys - sells
cash = sellProceeds - buyCosts
pnlAtAnswer = cash + position * answer
pnlAtPrice(x) = cash + position * x
breakEven = position === 0 ? null : -cash / position
```

Maximum guaranteed loss is not fully specified by the public page. Implementation should define a clear domain, ideally the player's initial 95% confidence interval or a visible answer range. Then:

```js
maxLoss = min(pnlAtPrice(lowerBound), pnlAtPrice(upperBound))
```

If the implementation uses another domain, label it clearly in the final-question prompt.

### Scoring

The source scores final technical questions:

- Single-player:
  - 0.5 points per correct answer if trade history was visible.
  - 1 point per correct answer if trade history was hidden.
  - Up to 2 bonus points if the final market was close to the true answer.
- Multiplayer:
  - 1 point per correct answer if trade history was visible.
  - 2 points per correct answer if trade history was hidden.
  - Up to 3 bonus points for final-market closeness.
  - Plus 1 bonus point for each player outranked.

### Example To Seed

Question: number of UN member states. True answer: 193.

- Initial confidence interval: 50 / 300, no trade because answer is inside the market.
- Quote 100 / 110: ask is below 193, so counterparty buys from player at 110; player sells 1.
- Quote 200 / 210: bid is above 193, so counterparty sells to player at 200; player buys 1.

### UI Requirements

- Question prompt and answer hidden until end.
- Round number and spread constraint.
- Bid input, ask input, validation and submit.
- Result card after each quote: trade/no trade, bought/sold quantity, current position.
- Toggle: show/hide trade history. Hidden history should increase final-question scoring.
- Final quiz:
  - current position,
  - cash or average trade price if useful,
  - maximum guaranteed loss,
  - break-even price,
  - P&L at one or more specified prices.

### Bot / Multiplayer Approximation

- First pass can use only computer counterparty logic.
- Later pass can add simulated players whose quotes sometimes cross the user's quote.
- For crossed quotes, execute trades if one player's bid exceeds another's ask.

### Acceptance Criteria

- Spread validation matches selected rule.
- Counterparty trades only against exploitable quotes.
- Position, cash, break-even, and P&L questions are generated from actual trade history.
- Hidden-history mode changes scoring.

## Game 6: Market of Cards

### Source Summary

Market of Cards is an advanced hidden-information trading game. Players make bid/ask markets on the final value of a card table. Each player has two private cards. Center cards are revealed over time. Players quote, respond, trade, manage position, and settle all trades against the final total game value.

### Rules And Phases

- Ready phase: player gets 180 seconds to inspect their two-card hand and plan.
- Quoting phase: active player sets bid and ask.
- Response phase: other players simultaneously choose buy at ask, sell at bid, or pass. First reaction gets the trade, and no other responder trades with that maker.
- Round end: one center card is revealed, adding public information.
- Final scoring: after all center cards reveal, compute table value and settle all trades.

### Card Values

Number cards:

```text
2-10 = card number x 10
```

Face cards:

```text
red J/Q/K = +110 / +120 / +130
black J/Q/K = -110 / -120 / -130
```

Aces are configurable:

- Ace high: red aces +140, black aces -140.
- Ace low: all aces +10.

The source examples use an average unknown card value of roughly +40.

### Final Value

Final game value is the sum of:

- all revealed center cards,
- all player hand cards.

For `n` players with two cards each and `c` center cards:

```js
finalValue = sum(centerCards) + sum(allPlayerHands)
```

### Trade Accounting

Treat every trade as a contract on final game value:

```js
if player buys at price P:
  position += 1
  cash -= P

if player sells at price P:
  position -= 1
  cash += P

finalPnl = cash + position * finalValue
```

For trades where the player is market maker:

- responder buys from player's ask, so player sells at ask.
- responder sells into player's bid, so player buys at bid.

### Information And Expected Value

The player should estimate value from:

- their private cards,
- revealed center cards,
- remaining unknown card distribution,
- opponent quotes and trade decisions.

Source examples to encode in review/tutorial cards:

- With 4 players and 3 center cards, total cards in play are 11.
- If player hand is 8 hearts (+80) and queen spades (-120), hand total is -40.
- Unknown cards are estimated around +40 each.
- A revealed 9 diamonds is +90, which raises expected value by about 50 versus a +40 unknown-card baseline.
- High private cards justify higher estimates but large long positions should be managed because negative black face cards can still appear.

### Scoring

- Highest final P&L wins.
- Global leaderboard points: 2 per bot outranked and 3 per real player outranked.

### UI Requirements

- Center-card row with unrevealed cards face down and revealed cards face up.
- Player hand visible; bot hands hidden until final reveal.
- Player table with each participant's position/P&L status.
- Active player marker.
- Quote panel when it is the user's turn: bid and ask inputs.
- Response panel when another player quotes: buy, sell, pass buttons.
- Timer for quote and response phases.
- Trade tape with maker, taker, side, price, and resulting user position.
- Final reveal with all hands, final value, and P&L.

### Bot Model

For local recreation, simulate 3-5 bots.

Each bot should estimate fair value from:

```js
knownCenterValue
+ ownHandValue
+ expectedValueOfUnknownCards
```

Then add personality:

- tight bot: narrow spreads and low noise,
- wide bot: wider spreads,
- aggressive bot: more likely to trade near fair,
- inventory-aware bot: skews quotes based on position.

For response decisions:

```js
buy if botFairValue > ask + threshold
sell if botFairValue < bid - threshold
pass otherwise
```

For "first responder" behavior, assign each interested bot a reaction time and execute the fastest.

### Implementation Ambiguities

The public page does not expose exact multiplayer timing, number of center cards for every room configuration, bot valuation noise, or exact spread limits. Use the page examples as defaults:

- 4-player practice table.
- 3 center cards.
- 2 private cards per player.
- 180-second ready phase can be shortened in local practice with a setting.

### Acceptance Criteria

- Card values match the value table, including red/black face cards and ace setting.
- Final value includes center cards and all player hands.
- Quote/response trade direction updates cash and position correctly.
- Only first responder trades with the maker.
- Final P&L equals cash plus position times final value.

## Cross-Game Engineering Checklist

- Add a central game registry:

```js
const GAMES = {
  probability: { title, init, render, stop },
  etf: { title, init, render, stop },
  math: { title, init, render, stop },
  fermi: { title, init, render, stop },
  fruit: { title, init, render, stop },
  nextCard: { title, init, render, stop },
  makeMarket: { title, init, render, stop },
  cardsMarket: { title, init, render, stop },
};
```

- Stop any active timer when switching tabs.
- Keep each game's state isolated.
- Add common formatting helpers for money, signed P&L, percentages, timers, card rendering, and review rows.
- Add smoke tests by loading the page and switching through every tab.
- Add one deterministic seeded path per game for manual QA.

## Source Links

- Games index: https://marketmakinggames.com/games
- Market of Cards: https://marketmakinggames.com/games/market-of-cards
- Make Me a Market: https://marketmakinggames.com/games/make-me-a-market
- Fermi Questions Challenge: https://marketmakinggames.com/games/fermi-questions
- Fruit Market Game: https://marketmakinggames.com/games/fruit-market-game
- Next Card Betting: https://marketmakinggames.com/games/next-card
- Math Challenge: https://marketmakinggames.com/games/math-challenge
