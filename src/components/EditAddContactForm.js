import {NavLink} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, minLengthCreator, onlyLetters, required} from "../utils/validators";
import {upper} from "../utils/normalize";
import {customInput} from "./common/FormControls/FormControls";
import React from "react";
import {Button, Divider, Typography} from "antd";


const maxLength20 = maxLengthCreator(20)
const minLength2 = minLengthCreator(2)

class EditAddContactForm extends React.Component {
    render() {
        const {handleSubmit} = this.props
        return (
            <div>
                <div>
                    <NavLink to='/'><Typography.Text mark>Вернуться в главное меню</Typography.Text></NavLink>
                </div>
                <Divider />
                <div>
                    <form onSubmit={handleSubmit} >
                        <Field name={"firstName"} component={customInput} type='text' placeholder="Enter a firstname ..."
                               validate={[required, onlyLetters, maxLength20, minLength2]} normalize={upper}/>
                        <br/>
                        <Field name={"lastName"} component={customInput} type='text' placeholder="Enter a lastname ..."
                               validate={[required, onlyLetters, maxLength20, minLength2]} normalize={upper}/>
                        <br/>
                        <div>
                            <Button type={"primary"} htmlType={"submit"} block>Добавить</Button>
                        </div>
                    </form>
                </div>
            </div>

        )
    }
}


export default reduxForm({form: 'EditAddContact'})(EditAddContactForm)