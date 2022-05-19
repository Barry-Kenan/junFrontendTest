import React from 'react';
import {Button, Space, Table} from 'antd';
import {useNavigate} from 'react-router';
import {DeleteOutlined, RedoOutlined} from '@ant-design/icons';
import PropTypes from 'prop-types';

const _Table = ({contacts, deleteContact}) => {
    const navigate = useNavigate();
    const update = (id) => {
        navigate(`/edit/${id}`);
    };

    const data = contacts.map(item => ({...item, key: item.id}));

    const columns = [
        {
            title: 'Имя',
            dataIndex: 'firstName',
            key: 'firstName',
            align: 'center'
        },
        {
            title: 'Фамилия',
            dataIndex: 'lastName',
            key: 'firstName',
            align: 'center'
        },
        {
            title: 'Действия',
            key: 'action',
            align: 'center',
            render: (data) => (
                <Space size="small">
                    <Button onClick={() => update(data.id)} type={'primary'} icon={<RedoOutlined/>}>Изменить</Button>
                    <Button onClick={() => deleteContact(data.id)} type={'primary'}
                        icon={<DeleteOutlined/>}>Удалить</Button>
                </Space>
            ),
        }
    ];


    return (
        <>
            <Table columns={columns} dataSource={data} size={'large'} bordered/>
        </>
    );
};

_Table.propTypes = {
    contacts: PropTypes.array,
    deleteContact: PropTypes.func
};

export default _Table;