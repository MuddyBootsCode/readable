import api from '../utils/api_utils'
import store from '../store'

// const baseURL =  'http://localhost:3001'
const headers = {
    'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'whatever'
}

export const FETCH_COMMENTS_START = 'FETCH_COMMENTS_START'
export const FETCH_COMMENTS_COMPLETE = 'FETCH_COMMENTS_COMPLETE'
export const FETCH_COMMENTS_ERROR = 'FETCH_COMMENTS_ERROR'


export function fetchComments(postId) {
    console.log('post Id coming from inside the comments action = ' + postId)
    store.dispatch({type: 'FETCH_COMMENTS_START'})
    return dispatch => {

        // fetch(`${baseURL}/posts/${postId}/comments`, { method: 'GET', headers})
        //     .then((response) => response.json())
        //     .then((comments) => { dispatch({type: 'FETCH_COMMENTS_COMPLETE' , payload: comments})})
        //     .catch((error)=>{console.log('fetch comments error', error)});
        api
            .get(`/posts/${postId}/comments`)
            .then(response => console.log(response))
            .then(data => dispatch({type: 'FETCH_COMMENTS_COMPLETE', payload: data}))
            .catch(error => dispatch({type: 'FETCH_COMMENTS_ERROR', payload: error}))
    }
}