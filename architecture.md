# Architecture — Rock Paper Scissors

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Build | Vite 6 |
| UI | React 18 |
| Styling | Plain CSS |
| Language | JavaScript (ES Modules) |

No backend, no router, no state management library — the scope is small enough that `useState` in a single parent component suffices.

---

## Project Structure

```
src/
├── components/
│   ├── App.jsx           # Root wrapper
│   ├── Game.jsx          # Stateful game controller
│   ├── ChoiceButton.jsx  # Presentational: one choice button
│   ├── ScoreBoard.jsx    # Presentational: scores + round count
│   └── ResultDisplay.jsx # Presentational: round/game outcome
├── utils/
│   └── gameLogic.js      # Pure functions: getComputerChoice, determineWinner
├── styles/
│   └── App.css           # All styles
└── main.jsx              # ReactDOM entry
```

---

## Component Tree & Data Flow

```
App
 └── Game                          ← All state owned here
      ├── ScoreBoard              ← props: { playerScore, computerScore, rounds }
      ├── ChoiceButton ×3         ← props: { choice, onClick, disabled }
      └── ResultDisplay           ← props: { playerChoice, computerChoice, result, gameOver, winner, onReset }
```

### State (all in `Game.jsx` via `useState`)

| State | Type | Purpose |
|-------|------|---------|
| `playerChoice` | `string|null` | Current round player pick |
| `computerChoice` | `string|null` | Current round computer pick |
| `playerScore` | `number` | Player's total wins |
| `computerScore` | `number` | Computer's total wins |
| `result` | `string|null` | `"win"` / `"lose"` / `"draw"` |
| `round` | `number` | Round counter (informational) |

### Derived values

- `gameOver` = `playerScore >= 3 || computerScore >= 3`
- `winner` = `"player"` or `"computer"`

### Flow

1. Player clicks `ChoiceButton` → `Game.handleChoice(choice)` fires.
2. `getComputerChoice()` returns a random option.
3. `determineWinner(player, computer)` returns `"win" | "lose" | "draw"`.
4. State updates trigger re-render of `ScoreBoard` and `ResultDisplay`.
5. When one side reaches 3 wins, `gameOver` becomes true; buttons disable and `ResultDisplay` shows final result + "Play Again".
6. "Play Again" calls `handleReset()` which clears all state back to zero.

---

## Game Logic (`utils/gameLogic.js`)

```
getComputerChoice()  →  "rock" | "paper" | "scissors"
determineWinner(p, c) →  "win"  | "lose"  | "draw"
```

- `determineWinner` uses a simple lookup: rock > scissors, scissors > paper, paper > rock.
- Both functions are pure (no side effects, deterministic output for given input).

---

## Styling Approach

- Single `App.css` file with a class-based naming convention.
- Dark gradient background with glass-morphism card effect.
- Color feedback: green for win, red for lose, yellow for draw.
- Responsive layout via max-width container and flexible buttons.

---

## Build & Run

```bash
npm install
npm run dev      # development server
npm run build    # production build → dist/
```
