import {applyMiddleware, createStore, compose } from 'redux'
import reducer from "./reducers/index.js"
import thunk from 'redux-thunk'


const store = createStore(
    reducer,
    compose(applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__())

)

console.log(store)
console.log(store.getState())

export default store