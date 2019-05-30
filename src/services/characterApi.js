
const URL = 'https://last-airbender-api.herokuapp.com/api/v1/characters';

const CharacterApi = {
    getCharacters(query) {
        let url = URL;

        if(query) {
            url = `${URL}?${query}`;
        }


        return fetch(url)
            .then(response => response.json());
    }
};

export default CharacterApi;