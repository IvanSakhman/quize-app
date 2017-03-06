import React, { Component } from 'react';
import { connect } from 'react-redux';

import ActivityLog from './main/ActivityLog';
import QuestionsInfo from './main/QuestionsInfo';
import Loader from './main/Loader';
import SkipQuestion from './main/SkipQuestion';
import AnswerBuilding from './main/AnswerBuilding';
import AnswerProposition from './main/AnswerProposition';

import {
    fetchQuestion,
    incrementQuestionsCount,
    characterRelocationToBoard,
    characterRelocationFromBoard
} from '../actions/question';

class Main extends Component {
    componentWillMount() {
        this.props.fetchQuestion();
    }

    render() {
        return (
            <div className="main">
                { this.props.question ? (
                    <div>
                        <ActivityLog
                            totalCount={this.props.totalCount} />
                        <QuestionsInfo
                            id={this.props.question.id}
                            description={this.props.question.description}
                            category={this.props.question.category}/>
                        <SkipQuestion
                            fetchQuestion={this.props.fetchQuestion}
                            incrementQuestionsCount={this.props.incrementQuestionsCount}/>
                        <AnswerBuilding
                            characters={this.props.arrayBoard}
                            characterRelocationFromBoard={this.props.characterRelocationFromBoard}/>
                        <AnswerProposition
                            characters={this.props.arrayProposition}
                            characterRelocationToBoard={this.props.characterRelocationToBoard}/>
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
        arrayBoard: state.questions.arrayBoard
    }
}

export default connect(
    mapStateToProps,
    {
        fetchQuestion,
        incrementQuestionsCount,
        characterRelocationToBoard,
        characterRelocationFromBoard
    }
)(Main);