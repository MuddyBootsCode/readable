import { combineReducers } from 'redux'
import postsReducer from './Posts'
import commentsReducer from './Comments'

const rootReducer = combineReducers({
    posts: postsReducer,
    comments: commentsReducer,

})

export default rootReducer