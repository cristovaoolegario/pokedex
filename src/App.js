import React, { useState } from "react";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import { getPokemonByIdOrName } from "./services/pokeApi";

const App = () => {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [typedPokemon, setTypedPokemon] = useState("");

  function handleChange(event) {
    setTypedPokemon(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!typedPokemon) {
      return;
    }
    setIsLoading(true);

    let pokemon = await getPokemonByIdOrName(typedPokemon);

    if (typeof pokemon === "string") {
      setError(pokemon);
      setPokemon(null);
    } else {
      setPokemon(pokemon);
      setError(null);
    }
    setIsLoading(false);
  }

  return (
    <div>
      <h1>Bem vindo à pokedex!</h1>
      <p>Digite o nome ou a ID do pokemon!</p>
      <form onSubmit={handleSubmit}>
        <input
          value={typedPokemon}
          placeholder={"Nome ou ID do pokemon"}
          onChange={handleChange}
        ></input>
        <button type="submit">
          {isLoading ? <>Carregando....</> : <>Buscar</>}
        </button>
      </form>
      {error && <span>{error}</span>}
      {pokemon && <PokemonCard pokemon={pokemon} />}
    </div>
  );
};

export default App;
