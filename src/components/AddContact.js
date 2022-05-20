import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {addContact} from '../redux/contacts-reducer';
import PropTypes from 'prop-types';
import EditAdd from './EditAdd';


const AddContact = ({contacts, addContact, isModalVisible, handleCancel}) => {

    const onSubmit = (formData) => {
        const newContact = {
            id: contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 0,
            firstName: formData.firstName,
            lastName: formData.lastName
        };
        addContact(newContact);
    };


    return (
        <EditAdd onSubmit={onSubmit} isModalVisible={isModalVisible}
            handleCancel={handleCancel} title={'Добавить новый контакт'}
            label={'Добавить'}/>

    );
};

AddContact.propTypes = {
    contacts: PropTypes.array,
    addContact: PropTypes.func,
    handleCancel: PropTypes.func,
    isModalVisible: PropTypes.bool,
    label: PropTypes.string
};


const mapStateToProps = (state) => ({
    contacts: state.contacts.contacts
});

export default compose(connect(mapStateToProps, {addContact}))(AddContact);

