import React from 'react'
import style from './FormsControl.module.css'

export const FormControl = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={style.formControl + ' ' + (hasError ? style.errors : '')}>
            <div>
                {(props.typefield !== 'checkbox' && <props.typefield {...input} {...props} />) || <input type='checkbox'/>}
            </div>
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>

        </div>
    )
}