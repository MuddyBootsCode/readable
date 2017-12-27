import { combineReducers } from 'redux'
import postsReducer from './Posts'

const rootReducer = combineReducers({
    posts: postsReducer,

})

export default rootReducer