import api from '../utils/api_utils'

import axios from 'axios'

export function fetchPosts () {

    return dispatch => {
        dispatch({type: FETCH_POSTS_START})
        api
            .get('/posts')
            .then(response => dispatch({type: FETCH_POSTS_COMPLETE, payload: response.data}))
            .catch(error => dispatch({type: FETCH_POSTS_ERROR, payload: error}))

    }
}

export function fetchPost (id) {
        console.log(id + ' postId from inside FetchPost action')
    return dispatch => {
        dispatch({type:FETCH_POST_START})
        api
            .get(`/posts/${id}`)
            .then(response => dispatch({type:FETCH_POST_COMPLETE, payload: response.data}))
            .catch(error => dispatch({type:FETCH_POST_ERROR, payload: error}))
    }
}

export function fetchPostsByCat (category) {
    return dispatch => {
        dispatch({type:FETCH_POSTS_BY_CAT_START})
        api
            .get(`/${category}/posts`)
            .then(response => dispatch({type:FETCH_POSTS_BY_CAT_COMPLETE, payload: response.data}))
            .catch(error => dispatch({type:FETCH_POSTS_BY_CAT_ERROR, payload: error}))
    }
}

export function createPost (postInfo, callback) {
    return dispatch => {
        api
            .post('/posts', postInfo)
            .then(response => dispatch({type:CREATE_POST, payload: response.data}))
            .catch(error => dispatch({type:CREATE_POST_ERROR, payload: error}))
            .then(() => callback())

    }
}

export function editPost (postInfo, callback) {
    return dispatch => {
        api
            .put(`/posts/${postInfo.id}`, postInfo)
            .then(response => dispatch({type:EDIT_POST, payload: response.data}))
            .catch(error => dispatch({type:EDIT_POST_ERROR, payload: error}))
            .then(() => callback())
    }
}

export function deletePost (postId, callback) {
    return dispatch => {
        api
            .delete(`/posts/${postId}`)
            .then(response => dispatch({ type: POST_DELETED, payload: postId }))
            .catch(error => dispatch({type: POST_DELETE_ERROR, payload: error}))
            .then(() => callback())

    }
}

export function postVote (postId, vote) {
    return dispatch => {
        api
            .post(`/posts/${postId}`, { option: vote })
            .then(response => dispatch({type:POST_VOTE, payload: response.data}))
            .catch(error => dispatch({type:POST_VOTE_ERROR, payload: error}))
    }
}

export function selectSortValue(sortValue) {
    return {
        type: SELECT_SORT_VALUE,
        payload: sortValue
    }
}






export const FETCH_POSTS_START = "FETCH_POSTS_START"
export const FETCH_POSTS_COMPLETE = "FETCH_POSTS_COMPLETE"
export const FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR"
export const FETCH_POST_START = "FETCH_POST_START"
export const FETCH_POST_COMPLETE = "FETCH_POST_COMPLETE"
export const FETCH_POST_ERROR = "FETCH_POST_ERROR"
export const FETCH_POSTS_BY_CAT_START ='FETCH_POSTS_BY_CAT_START'
export const FETCH_POSTS_BY_CAT_COMPLETE ='FETCH_POSTS_BY_CAT_COMPLETE'
export const FETCH_POSTS_BY_CAT_ERROR ='FETCH_POSTS_BY_CAT_ERROR'
export const CREATE_POST = 'CREATE_POST'
export const CREATE_POST_ERROR = 'CREATE_POST_ERROR'
export const EDIT_POST = 'EDIT_POST'
export const EDIT_POST_ERROR = 'EDIT_POST_ERROR'
export const POST_VOTE = 'POST_VOTE'
export const POST_VOTE_ERROR = 'POST_VOTE_ERROR'
export const POST_DELETED = 'POST_DELETED'
export const POST_DELETE_ERROR = 'POST_DELETE_ERROR'
export const SELECT_SORT_VALUE = 'SELECT_SORT_VALUE'