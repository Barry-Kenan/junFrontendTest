import {contactsAPI} from "../api/api";
import {message} from "antd";

const SET_CONTACTS = 'ADD_CONTACTS';
const SET_ERRORS = 'SET_ERRORS';
const HAS_ERROR = 'HAS_ERROR'

let initialState = {
    contacts: [],
    hasError: false,
    errorMessage: null
}

const contactsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_CONTACTS:
            return {
                ...state,
                contacts: [...action.contacts]
            }
        case HAS_ERROR:
            return {
                ...state,
                hasError: true
            }
        case SET_ERRORS:
            return {
                ...state,
                errorMessage: action.message
            }
        default:
            return state;
    }
}

const setContacts = (contacts) => {
    return {type: SET_CONTACTS, contacts}
}

const hasError = () => ({type: HAS_ERROR})

const setErrors = (message) => {
    return {type: SET_ERRORS, message}
}


export const getContacts = () => {
    return async (dispatch) => {
        try {
            const response = await contactsAPI.getContactsData()
            dispatch(setContacts(response.data))
        } catch (error) {
            dispatch(hasError())
            dispatch(setErrors(error.message))
        }

    }
}


export const addContact = (newContact) => async (dispatch) => {
    try{
        await contactsAPI.addContactData(newContact)
        dispatch(getContacts())
        setTimeout(() => {
            message.success(`Новый контакт добавлен`)
        }, 1000)
    }catch (error){
        dispatch(hasError())
        dispatch(setErrors(error.message))
        setTimeout(() => {
            message.success(`Новый контакт не добавлен`)
        }, 1000)
    }

}
export const deleteContact = (id) => async (dispatch) => {
    try{
        await contactsAPI.deleteContactData(id)
        dispatch(getContacts())
        setTimeout(()=> {
            message.success(`Контакт с id ${id} удален`)
        },1000)
    }catch (error){
        dispatch(hasError())
        dispatch(setErrors(error.message))
        setTimeout(() => {
            message.success(`Контакт не удален`)
        }, 1000)
    }

}

export const updateContact = (id, firstName, lastName) => async (dispatch) => {
    try{
        await contactsAPI.updateContactData(id, firstName, lastName)
        dispatch(getContacts())
        setTimeout(() => {
            message.success(`Контакт с id ${id} изменен`)
        }, 1000)
    }catch(error){
        dispatch(hasError())
        dispatch(setErrors(error.message))
        setTimeout(() => {
            message.success(`Контакт не изменен`)
        }, 1000)
    }

}


export default contactsReducer;