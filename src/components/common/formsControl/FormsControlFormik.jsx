import React from 'react'
import style from './FormsControl.module.css'
import {ErrorMessage, Field, useField} from 'formik'
import cn from 'classnames'


export const EmailInput = ({values, touched, errors, handleChange, handleSubmit, handleBlur}) => {
    return (
        <div className={cn(style.formControl, {[style.errors] : touched.email && errors.email})}>
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
        <div className={cn(style.formControl, {[style.errors] : touched.password && errors.password})}>
            <label htmlFor="password"><b>Password: </b> </label><br/>
            <Field type="password" placeholder={'Enter your password'} name={'password'}
                   onChange={handleChange} onSubmit={handleSubmit}
                   onBlur={handleBlur} value={values.password}/>
            <ErrorMessage name={'password'} component="span" className={style.formError}/>
        </div>
    )
}
export  const CheckboxInput = (text) => {
    return (
        <div>
            <label className={style.checkbox}>
                <Field type="checkbox" name={'rememberMe'}/>
                <b className={style.checkbox__text}>{'Remember me:'}</b>
            </label>
        </div>
    )
}
export const CaptchaInput = ({values, handleChange, handleSubmit, handleBlur}) => {
    return (
        <div className={style.formControl}>
            <label htmlFor="captcha">Enter captcha symbols</label><br/>
            <Field type="text" placeholder={'Captcha symbols'} name={'captcha'}
                   onChange={handleChange} onSubmit={handleSubmit}
                   onBlur={handleBlur} value={values.captcha}/>
            <ErrorMessage name={'captcha'} component="span" className={style.formError}/>
        </div>
    )
}
export const EditProfileTextField = ({ label,handleSubmit, handleChange, values, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div>
            <label className={style.formControl}>
                <b>{label}</b> <br/>
                <input {...field} {...props} onChange={handleChange} onSubmit={handleSubmit} value={values}/>
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};