import api from '../utils/api_utils'

export const FETCH_POSTS = "FETCH_POSTS"
export const FETCH_POSTS_START = "FETCH_POSTS_START"
export const FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR"



export function fetchPosts() {
    return dispatch =>
        api
            .get('/posts')
            .then(response => response.data)
            .then(
                data => dispatch({type: 'FETCH_POSTS', payload: data}),
                error => console.error(error)
            )
}
