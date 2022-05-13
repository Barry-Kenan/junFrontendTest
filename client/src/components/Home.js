import React, {useEffect} from 'react';
import ReadOnlyRow from "./ReadOnlyRow";
import {compose} from "redux";
import {connect} from "react-redux";
import {addContact, deleteContact, getContacts} from "../redux/contacts-reducer";
import {NavLink} from "react-router-dom";
import './../App.css'

const Home = ({contacts, getContacts,deleteContact}) => {

    useEffect(() => {
        getContacts()
        console.log('render')
    },[])


    return (
        <div className='app-container'>
            <table>
                <thead>
                <tr>
                    <th>Имя</th>
                    <th>Фамилия</th>
                    <th>Действия</th>
                </tr>
                </thead>
                <tbody>
                {contacts.map((contact) => (
                    <ReadOnlyRow key={contact.id} contact={contact} deleteContact={deleteContact}/>)
                )}
                </tbody>
            </table>
            <div>
                <NavLink to='/add' >
                    <button className='button' >Add new contact</button>
                </NavLink>
            </div>
        </div>
    );
};







const mapStateToProps = (state) =>({
    contacts: state.contacts.contacts
})

export default compose(connect(mapStateToProps, {getContacts, addContact, deleteContact }))(Home)
