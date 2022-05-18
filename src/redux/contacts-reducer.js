import {contactsAPI} from "../api/api";

const SET_CONTACTS = 'ADD_CONTACTS';

let initialState = {
    contacts: []
}

const contactsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_CONTACTS:
            return {
                ...state,
                contacts: [...action.contacts]
            }
        default:
            return state;
    }
}

const setContacts = (contacts) => {
    return {type: SET_CONTACTS, contacts}
}


export const getContacts = () => {
    return async (dispatch) => {
        const response = await contactsAPI.getContactsData()
        dispatch(setContacts(response.data))
    }
}


export const addContact = (newContact) => async (dispatch) => {
    await contactsAPI.addContactData(newContact)
    dispatch(getContacts())
}
export const deleteContact = (id) => async (dispatch) => {
    await contactsAPI.deleteContactData(id)
    dispatch(getContacts())
}

export const updateContact = (id, firstName, lastName) => async (dispatch) => {
    await contactsAPI.updateContactData(id, firstName, lastName)
    dispatch(getContacts())
}


export default contactsReducer;