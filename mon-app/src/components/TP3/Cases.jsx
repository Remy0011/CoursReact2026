function Case({ mark, index, disabled, onPlay }) {
  const colorClass = mark === 'vert' ? 'is-green' : mark === 'rouge' ? 'is-red' : '';
  const playerName = mark === 'vert' ? 'Joueur Vert' : mark === 'rouge' ? 'Joueur Rouge' : null;

  return (
    <button
      className={`morpion-cell ${colorClass}`}
      type="button"
      role="gridcell"
      aria-label={`Case ${index + 1}${playerName ? ` : ${playerName}` : ', vide'}`}
      disabled={disabled || Boolean(mark)}
      onClick={() => onPlay(index)}
    >
      {mark && (
        <svg className="morpion-face" viewBox="0 0 48 48" aria-hidden="true">
          <rect className="morpion-face-border" x="4" y="4" width="40" height="40" rx="9" />
          <circle className="morpion-eye" cx="17" cy="19" r="2" />
          <circle className="morpion-eye" cx="31" cy="19" r="2" />
          <path className="morpion-mouth" d="M17 28c4 5 10 5 14 0" />
        </svg>
      )}
    </button>
  );
}

export default function Cases({ board, disabled, onPlay }) {
  return (
    <div className="morpion-board" role="grid" aria-label="Plateau de morpion">
      {board.map((mark, index) => (
        <Case
          key={index}
          mark={mark}
          index={index}
          disabled={disabled}
          onPlay={onPlay}
        />
      ))}
    </div>
  );
}
