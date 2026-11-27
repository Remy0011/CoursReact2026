import Pokemon from './components/TP2/Pokemon/Pokemon';
import './App.css';

const pokemonNames = ['pikachu', 'bulbasaur', 'charmander', 'squirtle'];

export default function App() {
  return (
    <main className="page-shell">
      <header className="page-heading">
        <span className="eyebrow">POKOPIA · POKÉDEX</span>
        <h1>Pokémon</h1>
      </header>
      <ul className="pokemon-list">
        {pokemonNames.map((name) => <li key={name}><Pokemon name={name} /></li>)}
      </ul>
      <footer className="page-footer">Données fournies par <a href="https://pokopiapi.com" target="_blank" rel="noreferrer">PokopiaAPI</a></footer>
    </main>
  );
}
