import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {addContact} from "../redux/contacts-reducer";
import {useNavigate} from "react-router";
import EditAddContactForm from "./EditAddContactForm";
import {Col, Row, Divider, message, PageHeader, Space} from "antd";


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
        <Row>
            <Col xs={24} md={{span: 12, offset: 6}}>
                <div className={"app-container"}>
                    <h2>Добавить новый контакт</h2>
                    <Divider/>
                    <Space>
                        <EditAddContactForm onSubmit={onSubmit}/>
                    </Space>
                </div>
            </Col>
        </Row>


    );
};


const mapStateToProps = (state) => ({
    contacts: state.contacts.contacts
})

export default compose(connect(mapStateToProps, {addContact}))(AddContact)

