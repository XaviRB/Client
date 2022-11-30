export const FETCH_CONTACTS_REQUEST = "FETCH_CONTACTS_REQUEST"
export const FETCH_CONTACTS_SUCCESS = "FETCH_CONTACTS_SUCCESS"
export const FETCH_CONTACTS_FAILURE = "FETCH_CONTACTS_FAILURE"

export const fetchContacts = (firebase) => async (dispatch, getState) => {
    console.log("Fetching")
    dispatch({type:FETCH_CONTACTS_REQUEST})

    try {

        // API Call
        firebase.openMessageListener((contacts) => {
            dispatch({type:FETCH_CONTACTS_SUCCESS, payload: contacts})
        });        

    } catch (error) {
        dispatch({type:FETCH_CONTACTS_FAILURE, payload: error})
    }


    return {
        type: FETCH_CONTACTS_REQUEST
    }
}

// const fetchContactsRequest = () => {
//     return {
//         type: FETCH_CONTACTS_REQUEST
//     }
// }

// const fetchContactsSuccess = (contacts) => {
//     return {
//         type: FETCH_CONTACTS_SUCCESS,
//         payload: contacts
//     }
// }

// const fetchContactsFailure = (error) => {
//     return {
//         type: FETCH_CONTACTS_FAILURE,
//         payload: error
//     }
// }
