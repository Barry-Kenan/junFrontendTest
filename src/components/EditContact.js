import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {updateContact} from "../redux/contacts-reducer";
import {useNavigate} from "react-router";
import {useParams} from "react-router-dom";
import s from "./EditAdd.module.css"
import EditAddContactForm from "./common/EditAddForm";




const EditContact = ({contacts, updateContact}) => {
    const navigate = useNavigate()
    const params = useParams()
    const userId = params.id
    const currentContact = contacts.find(
        (contact) => contact.id === parseInt(userId)
    );

    const firstName = currentContact.firstName
    const lastName = currentContact.lastName



    const cancel = () => {
        navigate('/')
    }


    const onSubmit = (formData) => {
        const id = parseInt(userId)
        updateContact(id, formData.firstName, formData.lastName)
        cancel()
    }

    const getInitialValues = () => {
        return {
            firstName: firstName,
            lastName: lastName
        };
    }

    return (
        <div className={s.container}>
            <h2>Изменить контакт</h2>
            <EditAddContactForm onSubmit={onSubmit} initialValues={getInitialValues()}/>
        </div>

    );
};





const mapStateToProps = (state) => ({
    contacts: state.contacts.contacts
})

export default compose(connect(mapStateToProps, {updateContact}))(EditContact)

