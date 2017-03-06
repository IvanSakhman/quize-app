import React, { Component } from 'react';

export default class QuestionsInfo extends Component {
    render() {
        return (
            <div className="questionsInfo">
                <h1 className="title">Question #{this.props.id}</h1>
                <h2 className="category">category: {this.props.category}</h2>
                <p className="description">{this.props.description}</p>
            </div>
        );
    }
}