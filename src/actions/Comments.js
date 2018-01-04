import api from '../utils/api_utils'
import store from '../store'

export const FETCH_COMMENTS_START = 'FETCH_COMMENTS_START'
export const FETCH_COMMENTS_COMPLETE = 'FETCH_COMMENTS_COMPLETE'
export const FETCH_COMMENTS_ERROR = 'FETCH_COMMENTS_ERROR'


export function fetchComments(postId) {
    store.dispatch({type: 'FETCH_COMMENTS_START'})
    return dispatch =>
        api
            .get(`/posts/${postId}/comments`)
            .then(data => dispatch({type: 'FETCH_COMMENTS_COMPLETE', payload: data}))
            .catch (error => dispatch({type: 'FETCH_COMMENTS_ERROR', payload: error}))
}