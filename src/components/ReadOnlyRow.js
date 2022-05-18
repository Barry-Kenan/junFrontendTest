import React from 'react';
import {useNavigate} from "react-router";

const ReadOnlyRow = ({ contact, deleteContact }) => {
    const navigate = useNavigate()

    const update = (id) => {
        navigate(`/edit/${id}`)
    }
    return (
        <tr>
            <td>{contact.firstName}</td>
            <td>{contact.lastName}</td>
            <td>

                    <button className='button' type='button' onClick={() => update(contact.id)} >
                        Изменить
                    </button>
                    <button className='button'  type='button' onClick={() => deleteContact(contact.id)} >
                        Удалить
                    </button>
            </td>
        </tr>
    );
};

export default ReadOnlyRow;