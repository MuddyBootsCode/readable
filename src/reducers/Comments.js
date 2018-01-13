import _ from 'lodash'

import {
    FETCH_COMMENTS_START,
    FETCH_COMMENTS_COMPLETE,
    FETCH_COMMENTS_ERROR,
    FETCH_SINGLE_COMMENT_START,
    SINGLE_COMMENT_FETCHED,
    FETCH_SINGLE_COMMENT_ERROR,
    EDIT_COMMENT,
    EDIT_COMMENT_ERROR,
    DELETE_COMMENT,
    DELETE_COMMENT_ERROR,
    COMMENT_VOTE,
    COMMENT_VOTE_ERROR
} from "../actions/Comments";

const initialState = {
    comments: {},
    fetching:false,
    fetched: false,
    error: null
}

export default function commentsReducer (state = initialState, action ) {
    switch (action.type) {
        case FETCH_COMMENTS_START :
            return {
                ...state,
                fetching: true
            }
        case FETCH_COMMENTS_COMPLETE :
            return {
                ...state,
                fetching: false,
                fetched: true,
                comments : {
                    ...state.comments,
                    ...(_.mapKeys(action.payload, 'id'))
                }
            }
        case FETCH_COMMENTS_ERROR :
            return {
                ...state,
                error: action.payload
            }
        case FETCH_SINGLE_COMMENT_START :
            return {
                ...state,
                fetching: true
            }
        case SINGLE_COMMENT_FETCHED :
            return {
                ...state,
                fetching: false,
                fetched: true,
                comments: {
                    ...state.comments,
                    [action.payload.id]: action.payload
                }
            }
        case FETCH_SINGLE_COMMENT_ERROR :
            return {
                ...state,
                error: action.payload
            }
        case EDIT_COMMENT :
            return {
                ...state,
                comments: {
                    ...state.comments,
                    [action.payload.id]: action.payload
                }
            }
        case EDIT_COMMENT_ERROR :
            return {
                ...state,
                error: action.payload
            }
        case DELETE_COMMENT :
            return {
                ...state,
                comments: {
                    ...state.comments,
                    [action.payload] : {
                        ...state.comments[action.payload],
                        deleted: true
                    }
                }
            }
        case DELETE_COMMENT_ERROR :
            return {
                ...state,
                error: action.payload
            }
        case COMMENT_VOTE :
            return {
                ...state,
                comments : {
                    ...state.comments,
                    [action.payload.id]: {
                        ...state.comments[action.payload.id],
                        voteScore: action.payload.voteScore
                    }
                }
            }
        case COMMENT_VOTE_ERROR :
            return {
                ...state,
                error: action.payload
            }
        default :
            return state;
    }
}