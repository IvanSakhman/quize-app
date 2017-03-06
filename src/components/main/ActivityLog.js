import React, { Component } from 'react';

export default class ActivityLog extends Component {
    render() {
        return (
            <div className="activityLog">
                <div className="row">
                    <div className="col-md-6">
                        <div className="correctAnswers">
                            Correct Answers: 0
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
