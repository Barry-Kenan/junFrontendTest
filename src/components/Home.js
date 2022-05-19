import React, {useEffect} from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {addContact, deleteContact, getContacts} from "../redux/contacts-reducer";
import {Button, Divider, message, PageHeader, Row, Col, Alert} from 'antd'
import Table from "./Table";
import {useNavigate} from "react-router";

const Home = ({contacts, getContacts,deleteContact, hasError, errorMessage}) => {
    const navigate = useNavigate()
    const add = () => {
        navigate(`/add`)
    }


    useEffect(() => {
        getContacts()
        console.log('render')
    },[])

    const deleteContactFunction = (id) => {
        deleteContact(id)
    }

    console.log(hasError)
    console.log(errorMessage)

    return (
        <div className='app-container'>
            <PageHeader  title="Contacts App"/>
            <Divider />
            <Row>
                <Col xs={24} md={{span: 10, offset:7}}>
                    <Table contacts={contacts} deleteContact={deleteContactFunction}/>
                    <Divider />
                    {hasError?<><Alert message={errorMessage} type={"error"} closable/> <Divider/> </>  : null}
                    <Button type={"primary"} size={"large"} color={"red"} onClick={add}>Добавить</Button>
                </Col>
            </Row>


        </div>
    );
};


const mapStateToProps = (state) =>({
    contacts: state.contacts.contacts,
    hasError: state.contacts.hasError,
    errorMessage: state.contacts.errorMessage
})

export default compose(connect(mapStateToProps, {getContacts, addContact, deleteContact }))(Home)