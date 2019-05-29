
const URL = 'https://last-airbender-api.herokuapp.com/api/v1/characters/random?count=10';

const CharacterApi = {
    getCharacters() {
        return fetch(URL)
            .then(response => response.json());
    }
};

export default CharacterApi;