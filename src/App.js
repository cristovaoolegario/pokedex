import React, { useEffect, useState } from "react";
import { getPokemonByIdOrName } from "./services/pokeApi";

const App = () => {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [typedPokemon, setTypedPokemon] = useState("");

  useEffect(async () => {
    await changeStates();
  }, [error]);

  function handleChange(event) {
    setTypedPokemon(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    changeStates();
  }

  async function changeStates() {
    if (!typedPokemon) {
      return;
    }

    let pokemon = await getPokemonByIdOrName(typedPokemon);

    if (typeof pokemon === "string") {
      setError(pokemon);
      setPokemon(null);
    } else {
      setPokemon(pokemon);
      setError(null);
    }
  }

  function renderPokemonCard(pokemon) {
    return (
      <div key={pokemon.id}>
        <>
          <div>
            <h2>{pokemon.name}</h2>
            <img
              src={
                pokemon.sprites.versions["generation-v"]["black-white"].animated
                  .front_default
              }
              alt={pokemon.name}
            />
          </div>
          <div>
            <span>
              <strong>Height</strong>: {pokemon.height * 10} cm
            </span>
            <span>
              <strong>Weight</strong>: {pokemon.weight / 10} kg
            </span>
            <span>
              <strong>Type</strong>: {pokemon.types[0].type.name}
            </span>
            <span>
              <strong>id</strong>: {pokemon.id}
            </span>
          </div>
        </>
      </div>
    );
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
        <button type="submit">Buscar</button>
      </form>
      {error && <span>{error}</span>}
      {pokemon && renderPokemonCard(pokemon)}
    </div>
  );
};

export default App;
