import React, { Component } from 'react';
import ActivityLog from './main/ActivityLog';
import QuestionsInfo from './main/QuestionsInfo';

export default class Main extends Component {
    render() {
        return (
            <div className="main">
               <ActivityLog />
                <QuestionsInfo />
            </div>
        )
    }
}