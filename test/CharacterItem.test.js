import CharacterItem from '../src/components/CharacterItem.js';
const test = QUnit.test;

QUnit.module('Character Item');

test('render template from data', assert => {
    const character = {
        imageUrl:'https://vignette.wikia.nocookie.net/avatar/images/8/85/Kori_Morishita.png/revision/latest?cb=20160330212637',
        name: 'Kori Morishita'
    };

    const characterItem = new CharacterItem({ character });
    const rendered = characterItem.renderTemplate();

    assert.htmlEqual(rendered, /*html*/ `
        <li class="character-item">
            <img src="undefined">
            <h2>Kori Morishita</h2>
        </li>
    `);
});