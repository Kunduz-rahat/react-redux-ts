import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from 'redux-thunk'
import { userReducer } from "./reducers/userTeducer"

const rootReducer = combineReducers({
	user:userReducer
})
export const store = createStore( rootReducer, applyMiddleware(thunk))