# Probability Betting

A self-contained browser game modeled on the public Probability Betting description from Market Making Games.

## Run

Open `index.html` directly in a browser, or serve the folder locally:

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Then visit:

```text
http://127.0.0.1:8765/
```

## Game Loop

- Each round generates five coin, dice, and card betting markets.
- Offered odds are quoted above, below, or near fair value.
- The player chooses which markets to pass or stake.
- Results reveal outcomes, fair odds, edge, Kelly stake, and P&L.
- Final scoring combines decision quality, Kelly sizing efficiency, arbitrage bonus, and the round-count bonus.

## Source Basis

The implementation follows the public page mechanics: betting phase, results reveal, game end score breakdown, review phase, Kelly criterion sizing, dice/card/coin probability events, and arbitrage bonus behavior.
