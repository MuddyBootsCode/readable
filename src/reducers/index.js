import {
    CREATE_POST,
    EDIT_POST,
    DELETE_POST
} from "../actions";

const initialState = {

}

export default function blogPosts (state = initialState, action) {

    switch (action.type) {
        case CREATE_POST :
            return {}
        case EDIT_POST :
            return {}
        case DELETE_POST :
            return {}
        default :
            return state;
    }
}