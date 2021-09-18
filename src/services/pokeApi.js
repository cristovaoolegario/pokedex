import axios from "axios";

const baseURL = "https://pokeapi.co/api/v2";

async function getPokemonByIdOrName(typedPokemon) {
  try {
    let response = await axios.get(`${baseURL}/pokemon/${typedPokemon}`);
    return response.data;
  } catch (error) {
    return "Pokémon não encontrado";
  }
}

export { getPokemonByIdOrName };
