const CHOICES = ['rock', 'paper', 'scissors']

export function getComputerChoice() {
  const index = Math.floor(Math.random() * CHOICES.length)
  return CHOICES[index]
}

export function determineWinner(player, computer) {
  if (player === computer) return 'draw'
  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    return 'win'
  }
  return 'lose'
}
