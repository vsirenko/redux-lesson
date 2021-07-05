import {createStore, combineReducers} from 'redux'
import {CashReducer} from './CashReducer'
import {CustomerReducer} from './CustomerReducer'
import {composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
    cash: CashReducer,
    customer: CustomerReducer
})

export const store = createStore(rootReducer, composeWithDevTools());