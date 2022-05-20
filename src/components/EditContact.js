import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {updateContact} from '../redux/contacts-reducer';
import PropTypes from 'prop-types';
import EditAdd from './EditAdd';


const EditContact = ({contacts, updateContact, isModalVisible, handleCancel, userId}) => {

    const currentContact = contacts.find(
        (contact) => contact.id === userId
    );


    const getInitialValues = () => {
        return {
            firstName: currentContact.firstName,
            lastName: currentContact.lastName
        };
    };


    const onSubmit = (formData) => {
        const id = userId;
        updateContact(id, formData.firstName, formData.lastName);
    };


    return (
        <EditAdd onSubmit={onSubmit} isModalVisible={isModalVisible}
            handleCancel={handleCancel} title={'Изменить контакт'}
            label={'Изменить'} initialValues={getInitialValues()}/>

    );
};

EditContact.propTypes = {
    contacts: PropTypes.array,
    updateContact: PropTypes.func,
    handleCancel: PropTypes.func,
    isModalVisible: PropTypes.bool,
    userId: PropTypes.number

};

const mapStateToProps = (state) => ({
    contacts: state.contacts.contacts
});

export default compose(connect(mapStateToProps, {updateContact}))(EditContact);

