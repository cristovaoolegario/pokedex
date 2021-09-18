import { render, screen } from "@testing-library/react";
import PokemonCard from "./PokemonCard";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

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

  it("should get animated avatar when animated avatar exists ", () => {
    let pokemon = {
      id: 1,
      name: "pikachu",
      height: 4,
      weight: 3,
      types: [{ type: { name: "eletric" } }],
      sprites: {
        versions: {
          "generation-v": {
            "black-white": {
              front_default: "htttp://test.com/static-img.png",
              animated: { front_default: "http://test.com/animated-img.gif" },
            },
          },
        },
      },
    };
    render(<PokemonCard pokemon={pokemon}></PokemonCard>);

    const pokemonImg = screen.getByRole("img");

    expect(pokemonImg.src).toBe("http://test.com/animated-img.gif");
  });

  it("should get static avatar when animated avatar dont exists ", () => {
    let pokemon = {
      id: 1,
      name: "pikachu",
      height: 4,
      weight: 3,
      types: [{ type: { name: "eletric" } }],
      sprites: {
        versions: {
          "generation-v": {
            "black-white": {
              front_default: "http://test.com/static-img.png",
              animated: { front_default: null },
            },
          },
        },
      },
    };
    render(<PokemonCard pokemon={pokemon}></PokemonCard>);

    const pokemonImg = screen.getByRole("img");

    expect(pokemonImg.src).toBe("http://test.com/static-img.png");
  });
});
