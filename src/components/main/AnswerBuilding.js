import React, { Component } from 'react';

class AnswerBuilding extends Component {
    constructor() {
        super();

        this.receiveCharacter = this.receiveCharacter.bind(this);
    }

    receiveCharacter(character) {
        this.props.characterRelocationFromBoard(character);
    }

    showItem(characters) {
        return (
            characters.map(character =>
                <li
                    onClick={e => this.receiveCharacter(character)}
                    className={`character inline-block ${character.name == " " && "emptyCharacter" }`}
                    key={character.id}>
                    {character.name}
                </li>
            )
        )
    }

    render() {
        return (
            <div className="answerBuilding">
                <div className="answerContainer">
                    <div className="charactersPlace">
                        <ul className="inlineList">
                            {this.showItem(this.props.characters)}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default AnswerBuilding;