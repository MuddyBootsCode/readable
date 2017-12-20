import axios from 'axios'

export const FETCH_POSTS = "FETCH_POSTS"

const api = axios.create({
    baseURL: "http://localhost:3001",
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'whatever'
    }
})

export function fetchPostsThunk() {
    return dispatch =>
        api
            .get('/posts')
            .then(response => response.data)
            .then(
                data => dispatch({type: 'FETCH_POSTS', payload: data}),
                error => console.error(error)
            )
}
