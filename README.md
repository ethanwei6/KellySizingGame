# Market Making Practice

A self-contained browser practice site modeled on the public Market Making Games descriptions for Probability Betting and ETF Trading Challenge.

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

### Probability Betting

- Each round shows three columns: two dice, two cards, and three coins.
- Each column has two posted markets with only the given payout odds visible before submission.
- Posted odds are close to fair value: some are subtly too high, some subtly too low, and some fair.
- The player chooses which markets to pass or stake.
- After submission, the dice roll, the cards are drawn, and the coins flip.
- Results reveal P&L, the correct bet/pass action, and the correct Kelly-sized stake.
- Final scoring is strictly based on entering the correct markets and sizing them correctly.

### ETF Challenge

- Live stock and ETF quotes update tick by tick, with price moves flashing green or red.
- Each ETF is made from a basket of two to four stocks.
- The player looks for ETF arbitrage using only the visible bid/ask quotes and basket composition.
- Buy ETF is correct when the stock bid sum is greater than the ETF ask.
- Sell ETF is correct when the ETF bid is greater than the stock ask sum.
- Trades add or subtract realized P&L, then constituent stock prices reset to reduce the arbitrage while ETF prices keep trending.
- The score rewards total P&L and profitable-trade accuracy.

## Source Basis

The implementation follows the public page mechanics:

- Probability Betting: betting phase, results reveal, game end score breakdown, review phase, Kelly criterion sizing, and dice/card/coin probability events.
- ETF Challenge: setup quotes, live price updates, bid/ask basket arbitrage rules, Buy ETF / Sell ETF execution, post-trade price reset behavior, and P&L plus accuracy scoring.
