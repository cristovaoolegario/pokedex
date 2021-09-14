import pokeApi from "./pokeApi";

describe('PokeApi', () => {
    it('should not be undefined', () => {
        expect(pokeApi).not.toBeUndefined()
    })
})