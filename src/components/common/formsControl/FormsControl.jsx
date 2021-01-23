import React from 'react'
import style from './FormsControl.module.css'
import {Field} from "redux-form";
import {required} from "../../../utils/validators/validator";

export const FormControl = ({input, meta:{touched, error}, ...props}) => {
    const hasError = touched && error
    return (
        <div className={style.formControl + ' ' + (hasError ? style.errors : '')}>
            <div>
                {(props.typefield !== 'checkbox' && <props.typefield {...input} {...props} />) ||
                <input type='checkbox'/>}
            </div>
            <div>
                {hasError && <span>{error}</span>}
            </div>

        </div>
    )
}
export const createField = (typefield, placeholder, name, component, validators, props = {}, text = '' ) => (
        <div>
            <Field typefield={typefield} placeholder ={placeholder} name={name} component={component}
                   validate={validators} {...props}/> {text}
        </div>
    )