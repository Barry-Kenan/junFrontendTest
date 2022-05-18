import React from "react";
import s from './FormControls.module.css'



export const Input = ({ meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : "")}>
            <div>
                <input {...props.input} {...props} type={props.type} />
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}



