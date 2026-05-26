import { useState, useCallback } from 'react'
import { getComputerChoice, determineWinner } from '../utils/gameLogic'
import ChoiceButton from './ChoiceButton'
import ScoreBoard from './ScoreBoard'
import ResultDisplay from './ResultDisplay'

const CHOICES = ['rock', 'paper', 'scissors']
const WIN_SCORE = 3

export default function Game() {
  const [playerChoice, setPlayerChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)
  const [playerScore, setPlayerScore] = useState(0)
  const [computerScore, setComputerScore] = useState(0)
  const [result, setResult] = useState(null)
  const [round, setRound] = useState(0)

  const gameOver = playerScore >= WIN_SCORE || computerScore >= WIN_SCORE
  const winner = playerScore >= WIN_SCORE ? 'player' : 'computer'

  const handleChoice = useCallback((choice) => {
    const compChoice = getComputerChoice()
    const roundResult = determineWinner(choice, compChoice)

    setPlayerChoice(choice)
    setComputerChoice(compChoice)
    setResult(roundResult)
    setRound((prev) => prev + 1)

    if (roundResult === 'win') {
      setPlayerScore((prev) => prev + 1)
    } else if (roundResult === 'lose') {
      setComputerScore((prev) => prev + 1)
    }
  }, [])

  const handleReset = useCallback(() => {
    setPlayerChoice(null)
    setComputerChoice(null)
    setPlayerScore(0)
    setComputerScore(0)
    setResult(null)
    setRound(0)
  }, [])

  return (
    <div className="game">
      <h1 className="title">Rock Paper Scissors</h1>
      <ScoreBoard
        playerScore={playerScore}
        computerScore={computerScore}
        rounds={round}
      />
      <div className="choices">
        {CHOICES.map((choice) => (
          <ChoiceButton
            key={choice}
            choice={choice}
            onClick={handleChoice}
            disabled={gameOver}
          />
        ))}
      </div>
      <ResultDisplay
        playerChoice={playerChoice}
        computerChoice={computerChoice}
        result={result}
        gameOver={gameOver}
        winner={winner}
        onReset={handleReset}
      />
    </div>
  )
}
