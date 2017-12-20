import {
    FETCH_POSTS
} from "../actions";

const initialState = {}

export default function blogPosts (state = initialState, action) {

    switch (action.type) {
        case FETCH_POSTS :
            return action.data
        default :
            return state;
    }
}