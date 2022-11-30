import {FETCH_CONTACTS_REQUEST, FETCH_CONTACTS_SUCCESS, FETCH_CONTACTS_FAILURE } from "../actions/asyncActions"

const INITIAL_STATE = {
    loading: false,
    contacts: [],
    error: null
}

const applyFetchContacts = (state) => ({
    ...state,
    loading: true
})

const applySetContacts = (state, action) => ({
    ...state,
    loading: false,
    contacts: action.payload,
    error: null
})

const applyFailure = (state, action) => ({
    ...state,
    loading: false,
    error: action.payload
})

function contactsReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_CONTACTS_REQUEST: {
            return applyFetchContacts(state)
        }

        case FETCH_CONTACTS_SUCCESS: {
            return applySetContacts(state, action)
        }

        case FETCH_CONTACTS_FAILURE: {
            return applyFailure(state, action)
        }

        default: return state
    }
}

export default contactsReducer