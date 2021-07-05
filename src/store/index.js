import {createStore, combineReducers} from 'redux'
import {CashReducer} from './CashReducer'
import {CustomerReducer} from './CustomerReducer'

const rootReducer = combineReducers({
    cash: CashReducer,
    customer: CustomerReducer
})

export const store = createStore(rootReducer);