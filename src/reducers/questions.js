import { FETCH_QUESTION, INCREMENT_QUESTIONS_COUNT } from '../constants/questions';

const INITIAL_STATE = {
    question: null,
    totalCount: 0
};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_QUESTION:
            return { ...state, question: action.payload };
        case INCREMENT_QUESTIONS_COUNT:
            return { ...state, totalCount: state.totalCount + 1 };
        default:
            return state;
    }
}