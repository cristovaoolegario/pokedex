import React, { useState } from "react";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import { getPokemonByIdOrName } from "./services/pokeApi";
import "./App.css";
import pokeball from "./assets/pokeball.svg";

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
    <div className="App">
      <h1 className="Welcome">Bem vindo à pokedex!</h1>
      <p className="Instructions">Digite o nome ou a ID do pokemon!</p>
      <form className="Form" onSubmit={handleSubmit}>
        <input
          className="Input"
          value={typedPokemon}
          placeholder={"Nome ou ID do pokemon"}
          onChange={handleChange}
        ></input>
        <button className="SearchButton" type="submit">
          {isLoading ? (
            <>Carregando....</>
          ) : (
            <>
              Buscar{" "}
              <img className="ButtonIcon" src={pokeball} alt="pokeball" />{" "}
            </>
          )}
        </button>
      </form>
      {error && <span>{error}</span>}
      {pokemon && <PokemonCard pokemon={pokemon} />}
    </div>
  );
};

export default App;
