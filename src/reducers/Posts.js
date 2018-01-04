import {

    FETCH_POSTS_START,
    FETCH_POSTS_COMPLETE,
    FETCH_POSTS_ERROR

} from "../actions/Posts";


const initialState = {
    fetching: false,
    fetched: false,
    posts: [],
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
            console.log(action.payload)
            return {
                ...state,
                fetched: true,
                fetching: false,
                posts: action.payload.filter(post => !post.deleted)
            }
        case FETCH_POSTS_ERROR :
            return {
                ...state,
                fetched: false,
                fetching: false,
                error: action.payload
            }
        default :
            return state;
    }
}


