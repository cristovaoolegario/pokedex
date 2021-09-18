import React from "react";
import "./PokemonCard.css";
import "../GenericCard.css";

const PokemonCard = ({ pokemon }) => (
  <div className="GenericCard" key={pokemon.id}>
    <div className="PokemonAvatarWrapper">
      <h2 className="PokemonName">{pokemon.name}</h2>
      <img
        className="PokemonAvatar"
        src={
          pokemon.sprites.versions["generation-v"]["black-white"].animated
            .front_default ??
          pokemon.sprites.versions["generation-v"]["black-white"].front_default
        }
        alt={pokemon.name}
      />
    </div>
    <div className="PokemonDetails">
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
  </div>
);

PokemonCard.propTypes = {};
PokemonCard.defaultProps = {};

export default PokemonCard;