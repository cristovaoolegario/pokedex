import { getPokemonByIdOrName } from "./pokeApi";
import axios from "axios";


describe('Get Pokemon By ID Or Name', () => {
    jest.mock('axios')
    axios.get = jest.fn()

    it('shoul return pokemon data when pokemon exists', async () => {
        let fakeResponse = { data: [{ "abilities": [{ "ability": { "name": "overgrow", "url": "https://pokeapi.co/api/v2/ability/65/" }, "is_hidden": false, "slot": 1 }, { "ability": { "name": "chlorophyll", "url": "https://pokeapi.co/api/v2/ability/34/" }, "is_hidden": true, "slot": 3 }] }] }
        axios.get.mockResolvedValue(fakeResponse)

        let response = await getPokemonByIdOrName('pikachu')

        expect(axios.get).toBeCalled()
        expect(response).toBe(fakeResponse.data)
    })

    it('should return error message when pokemon is not found', async () => {
        axios.get.mockImplementationOnce(() =>
            Promise.reject(),
        );

        let response = await getPokemonByIdOrName('test')

        expect(axios.get).toBeCalled()
        expect(response).toBe('Pokemon não encontrado')
    })

})