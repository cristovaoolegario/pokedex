import axios from "axios";

const baseURL ='https://pokeapi.co/api/v2';

async function getPokemonByIdOrName(typedPokemon) {
    return await axios.get(`${baseURL}/pokemon/${typedPokemon}`)
                        .then(response => response.data)
                        .catch(_ => 'Pokemon não encontrado')
}

export { getPokemonByIdOrName };