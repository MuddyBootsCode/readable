import {
    FETCH_COMMENTS_START,
    FETCH_COMMENTS,
    FETCH_COMMENTS_ERROR
} from "../actions/Comments";

const initialState = {
    fetching: false,
    fetched: false,
    comments: [],
    error: null,
}

export default function commentsReducer (state = initialState, action) {

    switch (action.type) {
        case FETCH_COMMENTS_START :
            return {
                ...state,
                fetching: true
            }
        case FETCH_COMMENTS :
            return {
                ...state,
                fetching: false,
                fetched: true,
                comments: action.payload.filter(comment => !comment.deleted)
            }
        case FETCH_COMMENTS_ERROR :
            return {
                ...state,
                fetching: false,
                fetched: false,
                error: action.payload
            }
        default :
            return state;
    }

}