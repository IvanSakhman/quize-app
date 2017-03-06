import React, { Component } from 'react';
import { connect } from 'react-redux';

import ActivityLog from './main/ActivityLog';
import QuestionsInfo from './main/QuestionsInfo';
import Loader from './main/Loader';
import SkipQuestion from './main/SkipQuestion';
import AnswerBuilding from './main/AnswerBuilding';
import AswerProposition from './main/AnswerProposition';

import { fetchQuestion, incrementQuestionsCount } from '../actions/question';

class Main extends Component {
    componentWillMount() {
        this.props.fetchQuestion();
    }

    render() {
        console.log(`counter: ${this.props.totalCount}`);
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
        totalCount: state.questions.totalCount
    }
}

export default connect(mapStateToProps, { fetchQuestion, incrementQuestionsCount })(Main);