import { render, screen } from "@testing-library/react";
import PokemonCard from "./PokemonCard";

describe("PokemonCard", () => {
  it("should render page elements ", () => {
    let pokemon = {
      id: 1,
      name: "pikachu",
      height: 4,
      weight: 3,
      types: [{ type: { name: "eletric" } }],
      sprites: {
        versions: { "generation-v": { "black-white": { animated: "bla" } } },
      },
    };
    render(<PokemonCard pokemon={pokemon}></PokemonCard>);

    const pokemonName = screen.getByRole("heading");
    const pokemonImg = screen.getByRole("img");
    const pokemonHeight = screen.queryByText("40");
    const pokemonWeight = screen.queryByText("30");
    const pokemonType = screen.queryByText("eletric");
    const pokemonId = screen.queryByText("1");

    expect(pokemonName).toBeInTheDocument();
    expect(pokemonImg).toBeInTheDocument();
    expect(pokemonHeight).not.toBeUndefined();
    expect(pokemonWeight).not.toBeUndefined();
    expect(pokemonType).not.toBeUndefined();
    expect(pokemonId).not.toBeUndefined();
  });
});
