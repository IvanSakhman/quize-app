import axios from 'axios';

import {
    FETCH_QUESTION,
    INCREMENT_QUESTIONS_COUNT,
    RELOCATE_FROM_PROPOSITION_TO_BOARD,
    RELOCATE_FROM_BOARD_TO_PROPOSITION,
    CHECK_ANSWER,
    INCREMENT_CORRECT_QUESTIONS_COUNT

} from '../constants/questions';

import { charactersTransform, randomizeItem } from '../helpers/answerTransformation';

export function fetchQuestion() {
    return function(dispatch) {
        return axios.get('http://jservice.io/api/random')
            .then(response => {
                const questionObj = response.data[0];
                const data = {
                    id: questionObj.id,
                    answer: questionObj.answer,
                    description: questionObj.question,
                    category: questionObj.category.title,
                    answerTransformed: randomizeItem(charactersTransform(questionObj.answer))
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

export function characterRelocationToBoard(character) {
    return function(dispatch) {
        dispatch({
            type: RELOCATE_FROM_PROPOSITION_TO_BOARD,
            payload: character
        })
    }
}

export function characterRelocationFromBoard(character) {
    return function(dispatch) {
        dispatch({
            type: RELOCATE_FROM_BOARD_TO_PROPOSITION,
            payload: character
        })
    }
}

export function checkAnswer() {
    return function(dispatch) {
        dispatch({
            type: CHECK_ANSWER
        })
    }
}

export function incrementCorrectQuestionsCount() {
    return function(dispatch) {
        dispatch({
            type: INCREMENT_CORRECT_QUESTIONS_COUNT
        })
    }
}