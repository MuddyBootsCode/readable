import api from '../utils/api_utils'

export function fetchPostComments(postId) {
    return dispatch => {
        dispatch({type:FETCH_COMMENTS_START})
        api
            .get(`/posts/${postId}/comments`)
            .then(response => dispatch({type:FETCH_COMMENTS_COMPLETE, payload: response.data}))
            .catch(error => dispatch({type:FETCH_COMMENTS_ERROR, payload: error}))
    }
}

export function fetchSingleComments(commentId) {
    return dispatch => {
        dispatch({type: FETCH_SINGLE_COMMENT_START})
        api
            .get(`post/comments/${commentId}`)
            .then(response => dispatch({type:SINGLE_COMMENT_FETCHED, payload: response.data}))
            .catch(error => dispatch({type:FETCH_SINGLE_COMMENT_ERROR, payload: error}))
    }
}

export function createComment(commentInfo, callback) {
    return dispatch => {
        api
            .post(`/comments`, commentInfo)
            .then(response => dispatch({type:CREATE_COMMENT, payload: response.data}))
            .catch(error => dispatch({type:CREATE_COMMENT_ERROR, payload: error}))
            .then(() => callback())
    }
}

export function editComment(commentInfo, callback) {
    return dispatch => {
        api
            .put(`comments/${commentInfo.id}`, commentInfo)
            .then(response => dispatch({type:EDIT_COMMENT, payload: response.data}))
            .catch(error => dispatch({type:EDIT_COMMENT_ERROR, payload: error}))
            .then(() => callback())
    }
}

export function deleteComment(commentId, callback) {
    return dispatch => {
        api
            .delete(`/comments/${commentId}`)
            .then(response => dispatch({type:DELETE_COMMENT, payload: response.data}))
            .catch(error => dispatch({type:DELETE_COMMENT_ERROR, payload: error}))
            .then(() => callback())
    }

    
}

export function voteComment(commentId, vote) {
    return dispatch => {
        api
            .post(`/comments/${commentId}`, {option: vote})
            .then(response => dispatch({type:COMMENT_VOTE, payload: response.data}))
            .catch(error => dispatch({type:COMMENT_VOTE_ERROR, payload: error}))
    }
}
export const FETCH_COMMENTS_START = 'FETCH_COMMENTS_START'
export const FETCH_COMMENTS_COMPLETE = 'FETCH_COMMENTS_COMPLETE'
export const FETCH_COMMENTS_ERROR = 'FETCH_COMMENTS_ERROR'
export const FETCH_SINGLE_COMMENT_START = 'FETCH_SINGLE_COMMENT_START'
export const SINGLE_COMMENT_FETCHED = 'SINGLE_COMMENT_FETCHED'
export const FETCH_SINGLE_COMMENT_ERROR = 'FETCH_SINGLE_COMMENT_ERROR'
export const CREATE_COMMENT = 'CREATE_COMMENT'
export const CREATE_COMMENT_ERROR = 'CREATE_COMMENT_ERROR'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const EDIT_COMMENT_ERROR = 'EDIT_COMMENT_ERROR'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const DELETE_COMMENT_ERROR = 'DELETE_COMMENT_ERROR'
export const COMMENT_VOTE = 'COMMENT_VOTE'
export const COMMENT_VOTE_ERROR = 'COMMENT_VOTE_ERROR'
