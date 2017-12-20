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

export function fetchPosts() {
    const request = api.get("/posts")

    return (dispatch) => {
        request.then(({data}) => {
            console.log(data);
            dispatch({type: 'FETCH_POSTS', payload: data})
        })
    }
}
