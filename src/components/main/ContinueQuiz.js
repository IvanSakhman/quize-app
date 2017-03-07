import React, { Component } from 'react';

class ContinueQuiz extends Component {
    nextQuestion() {
        this.props.fetchQuestion();
        this.props.incrementCorrectQuestionsCount();
        this.props.incrementQuestionsCount();
    }

    render() {
        console.log(this.props.answerCondition);
        return (
            <div>
                {this.props.answerCondition === true ? (
                    <div
                        onClick={this.nextQuestion.bind(this)}
                        className="continueQuiz">
                        Next Question
                    </div>
                ) : null}
            </div>
        )
    }
}

export default ContinueQuiz