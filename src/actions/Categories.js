import api from '../utils/api_utils'



export function fetchCategories () {
    return dispatch => {
        dispatch({type: FETCH_CATEGORIES_START})
        api
            .get(`/categories`)
            .then(response => dispatch({type: CATEGORIES_FETCHED, payload: response.data}))
            .catch(error => dispatch({type: FETCH_CATEGORIES_ERROR, payload: error}))

    }
}

export function selectCategory(category) {
    return {
        type: SELECT_CATEGORY,
        payload: category
    }
}

export const FETCH_CATEGORIES_START = 'FETCH_CATEGORIES_START'
export const CATEGORIES_FETCHED = 'CATEGORIES_FETCHED'
export const FETCH_CATEGORIES_ERROR = 'FETCH_CATEGORIES_ERROR'
export const SELECT_CATEGORY = 'SELECT_CATEGORY'

