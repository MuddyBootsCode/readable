import axios from 'axios'

export const FETCH_POSTS = "FETCH_POSTS"

const api = axios.create({
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'whatever'
    }
})

export function fetchPosts() {
    const request = api.get("http://localhost:3001/posts")

    return (dispatch) => {
        request.then(({data}) => {
            dispatch({type: 'FETCH_POSTS', payload: data})
        })
    }
}
