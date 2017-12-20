import {
    FETCH_POSTS
} from "../actions";


export default function blogPosts (state = [], action) {

    switch (action.type) {
        case FETCH_POSTS :
            return action.data
        default :
            return state;
    }
}

