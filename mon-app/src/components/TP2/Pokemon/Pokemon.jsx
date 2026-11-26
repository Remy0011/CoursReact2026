import {useEffect, useState} from "react";
import {getPokemon} from "../../../services/API";

export default function Pokemon({name}) {
    const [pokemon, setPokemon] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const data = await getPokemon(name);
                setPokemon(data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchPokemon();
    }, [name]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>{pokemon.name}</h2>
        </div>
    );
}