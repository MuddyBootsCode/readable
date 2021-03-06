import axios from 'axios'

export const api = process.env.REACT_APP_READABLE_API_URL || axios.create({
    baseURL: 'https://portermb-readable-backend.herokuapp.com',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'whatever'
    }
})

export function getComments(postId) {
    return api.get(`/posts/${postId}/comments`)
        .then(response => response.data)
    }

export default api
