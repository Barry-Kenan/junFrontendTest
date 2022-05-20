import {Field, reduxForm} from 'redux-form';
import {maxLengthCreator, minLengthCreator, onlyLetters, required} from '../utils/validators';
import {upper} from '../utils/normalize';
import {customInput} from './common/FormControls/FormControls';
import React from 'react';
import {Button} from 'antd';
import PropTypes from 'prop-types';


const maxLength20 = maxLengthCreator(20);
const minLength2 = minLengthCreator(2);

class EditAddContactForm extends React.Component {
    render() {
        const {handleSubmit, label} = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <Field name={'firstName'} component={customInput} type='text' placeholder="Enter a firstname ..."
                        validate={[required, onlyLetters, maxLength20, minLength2]} normalize={upper}/>
                    <br/>
                    <Field name={'lastName'} component={customInput} type='text' placeholder="Enter a lastname ..."
                        validate={[required, onlyLetters, maxLength20, minLength2]} normalize={upper}/>
                    <br/>
                    <div>
                        <Button type={'primary'} htmlType={'submit'} block>{label}</Button>
                    </div>
                </form>
            </div>
        );
    }
}

EditAddContactForm.propTypes = {
    handleSubmit: PropTypes.func,
    label: PropTypes.string
};

export default reduxForm({form: 'EditAddContact'})(EditAddContactForm);