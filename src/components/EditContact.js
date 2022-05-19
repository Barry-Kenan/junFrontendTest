import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {updateContact} from "../redux/contacts-reducer";
import {useNavigate} from "react-router";
import {useParams} from "react-router-dom";
import EditAddContactForm from "./EditAddContactForm";
import {Col, Divider, message, Row, Space} from "antd";


const EditContact = ({contacts, updateContact}) => {
    const navigate = useNavigate()
    const params = useParams()
    const userId = params.id
    const currentContact = contacts.find(
        (contact) => contact.id === parseInt(userId)
    );

    const getInitialValues = () => {
        return {
            firstName: currentContact.firstName,
            lastName: currentContact.lastName
        };
    }

    const cancel = () => {
        navigate('/')
    }

    const onSubmit = (formData) => {
        const id = parseInt(userId)
        updateContact(id, formData.firstName, formData.lastName)
        cancel()
    }


    return (
        <Row>
            <Col xs={24} md={{span: 12, offset: 6}}>
                <div className={"app-container"}>
                    <h2>Изменить контакт</h2>
                    <Divider/>
                    <Space>
                        <EditAddContactForm onSubmit={onSubmit} initialValues={getInitialValues()}/>
                    </Space>
                </div>
            </Col>
        </Row>


    );
};


const mapStateToProps = (state) => ({
    contacts: state.contacts.contacts
})

export default compose(connect(mapStateToProps, {updateContact}))(EditContact)

