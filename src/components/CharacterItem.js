import Component from './Component.js';


class CharacterItem extends Component {
    
    renderTemplate() {
        const character = this.props.character;
        if(!character.photoUrl) {
            character.photoUrl = '../../assets/download.jpg';
        }

        return /*html*/ `
            <li class="character-item">
                <img src="${character.photoUrl}">
                <h2>${character.name}</h2>
                <a href="#enemies=${character.name}">Enemies</a>
                <a href="#allies=${character.name}">Allies</a>
            </li>
        `;
    }
}

export default CharacterItem;