export default function ScoreBoard({ playerScore, computerScore, rounds }) {
  return (
    <div className="scoreboard">
      <div className="score-item">
        <span className="score-label">You</span>
        <span className="score-value">{playerScore}</span>
      </div>
      <div className="score-divider">:</div>
      <div className="score-item">
        <span className="score-label">Computer</span>
        <span className="score-value">{computerScore}</span>
      </div>
      <div className="round-counter">Round {rounds}</div>
    </div>
  )
}
