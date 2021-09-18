import { getPokemonByIdOrName } from "./pokeApi";
import axios from "axios";

describe("Get Pokemon By ID Or Name", () => {
  jest.mock("axios");
  axios.get = jest.fn();

  it("shoul return pokemon data when pokemon exists", async () => {
    let fakeResponse = {
      data: [
        {
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
                  animated: {
                    front_default: "http://test.com/animated-img.gif",
                  },
                },
              },
            },
          },
        },
      ],
    };
    axios.get.mockResolvedValue(fakeResponse);

    let response = await getPokemonByIdOrName("pikachu");

    expect(axios.get).toBeCalled();
    expect(response).toBe(fakeResponse.data);
  });

  it("should return error message when pokemon is not found", async () => {
    axios.get.mockImplementationOnce(() => Promise.reject());

    let response = await getPokemonByIdOrName("test");

    expect(axios.get).toBeCalled();
    expect(response).toBe("not-found-pokemon");
  });
});
