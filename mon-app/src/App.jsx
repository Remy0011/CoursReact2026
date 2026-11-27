import Pokemon from './components/TP2/Pokemon/Pokemon';
import TicTacToe from './components/TP3/TicTacToe';
import './App.css';

const pokemonNames = ['pikachu', 'bulbasaur', 'charmander', 'squirtle'];

export default function App() {
  return (
    <main className="page-shell">
      <header className="page-heading">
        <span className="eyebrow">POKOPIA · POKÉDEX</span>
        <div className="heading-content">
          <h1>Pokémon</h1>
          <TicTacToe />
        </div>
      </header>
      <ul className="pokemon-list">
        {pokemonNames.map((name) => <li key={name}><Pokemon name={name} /></li>)}
      </ul>
      <footer className="page-footer">Données fournies par <a href="https://pokopiapi.com" target="_blank" rel="noreferrer">PokopiaAPI</a></footer>
    </main>
  );
}
