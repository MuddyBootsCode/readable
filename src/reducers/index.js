import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import postsReducer from './Posts'
import commentsReducer from './Comments'
import categoriesReducer from './Categories'

const rootReducer = combineReducers({
    posts: postsReducer,
    comments: commentsReducer,
    categories: categoriesReducer,
    form: formReducer,

})

export default rootReducer