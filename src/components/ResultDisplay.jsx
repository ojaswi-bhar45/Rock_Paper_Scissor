const EMOJIS = {
  rock: '\u270A',
  paper: '\u270B',
  scissors: '\u270C\uFE0F',
}

const MESSAGES = {
  win: 'You win this round!',
  lose: 'Computer wins this round!',
  draw: "It's a draw!",
}

export default function ResultDisplay({ playerChoice, computerChoice, result, gameOver, winner, onReset }) {
  if (!playerChoice && !computerChoice && !result) {
    return <div className="result-display"><p className="result-placeholder">Make your move!</p></div>
  }

  if (gameOver) {
    return (
      <div className="result-display game-over">
        <h2 className="final-result">
          {winner === 'player' ? 'You won the game!' : 'Computer won the game!'}
        </h2>
        <button className="reset-btn" onClick={onReset}>Play Again</button>
      </div>
    )
  }

  return (
    <div className={`result-display result-${result}`}>
      <div className="result-choices">
        <span>{EMOJIS[playerChoice]}</span>
        <span className="result-vs">vs</span>
        <span>{EMOJIS[computerChoice]}</span>
      </div>
      <p className="result-message">{MESSAGES[result]}</p>
    </div>
  )
}
