import Component from './Component.js';

class CharacterItem extends Component {
    renderTemplate() {
        const character = this.props.character;
        return /*html*/ `
            <li class="character-item">
                <img src="${character.photoUrl}">
                <h2>${character.name}</h2>
            </li>
        `;
    }
}

export default CharacterItem;