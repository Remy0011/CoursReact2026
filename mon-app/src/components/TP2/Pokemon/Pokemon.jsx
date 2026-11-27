import { useEffect, useState } from "react";
import { getPokemon } from "../../../services/API";

export default function Pokemon({ name }) {
    const [pokemon, setPokemon] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const [isOn, setIsOn] = useState(true);

    useEffect(() => {
        let active = true;
        getPokemon(name)
            .then((data) => {
                if (!active) return;
                if (!data) throw new Error(`Aucun Pokémon trouvé pour « ${name} ».`);
                setPokemon(data);
            })
            .catch((err) => { if (active) setError(err.message || "Erreur de chargement."); })
            .finally(() => { if (active) setLoading(false); });
        return () => { active = false; };
    }, [name]);

    if (loading) return <article className="pokemon-row status-card">Chargement de {name}…</article>;
    if (error) return <article className="pokemon-row error-card">{error}</article>;

    return (
        <article className={`pokemon-row ${isOn ? "is-on" : "is-off"}`}>
            {pokemon.imageUrl && <img className="pokemon-image" src={pokemon.imageUrl} alt={pokemon.name} />}
            <div className="pokemon-summary">
                <h2>{pokemon.name}</h2>
                <span>{pokemon.types?.map((type) => type.name).join(" · ")}</span>
            </div>
            <div className="pokemon-details" hidden={!isOn}>
                {pokemon.classification && <span>{pokemon.classification}</span>}
                {pokemon.idealEnvironment && <span>Environnement : {pokemon.idealEnvironment}</span>}
                {pokemon.specialties?.length > 0 && <span>Spécialités : {pokemon.specialties.map((item) => item.name).join(", ")}</span>}
            </div>
            <button
                className={`ditto-toggle ${isOn ? "is-green" : "is-red"}`}
                type="button"
                aria-label={`Métamorphe ${isOn ? "ON" : "OFF"} pour ${pokemon.name}`}
                aria-pressed={isOn}
                onClick={() => setIsOn((current) => !current)}
            >
                <svg viewBox="0 0 48 48" aria-hidden="true">
                    <rect className="ditto-face" x="5" y="5" width="38" height="38" rx="8" />
                    <circle className="ditto-eye" cx="17" cy="21" r="2" />
                    <circle className="ditto-eye" cx="31" cy="21" r="2" />
                    <path className="ditto-mouth" d="M17 29c4 5 10 5 14 0" />
                </svg>
                <span>{isOn ? "ON" : "OFF"}</span>
            </button>
        </article>
    );
}
