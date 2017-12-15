export const CREATE_POST = 'CREATE_POST'
export const DELETE_POST = 'DELETE_POST'
export const EDIT_POST = 'EDIT_POST'

export function createPost({}) {
    return{
        type: CREATE_POST,
    }
    
}

export function deletePost({}) {
    return {
        type: DELETE_POST,
    }
}

export function editPost({}) {
    return {
        type: EDIT_POST,
    }
}