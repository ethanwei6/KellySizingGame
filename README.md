# Trading Interview Practice

A self-contained browser practice site for probability, quoting, arbitrage, memory, and puzzle drills.

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

- Compare posted payouts against your own probability estimates for dice, card, and coin events.
- Odds are intentionally near fair value, so the good and bad offers require calculation.
- Enter a stake only when the offered payout clears your fair-price threshold.
- After you submit, outcomes resolve and the review grades both selection quality and stake sizing.

### Basket Arbitrage Drill

- Watch constituent quotes and synthetic basket products move through a short live session.
- Use the displayed bid/ask prices to decide when the package can be bought cheaply or sold richly.
- A buy is attractive when selling the legs would more than cover the product's ask.
- A sell is attractive when the product's bid is richer than buying the legs.
- Score combines realized P&L with how consistently you traded true dislocations.

### Sequence Recall Sprint

- Read the target string during a brief preview, then pick the exact match from near-miss choices.
- The preview and answer windows shrink after strong streaks and ease back after repeated errors.
- Results are hidden until the final round to keep the session focused on speed and attention.
- Hard mode leans on visually similar characters such as `Q/O`, `N/M`, and `S/5`.

### Tower Transfer Sprint

- Transfer the stack to the goal pole using legal top-block moves.
- A move is allowed only when the block lands on an empty pole or a larger block.
- Adaptive mode raises the block count when you solve efficiently.
- The grade rewards short paths and fast completion.

### Produce Quote Drill

- Two visible inventory bags determine a hidden product value.
- Optional events can change the value after the base count is formed.
- Buy quotes that sit below your estimate and sell quotes that sit above it.
- Final score blends raw P&L with first-decision accuracy.

### Card Edge Trainer

- Use the visible card and remaining deck composition to choose a side.
- Pick whether the next card should rank above or below the reference, then size the bet.
- Deck settings change both the count of cards and the value of aces.
- The review shows the remaining-card counts and the sizing benchmark.

### Quote Range Trainer

- Quote a two-sided range around an unknown numeric answer.
- The simulated counterparty trades when your market is too aggressive.
- Position and cash update after each quoted range.
- End-of-round questions test what happened in your own trade history.

### Card Market Simulator

- Trade a hidden-value card table using your private hand and partial public reveals.
- Number cards count by tens; face-card signs depend on color; ace handling is configurable.
- You alternate between quoting a market and responding to simulated quotes.
- Final P&L is cash plus inventory marked to the completed card total.

## Implementation Notes

- The app is static HTML, CSS, and JavaScript with no external game art.
- Dice, cards, coins, towers, tables, and quote panels are generated with local markup and CSS.
- The games are written as independent training drills with original names and interface copy.
