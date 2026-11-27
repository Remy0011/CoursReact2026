export default function StatutMorpion({ winner, isDraw, nextMark, onReset }) {
  const message = winner
    ? `Le Joueur ${winner === 'vert' ? 'Vert' : 'Rouge'} a gagné !`
    : isDraw
      ? 'Match nul !'
      : `Au tour du Joueur ${nextMark === 'vert' ? 'Vert' : 'Rouge'}`;

  return (
    <div className="morpion-heading">
      <span className="morpion-status" aria-live="polite">{message}</span>
      <button className="morpion-reset" type="button" onClick={onReset}>Rejouer</button>
    </div>
  );
}
