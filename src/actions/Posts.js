import api from '../utils/api_utils'
import store from '../store'

export const FETCH_POSTS_START = "FETCH_POSTS_START"
export const FETCH_POSTS_COMPLETE = "FETCH_POSTS_COMPLETE"
export const FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR"

export function fetchPosts() {
    store.dispatch({type: 'FETCH_POSTS_START'})
    return dispatch => {
        api
            .get('/posts')
            .then(response => response.data)
            .then(data => dispatch({type: 'FETCH_POSTS_COMPLETE', payload: data}))
            .catch(error => dispatch({type: 'FETCH_POSTS_ERROR', payload: error}))

    }
}
