import React, { Component } from 'react';

class progressMessage extends Component {
    render() {
        return (
            <div className="progressMessage">
                {this.props.answerCondition === true && <div className="successMessage">Correct Answer :)</div>}
                {this.props.answerCondition === false && <div className="failMessage">Fail Answer :(</div>}
            </div>
        )
    }
}

export default progressMessage;