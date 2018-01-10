// import {
//     COMMENTS_ERROR,
//     COMMENTS_FETCHED
// } from "../utils/api_utils";
//
// const initialState = {
//     comments: [],
//     error: null
// }
//
// export default function commentsReducer (state = initialState, action) {
//
//     switch (action.type) {
//         case COMMENTS_FETCHED :
//             return {
//                 ...state,
//                 comments: action.payload
//             }
//         case COMMENTS_ERROR :
//             return {
//                 error: action.payload
//             }
//
//         default :
//             return state;
//     }
//
// }