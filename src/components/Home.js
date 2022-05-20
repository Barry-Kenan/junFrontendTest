import React, {useEffect, useState} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {deleteContact, getContacts} from '../redux/contacts-reducer';
import {Button, Divider, PageHeader, Row, Col, Alert} from 'antd';
import Table from './Table';
import PropTypes from 'prop-types';
import AddContact from './AddContact';
import EditContact from './EditContact';

const Home = ({contacts, getContacts, deleteContact, hasError, errorMessage}) => {
    const [userId, setUserId] = useState(null);

    const [isAddModalVisible, setIsAddModalVisible] = useState(false);
    const [isEditModalVisible, setIsEditModalVisible] = useState(false);

    const showAddModal = () => {setIsAddModalVisible(true);};
    const cancelAddModal = () => {setIsAddModalVisible(false);};


    const showEditModal = (id) => {
        setIsEditModalVisible(true);
        setUserId(id);
    };
    const cancelEditModal = () => {setIsEditModalVisible(false);};

    useEffect(() => {
        getContacts();
    }, []);


    const deleteContactFunction = (id) => {deleteContact(id);};

    return (
        <div className='app-container'>

            <Row justify="center">
                <Col xs={{span: 24}} md={16}>
                    <PageHeader title="Contacts App"/>
                    <Divider/>
                    <Table contacts={contacts} deleteContact={deleteContactFunction} showEditModal={showEditModal}/>
                    <Divider/>
                    {hasError ? <><Alert message={errorMessage} type={'error'} closable/> <Divider/> </> : null}
                    <Button type={'primary'} size={'large'} color={'red'} onClick={showAddModal}>Добавить</Button>
                    <AddContact isModalVisible={isAddModalVisible} handleCancel={cancelAddModal}/>
                    {isEditModalVisible ?
                        <EditContact isModalVisible={isEditModalVisible} handleCancel={cancelEditModal} userId={userId}/> : null}

                </Col>
            </Row>


        </div>
    );
};

Home.propTypes = {
    contacts: PropTypes.array,
    hasError: PropTypes.bool,
    deleteContact: PropTypes.func,
    getContacts: PropTypes.func,
    errorMessage: PropTypes.string
};


const mapStateToProps = (state) => ({
    contacts: state.contacts.contacts,
    hasError: state.contacts.hasError,
    errorMessage: state.contacts.errorMessage
});

export default compose(connect(mapStateToProps, {getContacts, deleteContact}))(Home);
