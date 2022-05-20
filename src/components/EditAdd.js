import React from 'react';
import {Col, Divider, Modal, Row, Space} from 'antd';
import EditAddContactForm from './EditAddContactForm';
import PropTypes from 'prop-types';

const EditAdd = ({isModalVisible,handleCancel,onSubmit,initialValues,title,label}) => {
    return (
        <Modal  visible={isModalVisible} onCancel={handleCancel} footer={null} closable maskClosable={false}>
            <Row justify="center">
                <Col xs={24} sm={10} md={8}>
                    <div className={'app-container'}>
                        <h2>{title}</h2>
                        <Divider/>
                        <Space>
                            <EditAddContactForm onSubmit={onSubmit} label={label} initialValues={initialValues}/>
                        </Space>
                    </div>
                </Col>
            </Row>
        </Modal>
    );
};

EditAdd.propTypes = {
    title: PropTypes.string,
    label: PropTypes.string,
    onSubmit: PropTypes.func,
    handleCancel: PropTypes.func,
    initialValues: PropTypes.object,
    isModalVisible: PropTypes.bool
};

export default EditAdd;