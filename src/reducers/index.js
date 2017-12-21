import {
    FETCH_POSTS, FETCH_POSTS_ERROR, FETCH_POSTS_START
} from "../actions";


 const initialState = {
    fetching: false,
    fetched: false,
    posts: [],
    error: null
}

export default function blogPosts (state = initialState, action) {

    switch (action.type) {
        case FETCH_POSTS :
            console.log(Object.keys(action.payload))
            console.log(action.payload)
            return {
                ...state,
                fetching: false,
                fetched: true,
                posts: action.payload
            }
        case FETCH_POSTS_ERROR :
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        default :
            return state;
    }
}

