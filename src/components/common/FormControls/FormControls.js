import React from 'react';
import s from './FormControls.module.css';
import {Input} from 'antd';
import {UserOutlined} from '@ant-design/icons';


export const customInput = ({meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                <Input {...props.input} {...props} type={props.type} size={'large'}
                    prefix={<UserOutlined className="site-form-item-icon"/>}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    );
};



