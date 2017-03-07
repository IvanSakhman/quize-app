import React, { Component } from 'react';
import { characterRelocationToBoard } from '../../reducers/questions';

class AnswerBuilding extends Component {
    constructor() {
        super();

        this.receiveCharacter = this.receiveCharacter.bind(this);
        this.showItem = this.showItem.bind(this);
    }

    receiveCharacter(character) {
        this.props.characterRelocationToBoard(character);
        this.props.checkAnswer();
    }

    showItem(characters) {
        return (
            characters.map(character =>
                <li
                    onClick={e => this.receiveCharacter(character)}
                    key={character.id}
                    className={`inlineBlock character ${character.name === " " && "emptyCharacter"}`}>
                    {character.name}
                </li>
            )
        )
    }

    render() {
        return (
            <div className="answerProposition">
                <div className="answerContainer">
                    <div className="randomCharacters">
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