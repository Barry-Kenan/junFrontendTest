import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {addContact} from "../redux/contacts-reducer";
import {useNavigate} from "react-router";
import s from "./EditAdd.module.css"
import EditAddContactForm from "./common/EditAddForm";



const AddContact = (props) => {
    let users = props.contacts

    const navigate = useNavigate()
    const cancel = () => {
        navigate('/')
    }

    const onSubmit = (formData) => {
        const newContact = {
            id: users.length > 0 ? users[users.length - 1].id + 1 : 0,
            firstName: formData.firstName,
            lastName: formData.lastName
        }
        props.addContact(newContact)
        cancel()
    }
    return (
        <div className={s.container}>
            <h2>Добавить новый контакт</h2>
            <EditAddContactForm onSubmit={onSubmit}/>
        </div>

    );
};




const mapStateToProps = (state) =>({
    contacts: state.contacts.contacts
})

export default compose(connect(mapStateToProps, { addContact }))(AddContact)

