import React, { Component } from 'react';

class SkipQuestion extends Component {

    receiveNextQuestion() {
        this.props.fetchQuestion();
        this.props.incrementQuestionsCount();
    }

    render() {
        return (
            <div className="skipQuestion" onClick={this.receiveNextQuestion.bind(this)}>
                Skip
            </div>
        )
    }
}

export default SkipQuestion;