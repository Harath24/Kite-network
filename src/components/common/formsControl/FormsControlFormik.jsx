import React from 'react'
import style from './FormsControl.module.css'
import {ErrorMessage, Field} from 'formik'


export const EmailInput = ({values, touched, errors, handleChange, handleSubmit, handleBlur}) => {
    return (
        <div className={style.formControl + ' ' + (touched.email && errors.email ? style.errors : '')}>
            <label htmlFor="email"><b>Email: </b></label><br/>
            <Field type="email" placeholder='Enter your email' name={'email'} onChange={handleChange}
                   onSubmit={handleSubmit}
                   onBlur={handleBlur} value={values.email}/>
            <ErrorMessage name={'email'} component="span" className={style.formError}/>
        </div>
    )
}
export const PasswordInput = ({values, touched, errors, handleChange, handleSubmit, handleBlur}) => {
    return (
        <div className={style.formControl + ' ' + (touched.password && errors.password ? style.errors : '')}>
            <label htmlFor="email"><b>Password: </b> </label><br/>
            <Field type="password" placeholder={'Enter your password'} name={'password'}
                   onChange={handleChange} onSubmit={handleSubmit}
                   onBlur={handleBlur} value={values.password}/>
            <ErrorMessage name={'password'} component="span" className={style.formError}/>
        </div>
    )
}
export  const CheckboxInput = (props) => {
    return (
        <div>
            <label className={style.checkbox}>
                <Field type="checkbox" name={'rememberMe'}/>
                <b className={style.checkbox__text}>{'Remember me:'}</b>
            </label>
        </div>
    )
}