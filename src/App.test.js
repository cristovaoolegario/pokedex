import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { getPokemonByIdOrName } from "./services/pokeApi";
import { act } from "react-dom/test-utils";

jest.mock("./services/pokeApi");
jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

describe("App", () => {
  it("should render page elements ", () => {
    render(<App />);

    const welcomeText = screen.getByRole("heading");
    const paragraph = screen.getByText("instructions");
    const input = screen.getByRole("textbox");
    const submitButton = screen.getByRole("button");
    const pokeballImg = screen.getByAltText("pokeball");
    const notFoundImg = screen.queryByAltText("notFoundImg");

    expect(welcomeText).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(pokeballImg).toBeInTheDocument();
    expect(notFoundImg).not.toBeInTheDocument();
  });

  it("should render search when page is not loading", () => {
    render(<App />);

    const buscarText = screen.getByText("search");

    expect(buscarText).toBeInTheDocument();
  });

  it("should do noting when there is no typed pokemon", async () => {
    render(<App />);
    await act(async () => {
      userEvent.click(screen.getByRole("button"));
    });
    const buscarText = screen.getByText("search");

    expect(buscarText).toBeInTheDocument();
  });

  it("should loading when click in button", async () => {
    render(<App />);

    userEvent.type(screen.getByRole("textbox"), "test");
    userEvent.click(screen.getByRole("button"));

    const errorSpan = screen.getByText("loading");
    expect(errorSpan).toBeInTheDocument();
  });

  it("should setError and stop loading when theres no pokemon", async () => {
    getPokemonByIdOrName.mockResolvedValue("Pokémon not found.");
    render(<App />);

    userEvent.type(screen.getByRole("textbox"), "test");

    await act(async () => {
      userEvent.click(screen.getByRole("button"));
    });

    const errorSpan = screen.getByText("Pokémon not found.");
    expect(errorSpan).toBeInTheDocument();
  });

  it("should show pokemon when theres a pokemon", async () => {
    var json = {
      id: 1,
      name: "pikachu",
      height: 4,
      weight: 3,
      types: [{ type: { name: "eletric" } }],
      sprites: {
        versions: { "generation-v": { "black-white": { animated: "bla" } } },
      },
    };
    getPokemonByIdOrName.mockResolvedValue(json);
    render(<App />);

    userEvent.type(screen.getByRole("textbox"), "pikachu");

    await act(async () => {
      userEvent.click(screen.getByRole("button"));
    });
    const pikachuSpan = screen.queryByText("pikachu");
    expect(pikachuSpan).toBeInTheDocument();
  });
});
