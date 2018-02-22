import {createStore,applyMiddleware,compose} from 'redux'
import reducer from '../reducers'
import thunk from 'redux-thunk'

let composeEnhancers  = compose//使用 compose 增强 store，这个 store 与 applyMiddleware 和 redux-devtools 一起使用
const middleware = [ thunk ]

export default function configureStore(initialState) {
    const store = createStore(reducer,initialState,composeEnhancers(applyMiddleware(...middleware)))
    return store
}