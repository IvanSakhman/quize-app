import axios from 'axios';

import { FETCH_QUESTION, INCREMENT_QUESTIONS_COUNT } from '../constants/questions';

export function fetchQuestion() {
    return function(dispatch) {
        return axios.get('http://jservice.io/api/random')
            .then(response => {
                const questionObj = response.data[0];
                const data = {
                    id: questionObj.id,
                    answer: questionObj.answer,
                    description: questionObj.question,
                    category: questionObj.category.title
                };
                console.log(data);

                dispatch({
                    type: FETCH_QUESTION,
                    payload: data
                })
            })
    }
}

export function incrementQuestionsCount() {
    return function (dispatch) {
        dispatch({
            type: INCREMENT_QUESTIONS_COUNT
        })
    }
}