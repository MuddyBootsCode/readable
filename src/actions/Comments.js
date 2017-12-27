import api from '../utils/api_utils'
import store from '../store'

export const FETCH_COMMENTS_START = 'FETCH_COMMENTS_START'
export const FETCH_COMMENTS = 'FETCH_COMMENTS'
export const FETCH_COMMENTS_ERROR = 'FETCH_COMMENTS_ERROR'


export function fetchComments(postId) {
    store.dispatch({type: 'FETCH_COMMENTS_START'})
    return dispatch =>
        api
            .get(`/posts/${postId}/comments`)
            .then(response => response.data)
            .then(
                data => dispatch({type: 'FETCH_COMMENTS', payload: data}),
                error => dispatch({type: 'FETCH_COMMENTS_ERROR', payload: error})
            )
}