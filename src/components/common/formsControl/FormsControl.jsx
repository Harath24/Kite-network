import React from 'react'
import style from './FormsControl.module.css'
import {Field} from "redux-form";


export const FormControl = ({input, meta:{touched, error}, text, ...props}) => {
    const hasError = touched && error
    return (
        <div className={style.formControl + ' ' + (hasError ? style.errors : '')}>
            <div>
                {(props.typefield !== 'checkbox' && <props.typefield {...input} {...props} />) ||
                <label className={style.checkbox}>
                    <input type="checkbox"/>
                    <div className={style.checkbox__text}>{text}</div>
                </label>}
                {hasError && <span>{error}</span>}
            </div>
        </div>
    )
}
export const createField = (typefield, placeholder, name, component, validators, props = {}, text = '' ) => (
        <div>
            <Field typefield={typefield} placeholder ={placeholder} name={name} component={component}
                   validate={validators} text={text} {...props}/>
        </div>
    )