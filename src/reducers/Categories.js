 import {
     FETCH_CATEGORIES_START,
     CATEGORIES_FETCHED,
     FETCH_CATEGORIES_ERROR,
     SELECT_CATEGORY

 } from "../actions/Categories";

const initialState = {
    fetching: false,
    fetched: false,
    categories: [],
    selectedCategory: '',
    error: false
}

export default function categoriesReducer (state = initialState, action) {
    switch (action.type) {
        case FETCH_CATEGORIES_START :
            return {
                ...state,
                fetching: true
            }
        case CATEGORIES_FETCHED :
            return {
                ...state,
                fetched: true,
                fetching: false,
                categories: action.payload
            }
        case FETCH_CATEGORIES_ERROR :
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        case SELECT_CATEGORY :
            return {
                ...state,
                selectedCategory: action.payload
            }
        default :
            return state
    }
 }