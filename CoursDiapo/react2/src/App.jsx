import { useState, useEffect } from "react";
import { Pokemon } from "./Components";
import { pokemonService } from "./services";

import styles from './App.module.css';

function App() {
  const [pokelist, setPokelist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const callApi = async () => {
    setLoading(true);
    setError(null);
    try {
      const pokemons = await pokemonService.getAll();
      setPokelist(pokemons);
    } catch (err) {
      console.error(err);
      setError("Impossible de charger les Pokémon. L'API est peut-être indisponible.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  const renderContent = () => {
    if (loading) return 'Chargement...';

    if (error) {
      return (
        <div className={styles.error}>
          <p>{error}</p>
          <button onClick={callApi}>Réessayer</button>
        </div>
      );
    }

    return pokelist.map(p => <Pokemon key={p.pokedex_id} pokemon={p} />);
  };

  return (
    <>
      <h1>Pokédex</h1>
      <p>Collectionne les tous !</p>

      <div className={styles['pokedex-container']}>
        {renderContent()}
      </div>
    </>
  );
}

export default App;
