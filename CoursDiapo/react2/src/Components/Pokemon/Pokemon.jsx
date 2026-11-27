import { Stats } from './Stats/Stats';

import styles from './Pokemon.module.css';
import { useState } from 'react';

export function Pokemon({ pokemon }) {
  const [showStats, setShowStats] = useState(false);

  if (!pokemon) return null;

  const {
    name,
    sprites,
    types,
    category,
    height,
    weight,
    stats
  } = pokemon;

  return (

    <div className={styles['pokemon-card']}>
      <div className={styles['pokemon-name']}>
        {name?.fr ?? "Nom inconnu"}
      </div>

      {sprites?.regular && (
        <img
          src={sprites.regular}
          className={styles['pokemon-image']}
          alt={sprites.name}
        />
      )}

      {category && (
        <div className={styles['pokemon-category']}>
          {category}
        </div>
      )}

      {types?.length > 0 && (
        <div className={styles['pokemon-types']}>
          {types.map((type, i) => (
            <span key={i} className={styles['pokemon-type']}>
              {type.image && (
                <img
                  src={type.image}
                  title={type.name}
                  alt={type.name}
                />
              )}
              {type.name}
            </span>
          ))}
        </div>
      )}

      {(height || weight) && (
        <div className={styles['pokemon-info']}>
          {height && <p><strong>Taille :</strong> {height}</p>}
          {weight && <p><strong>Poids :</strong> {weight}</p>}
        </div>
      )}

      {stats && (
        <div className={styles['toggle-stats']}>
          <div onClick={() => setShowStats(true)}>Stats <span>»</span></div>
          {
            showStats && (
              <div className={styles['pokemon-stats']}>
                <Stats stats={stats} closeStats={() => setShowStats(false)} />
              </div>
            )
          }
        </div>
      )}
    </div>
  );
}
