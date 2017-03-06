import {
    FETCH_QUESTION,
    INCREMENT_QUESTIONS_COUNT,
    RELOCATE_FROM_PROPOSITION_TO_BOARD,
    RELOCATE_FROM_BOARD_TO_PROPOSITION
} from '../constants/questions';

const INITIAL_STATE = {
    question: null,
    totalCount: 0,
    arrayProposition: [],
    arrayBoard: []
};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_QUESTION:
            return {
                ...state,
                question: action.payload,
                arrayProposition: action.payload.answerTransformed,
                arrayBoard: []
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
                arrayBoard: arrayBoard
            };

        default:
            return state;
    }
}