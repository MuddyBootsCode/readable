import _ from 'lodash'

import {

    FETCH_POSTS_START,
    FETCH_POSTS_COMPLETE,
    FETCH_POSTS_ERROR,
    FETCH_POSTS_BY_CAT_START,
    FETCH_POSTS_BY_CAT_COMPLETE,
    FETCH_POSTS_BY_CAT_ERROR,
    EDIT_POST,
    EDIT_POST_ERROR,
    POST_DELETED,
    POST_DELETE_ERROR,
    POST_VOTE,
    POST_VOTE_ERROR,
    CREATE_POST,
    CREATE_POST_ERROR,
    SELECT_SORT_VALUE

} from "../actions/Posts";


const initialState = {
    fetching: false,
    fetched: false,
    posts: {},
    sortPosts: 'popularity',
    error: null
}

export default function postsReducer (state = initialState, action) {

    switch (action.type) {
        case FETCH_POSTS_START :
            return {
                ...state,
                fetching: true
            }
        case FETCH_POSTS_COMPLETE :
            return {
                ...state,
                fetched: true,
                fetching: false,
                posts: _.mapKeys(action.payload, 'id')
            }
        case FETCH_POSTS_ERROR :
            return {
                ...state,
                error: action.payload
            }
        case FETCH_POSTS_BY_CAT_START :
            return {
                ...state,
                fetching: true
            }
        case FETCH_POSTS_BY_CAT_COMPLETE :
            return {
                ...state,
                fetched: true,
                fetching: false,
                posts: _.mapKeys(action.payload, 'id')
            }
        case FETCH_POSTS_BY_CAT_ERROR :
            return {
                ...state,
                error: action.payload
            }
        case EDIT_POST :
            return {
                ...state,
                posts: {
                    ...state.posts,
                    [action.payload.id]: action.payload
                }
            }
        case EDIT_POST_ERROR :
            return {
                ...state,
                error: action.payload
            }
        case CREATE_POST :
            return {
                ...state,
                posts: {
                    ...state.posts,
                    [action.payload.id]: action.payload
                }
            }
        case CREATE_POST_ERROR :
            return {
                ...state,
                error: action.payload
            }
        case POST_VOTE :
            return {
                ...state,
                posts: {
                    ...state.posts,
                    [action.payload.id]: {
                        ...state.posts[action.payload.id],
                        voteScore: action.payload.voteScore
                    }
                }
            }
        case POST_VOTE_ERROR :
            return {
                ...state,
                error: action.payload
            }
        case POST_DELETED :
            return {
                ...state,
                posts: {
                    ...state.posts,
                    [action.payload]: {
                        ...state.posts[action.payload],
                        deleted: true
                    }
                }
            }
        case POST_DELETE_ERROR :
            return {
                ...state,
                error: action.payload
            }
        case SELECT_SORT_VALUE :
            return {
                ...state,
                sortPosts: action.payload
            }
        default :
            return state;
    }
}


