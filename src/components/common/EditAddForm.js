import s from "../EditAdd.module.css";
import {NavLink} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, minLengthCreator, onlyLetters, required} from "../../utils/validators";
import {upper} from "../../utils/normalize";
import { Input} from "./FormControls/FormControls";
import React from "react";


const maxLength20 = maxLengthCreator(20)
const minLength2 = minLengthCreator(2)

class EditAddContactForm extends React.Component {
    render() {
        const {handleSubmit} = this.props
        return (
            <div>
                <div className={s.home}>
                    <NavLink to='/'>Вернуться в главное меню</NavLink>
                </div>
                <div>
                    <form onSubmit={handleSubmit} className={s.form}>
                        <Field name={"firstName"} component={Input} type='text' placeholder="Enter a firstname ..."
                               validate={[required, onlyLetters, maxLength20, minLength2]} normalize={upper}/>
                        <Field name={"lastName"} component={Input} type='text' placeholder="Enter a lastname ..."
                               validate={[required, onlyLetters, maxLength20, minLength2]} normalize={upper}/>

                        <div>
                            <button className={s.button}>Добавить</button>
                        </div>
                    </form>
                </div>
            </div>

        )
    }
}


export default reduxForm({form: 'EditAddContact'})(EditAddContactForm)