import React from 'react'
import {Form, Formik} from 'formik'
import {connect} from "react-redux";
import {login} from "../../state/authReducer";
import style from "../common/formsControl/FormsControl.module.css";
import {Redirect} from "react-router";
import {LoginSchema} from "../../utils/validators/validator";
import {CheckboxInput, EmailInput, PasswordInput} from "../common/formsControl/FormsControlFormik";

const LoginFormik = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div className={style.login}>
            <Formik initialValues={{
                email: '',
                password: '',
                rememberMe: false,
                submitBtn: ''
            }}
                    validateOnBlur
                    onSubmit={onSubmit}
                    validationSchema={LoginSchema}
            >
                {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                    <Form>
                        <EmailInput values={values} errors={errors} handleSubmit={handleSubmit} handleBlur={handleBlur} handleChange={handleChange} touched={touched}/>
                        <PasswordInput values={values} errors={errors} handleSubmit={handleSubmit} handleBlur={handleBlur} handleChange={handleChange} touched={touched}/>
                        <CheckboxInput/>
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
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(LoginFormik);