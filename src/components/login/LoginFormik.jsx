import React from 'react'
import {Form, Formik} from 'formik'
import {connect} from "react-redux";
import {login} from "../../state/authReducer";
import style from "../common/formsControl/FormsControl.module.css";
import {Redirect} from "react-router";
import {LoginSchema} from "../../utils/validators/validator";
import {CaptchaInput, CheckboxInput, EmailInput, PasswordInput} from "../common/formsControl/FormsControlFormik";

const LoginFormik = (props) => {
    const onSubmit = (formData, actions) => {
        actions.setStatus(undefined)
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
            .catch(err => actions.setStatus({err:err}))
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div className={style.login}>
            <h1>Login</h1>
            <Formik initialValues={{
                email: '',
                password: '',
                rememberMe: false,
                captcha:'',
                submitBtn: ''
            }}
                    validateOnBlur
                    onSubmit={onSubmit}
                    validationSchema={LoginSchema}
            >
                {({status, values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                    <Form>
                        <EmailInput values={values} errors={errors} handleSubmit={handleSubmit} handleBlur={handleBlur} handleChange={handleChange} touched={touched}/>
                        <PasswordInput values={values} errors={errors} handleSubmit={handleSubmit} handleBlur={handleBlur} handleChange={handleChange} touched={touched}/>
                        <CheckboxInput/>
                        {props.captchaUrl && <img className={style.captchaImg} src={props.captchaUrl} alt=""/>}
                        {props.captchaUrl && <CaptchaInput values={values} errors={errors} handleSubmit={handleSubmit} handleBlur={handleBlur} handleChange={handleChange} touched={touched}/>}
                        {status && status.err ? <div className={style.formError}>{status.err}</div> : ''}
                        <button className={style.logoBtn} disabled={!isValid && !dirty} name={'submitBtn'}
                                onClick={handleBlur}
                                type={"submit"}>Log in
                        </button>
                    </Form>)}
            </Formik>
        </div>
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})
export default connect(mapStateToProps, {login})(LoginFormik);