const EMOJIS = {
  rock: '\u270A',
  paper: '\u270B',
  scissors: '\u270C\uFE0F',
}

const LABELS = {
  rock: 'Rock',
  paper: 'Paper',
  scissors: 'Scissors',
}

export default function ChoiceButton({ choice, onClick, disabled }) {
  return (
    <button
      className="choice-btn"
      onClick={() => onClick(choice)}
      disabled={disabled}
    >
      <span className="choice-emoji">{EMOJIS[choice]}</span>
      <span className="choice-label">{LABELS[choice]}</span>
    </button>
  )
}
