import React, {useState, Fragment} from 'react';
import {nanoid} from 'nanoid'
import './App.css'
import data from './data.json'
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";

const App = () => {
    const [contacts, setContacts] = useState(data)

    const [addFormData, setAddFormData] = useState({
        firstName: '',
        lastName: ''
    })

    const [editFormData, setEditFormData] = useState({
        firstName: '',
        lastName: ''
    })

    const [editContactId, setEditContactId] = useState(null)

    const handleAddFormChange = (event) => {
        event.preventDefault()

        const fieldName = event.target.getAttribute('name')
        const fieldValue = event.target.value

        const newFormData = {...addFormData}
        newFormData[fieldName] = fieldValue

        setAddFormData(newFormData)
    }

    const handleEditFormChange = (event) => {
        event.preventDefault()

        const fieldName = event.target.getAttribute('name')
        const fieldValue = event.target.value

        const newFormData = {...editFormData}
        newFormData[fieldName] = fieldValue

        setEditFormData(newFormData)
    }

    const handleAddFormSubmit = (event) => {
        event.preventDefault()

        const newContact = {
            id: nanoid(),
            firstName: addFormData.firstName,
            lastName: addFormData.lastName
        }

        const newContacts = [...contacts, newContact]
        setContacts(newContacts)
    }

    const handleEditFormSubmit = (event) => {
        event.preventDefault()

        const editedContact = {
            id: editContactId,
            firstName: editFormData.firstName,
            lastName: editFormData.lastName
        }

        const newContacts = [...contacts]

        const index = contacts.findIndex((contact) => contact.id === editContactId)

        newContacts[index] = editedContact

        setContacts(newContacts)
        setEditContactId(null)
    }

    const handleEditClick = (event, contact) => {
        event.preventDefault()
        setEditContactId(contact.id)

        const formValues = {
            firstName: contact.firstName,
            lastName: contact.lastName
        }
        setEditFormData(formValues)
    }

    const handleCancelClick = () => {
        setEditContactId(null)
    }

    const handleDeleteClick = (contactId) => {
        const newContacts = [...contacts]

        const index = contacts.findIndex((contact) => contact.id === contactId)

        newContacts.splice(index, 1)
        setContacts(newContacts)
    }

    return (
        <div className='app-container'>
            <form onSubmit={handleEditFormSubmit}>
                <table>
                    <thead>
                    <tr>
                        <th>Имя</th>
                        <th>Фамилия</th>
                        <th>Действия</th>
                    </tr>
                    </thead>
                    <tbody>
                    {contacts.map((contact) => (
                            <Fragment>
                                {editContactId === contact.id
                                    ? <EditableRow editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick}/>
                                    :<ReadOnlyRow contact={contact} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick}/>}
                            </Fragment>
                        )
                    )}

                    </tbody>
                </table>
            </form>
            <h2>Add a contact</h2>
            <form onSubmit={handleAddFormSubmit}>
                <input type="text" name="firstName" required="required" placeholder="Enter a firstname ..."
                       onChange={handleAddFormChange}/>
                <input type="text" name="lastName" required="required" placeholder="Enter a lastname ..."
                       onChange={handleAddFormChange}/>
                <button type="submit">Add</button>
            </form>
        </div>
    );
};


export default App;