import React, { Component } from 'react';

export default class ActivityLog extends Component {
    render() {
        return (
            <div className="activityLog">
                <div className="row">
                    <div className="col-md-6">
                        <div className="correctAnswers">
                            Correct Answers: {this.props.correctAnswers}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="totalQuestions">
                            Total Questions: {this.props.totalCount}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
