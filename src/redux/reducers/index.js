import { combineReducers } from "redux";
import stateReducer from './session'
import contactsReducer from './contacts'

const rootReducer = combineReducers({
    sessionState: stateReducer,
    contactState: contactsReducer
})

export default rootReducer