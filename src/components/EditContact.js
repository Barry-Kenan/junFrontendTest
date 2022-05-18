import React from 'react';
import {Field, reduxForm} from "redux-form";
import {compose} from "redux";
import {connect} from "react-redux";
import {updateContact} from "../redux/contacts-reducer";
import {useNavigate} from "react-router";
import {NavLink, useParams} from "react-router-dom";
import {Input} from "./common/FormControls/FormControls";
import {maxLengthCreator, minLengthCreator, onlyLetters, required} from "../utils/validators";
import {upper} from "../utils/normalize";
import s from "./EditAdd.module.css"


const maxLength20 = maxLengthCreator(20)
const minLength2 = minLengthCreator(2)

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
    return (
        <div className={s.container}>
            <h2>Изменить контакт</h2>
            <EditContactReduxForm onSubmit={onSubmit}/>
        </div>

    );
};


const EditContactForm = (props) => {
    return (
        <div >
            <div className={s.home}>
                <NavLink to='/' >Вернуться в главное меню</NavLink>
            </div>
            <div>
                <form onSubmit={props.handleSubmit} className={s.form}>
                    <Field name={"firstName"} placeholder={"Enter a firstname ..."}
                           validate={[required, onlyLetters, maxLength20, minLength2]} normalize={upper} component={Input}/>
                    <Field name={"lastName"} placeholder="Enter a lastname ..."
                           validate={[required, onlyLetters, maxLength20, minLength2]} normalize={upper} component={Input}/>

                    <div >
                        <button className={s.button}>Добавить</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

const EditContactReduxForm = reduxForm({form: 'EditContact'})(EditContactForm)


const mapStateToProps = (state) => ({
    contacts: state.contacts.contacts
})

export default compose(connect(mapStateToProps, {updateContact}))(EditContact)

