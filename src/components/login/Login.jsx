import React from "react";
import {reduxForm} from "redux-form";
import {createField, FormControl} from "../common/formsControl/FormsControl";
import {required} from "../../utils/validators/validator";
import {connect} from "react-redux";
import {login} from "../../state/authReducer";
import {Redirect} from "react-router";
import style from '../common/formsControl/FormsControl.module.css'


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div className={style.login}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {error && <div className={style.formError}>{error}</div>}
            {createField('input', 'Enter your login', 'email', FormControl, [required], {type: 'email'})}
            {createField('input', 'Enter your password', 'password', FormControl, [required], {type: 'password'})}
            {createField('checkbox', null, 'rememberMe', FormControl, null, {type: 'checkbox'}, 'Remember Me')}
            <div>
                <button className={style.logoBtn}>Log In</button>
            </div>
        </form>
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default connect(mapStateToProps, {login})(Login);