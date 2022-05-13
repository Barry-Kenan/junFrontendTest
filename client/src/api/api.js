import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:3000/"
})


export const contactsAPI = {
    getContactsData() {
        return instance.get(`contacts`)
    },
    addContactData(newContact){
        return instance.post('contacts', newContact)
    },
    deleteContactData(id){
        return instance.delete(`contacts/${id}`)
    },
    updateContactData(id, firstName, lastName){
        return instance.put(`contacts/${id}`, {firstName, lastName})
    }
}