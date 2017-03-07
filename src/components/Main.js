import React, { Component } from 'react';
import { connect } from 'react-redux';

import ActivityLog from './main/ActivityLog';
import QuestionsInfo from './main/QuestionsInfo';
import Loader from './main/Loader';
import SkipQuestion from './main/SkipQuestion';
import AnswerBuilding from './main/AnswerBuilding';
import AnswerProposition from './main/AnswerProposition';
import ContinueQuiz from './main/ContinueQuiz';
import ProgressMessage from './main/ProgressMessage';

import {
    fetchQuestion,
    incrementQuestionsCount,
    characterRelocationToBoard,
    characterRelocationFromBoard,
    checkAnswer,
    incrementCorrectQuestionsCount
} from '../actions/question';

class Main extends Component {
    componentWillMount() {
        this.props.fetchQuestion();
    }

    render() {
        console.log(`answer: ${this.props.question && this.props.question.answer}`);
        return (
            <div className="main">
                { this.props.question ? (
                    <div>
                        <ActivityLog
                            totalCount={this.props.totalCount}
                            correctAnswers={this.props.correctAnswers} />
                        <QuestionsInfo
                            id={this.props.question.id}
                            description={this.props.question.description}
                            category={this.props.question.category} />
                        <SkipQuestion
                            fetchQuestion={this.props.fetchQuestion}
                            incrementQuestionsCount={this.props.incrementQuestionsCount}
                            answerCondition={this.props.answerCondition} />
                        <ProgressMessage
                            answerCondition={this.props.answerCondition} />
                        <AnswerBuilding
                            characters={this.props.arrayBoard}
                            characterRelocationFromBoard={this.props.characterRelocationFromBoard}
                            answerCondition={this.props.answerCondition} />
                        {this.props.answerCondition === null ? (
                            <AnswerProposition
                                characters={this.props.arrayProposition}
                                characterRelocationToBoard={this.props.characterRelocationToBoard}
                                checkAnswer={this.props.checkAnswer} />
                        ) : (
                            <ContinueQuiz
                                answerCondition={this.props.answerCondition}
                                fetchQuestion={this.props.fetchQuestion}
                                incrementCorrectQuestionsCount={this.props.incrementCorrectQuestionsCount}
                                incrementQuestionsCount={this.props.incrementQuestionsCount} />
                        )}
                    </div>
                ) :
                    <Loader />
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        question: state.questions.question,
        totalCount: state.questions.totalCount,
        arrayProposition: state.questions.arrayProposition,
        arrayBoard: state.questions.arrayBoard,
        answerCondition: state.questions.checkAnswerCondition,
        correctAnswers: state.questions.correctAnswers
    }
}

export default connect(
    mapStateToProps,
    {
        fetchQuestion,
        incrementQuestionsCount,
        characterRelocationToBoard,
        characterRelocationFromBoard,
        checkAnswer,
        incrementCorrectQuestionsCount
    }
)(Main);