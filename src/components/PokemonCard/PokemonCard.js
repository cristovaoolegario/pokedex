import React from "react";
import "./PokemonCard.css";
import "../GenericCard.css";
import { useTranslation } from "react-i18next";

const PokemonCard = ({ pokemon }) => {
  const { t } = useTranslation();
  return (
    <div className="PokemonCard" key={pokemon.id}>
      <div className="PokemonAvatarWrapper">
        <h2 className="PokemonName">{pokemon.name}</h2>
        <img
          className="PokemonAvatar"
          src={
            pokemon.sprites.versions["generation-v"]["black-white"].animated
              .front_default ??
            pokemon.sprites.versions["generation-v"]["black-white"]
              .front_default
          }
          alt={pokemon.name}
        />
      </div>
      <div className="PokemonDetails">
        <span>
          <strong>{t("height")}</strong>: {pokemon.height * 10} cm
        </span>
        <span>
          <strong>{t("weight")}</strong>: {pokemon.weight / 10} kg
        </span>
        <span>
          <strong>{t("type")}</strong>: {pokemon.types[0].type.name}
        </span>
        <span>
          <strong>{t("id")}</strong>: {pokemon.id}
        </span>
      </div>
    </div>
  );
};

PokemonCard.propTypes = {};
PokemonCard.defaultProps = {};

export default PokemonCard;
