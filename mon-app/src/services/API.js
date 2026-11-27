const BASE_URL = "https://pokopiapi.com/api/v1/pokemon";

export async function getPokemon(name) {
    const response = await fetch(`${BASE_URL}/${encodeURIComponent(name)}?lang=en`);
    if (response.status === 404) return null;
    if (!response.ok) throw new Error("Impossible de récupérer les données du Pokédex.");
    return response.json();
}
