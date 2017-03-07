import React, { Component } from 'react';

class AnswerBuilding extends Component {
    constructor() {
        super();

        this.receiveCharacter = this.receiveCharacter.bind(this);
    }

    receiveCharacter(character) {
        this.props.characterRelocationFromBoard(character);
    }

    giveStyle() {
        if ( this.props.answerCondition === true ) {
            return 'successAnswer';
        } else if ( this.props.answerCondition == false ){
            return 'failAnswer';
        } else {
            return null;
        }
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
                <div className={`answerContainer ${this.giveStyle()}`}>
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