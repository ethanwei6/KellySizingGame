# Market Making Practice

A self-contained browser practice site modeled on the public Market Making Games descriptions.

## Run

Open `index.html` directly in a browser, or serve the folder locally:

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Then visit:

```text
http://127.0.0.1:8765/
```

## Games

Use the tabs at the top of the page to switch between games.

### Odds Calibration Lab

- Each round shows three columns: two dice, two cards, and three coins.
- Each column has two posted markets with only the given payout odds visible before submission.
- Posted odds are close to fair value: some are subtly too high, some subtly too low, and some fair.
- The player chooses which markets to pass or stake.
- After submission, the dice roll, the cards are drawn, and the coins flip.
- Results reveal P&L, the correct bet/pass action, and the correct Kelly-sized stake.
- Final scoring is strictly based on entering the correct markets and sizing them correctly.

### Basket Arbitrage Drill

- Live stock and ETF quotes update tick by tick, with price moves flashing green or red.
- Each ETF is made from a basket of two to four stocks.
- The player looks for ETF arbitrage using only the visible bid/ask quotes and basket composition.
- Buy ETF is correct when the stock bid sum is greater than the ETF ask.
- Sell ETF is correct when the ETF bid is greater than the stock ask sum.
- Trades add or subtract realized P&L, then constituent stock prices reset to reduce the arbitrage while ETF prices keep trending.
- The score rewards total P&L and profitable-trade accuracy.

### Sequence Recall Sprint

- The target sequence appears first for a short preview period, then remains visible while answer choices appear.
- The solve window and preview window adapt by streak: correct streaks tighten timing, repeated misses ease it back.
- Feedback is withheld until the session ends.
- Hard mode emphasizes visually confusable characters such as `Q/O`, `N/M`, and `S/5`.

### Tower Transfer Sprint

- Three poles hold a shuffled legal block puzzle.
- The player moves all blocks to the third pole without placing a larger block on a smaller block.
- Puzzles become harder through adaptive progression.
- Scoring rewards solving close to the shortest path and moving quickly.

### Produce Quote Drill

- Two visible bags contain apples and oranges.
- True value is total apples times total oranges, adjusted by optional market events.
- Players buy when value is above ask and sell when value is below bid.
- Final score is raw P&L multiplied by first-click accuracy.

### Card Edge Trainer

- A reference card is shown and the next card stays face down until betting resolves.
- The player chooses higher or lower and sizes the stake from bankroll.
- Suit count and ace high/low settings change the deck and probabilities.
- Post-round review reveals higher/lower/equal counts and Kelly stake.

### Quote Range Trainer

- The player quotes bid/ask spreads around an unknown estimation answer.
- The computer trades against exploitable quotes.
- Position and cash are tracked through the quote loop.
- Final quiz questions are generated from the actual trade history.

### Card Market Simulator

- The player sees a private two-card hand while bot hands and center cards begin hidden.
- Card values follow the source rules: number cards x10, red face cards positive, black face cards negative, configurable aces.
- Players quote or respond to bot quotes, then center cards reveal over rounds.
- Final P&L settles as cash plus position times the final total card value.

## Source Basis

The implementation follows the public page mechanics:

- Odds Calibration Lab: betting phase, results reveal, game end score breakdown, review phase, Kelly criterion sizing, and dice/card/coin probability events.
- Basket Arbitrage Drill: setup quotes, live price updates, bid/ask basket arbitrage rules, Buy ETF / Sell ETF execution, post-trade price reset behavior, and P&L plus accuracy scoring.
- Sequence Recall Sprint: adaptive preview timing, adaptive solve timing, stacked near-match options, and final-only feedback.
- Tower Transfer Sprint: three-pole transfer puzzle, legal move validation, drag/click movement, shortest-path comparison, and adaptive difficulty.
- Produce Quote Drill: bag value calculation, market updates, event modifiers, buy/sell P&L, and first-click accuracy multiplier.
- Card Edge Trainer: card reveal, higher/lower settlement, equal-card push, configurable suits/aces, and Kelly review.
- Quote Range Trainer: confidence interval, spread-constrained quoting, counterparty trades, position accounting, and final technical questions.
- Card Market Simulator: hidden hands, center-card reveals, bid/ask quote-response loop, card value table, and final settlement.
