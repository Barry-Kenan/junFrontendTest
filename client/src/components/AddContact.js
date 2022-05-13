import React from 'react';
import {Field,  reduxForm} from "redux-form";
import {compose} from "redux";
import {connect} from "react-redux";
import {addContact} from "../redux/contacts-reducer";
import {useNavigate} from "react-router";
import {NavLink} from "react-router-dom";
import {maxLengthCreator, minLengthCreator, onlyLetters, required} from "../utils/validators";
import {Input} from "./common/FormControls/FormControls";
import {upper} from "../utils/normalize";
import s from "./EditAdd.module.css"


const maxLength20 = maxLengthCreator(20)
const minLength2 = minLengthCreator(2)

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
            <AddContactReduxForm onSubmit={onSubmit}/>
        </div>

    );
};

const AddContactForm = (props) => {
    return (
        <div>
            <div className={s.home}>
                <NavLink to='/'>Вернуться в главное меню</NavLink>
            </div>
            <form onSubmit={props.handleSubmit} >
                <Field name={"firstName"} placeholder={"Enter a firstname ..."} validate={[required, maxLength20, minLength2, onlyLetters]} normalize={upper} component={Input}/>
                <Field name={"lastName"} placeholder="Enter a lastname ..." validate={[required, maxLength20, minLength2, onlyLetters]} normalize={upper} component={Input}/>
                <div>
                    <button disabled={!props.valid} type='submit' className={s.button}>Добавить</button>
                </div>
            </form>
        </div>

    )
}

const AddContactReduxForm = reduxForm({form: 'AddContact'})(AddContactForm)


const mapStateToProps = (state) =>({
    contacts: state.contacts.contacts
})

export default compose(connect(mapStateToProps, { addContact }))(AddContact)

