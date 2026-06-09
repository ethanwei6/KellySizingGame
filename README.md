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

- Each round shows three columns: two dice, two cards, and three coins.
- Each column has two posted markets with only the given payout odds visible before submission.
- Posted odds are close to fair value: some are subtly too high, some subtly too low, and some fair.
- The player chooses which markets to pass or stake.
- After submission, the dice roll, the cards are drawn, and the coins flip.
- Results reveal P&L, the correct bet/pass action, and the correct Kelly-sized stake.
- Final scoring is strictly based on entering the correct markets and sizing them correctly.

## Source Basis

The implementation follows the public page mechanics: betting phase, results reveal, game end score breakdown, review phase, Kelly criterion sizing, and dice/card/coin probability events.
