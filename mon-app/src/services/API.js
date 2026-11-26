const BASE_URL= "https://pokopiapi.com/docs/json";

export async function getPokemon(name) {
    const url = BASE_URL.replace(':name', name);
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
}