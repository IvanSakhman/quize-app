import React, { Component } from 'react';
import { connect } from 'react-redux';

import ActivityLog from './main/ActivityLog';
import QuestionsInfo from './main/QuestionsInfo';

import { fetchQuestion } from '../actions/question';

class Main extends Component {
    componentWillMount() {
        this.props.fetchQuestion();
    }

    showsQuestion(question) {
        return (
            <h3>{question === null ? 'data loading...' : question.answer}</h3>
        )
    }

    render() {
        return (
            <div className="main">
               <ActivityLog />
                <QuestionsInfo />
                {this.showsQuestion(this.props.question)}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        question: state.questions.question
    }
}

export default connect(mapStateToProps, { fetchQuestion })(Main);