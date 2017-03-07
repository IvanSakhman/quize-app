import {
    FETCH_QUESTION,
    INCREMENT_QUESTIONS_COUNT,
    RELOCATE_FROM_PROPOSITION_TO_BOARD,
    RELOCATE_FROM_BOARD_TO_PROPOSITION,
    CHECK_ANSWER,
    INCREMENT_CORRECT_QUESTIONS_COUNT
} from '../constants/questions';

import { charactersToString } from '../helpers/answerTransformation';

const INITIAL_STATE = {
    question: null,
    totalCount: 0,
    arrayProposition: [],
    arrayBoard: [],
    checkAnswerCondition: null,
    correctAnswers: 0
};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_QUESTION:
            return {
                ...state,
                question: action.payload,
                arrayProposition: action.payload.answerTransformed,
                arrayBoard: [],
                checkAnswerCondition: null
            };

        case INCREMENT_QUESTIONS_COUNT:
            return {
                ...state,
                totalCount: state.totalCount + 1
            };

        case RELOCATE_FROM_PROPOSITION_TO_BOARD:
            let array = state.arrayProposition, val = action.payload;
            array = array.filter( item => item !== val );

            return {
                ...state,
                arrayProposition: array,
                arrayBoard: [...state.arrayBoard, action.payload]
            };

        case RELOCATE_FROM_BOARD_TO_PROPOSITION:
            let arrayBoard = state.arrayBoard, valBoard = action.payload;
            arrayBoard = arrayBoard.filter( item => item !== valBoard );

            return {
                ...state,
                arrayProposition: [...state.arrayProposition, action.payload],
                arrayBoard: arrayBoard,
                checkAnswerCondition: null
            };

        case CHECK_ANSWER:
            let answer;
            let userAnswer = charactersToString(state.arrayBoard), actualAnswer = state.question.answer;
            if (state.arrayProposition.length < 1 ) {
                if ( userAnswer === actualAnswer ) answer = true;
                if ( userAnswer !== actualAnswer ) answer = false;
            } else {
                answer = null
            }

            return { ...state, checkAnswerCondition: answer };

        case INCREMENT_CORRECT_QUESTIONS_COUNT:
            return { ...state, correctAnswers: state.correctAnswers + 1 };
        default:
            return state;
    }
}