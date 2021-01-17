import React from "react";
import {Field, reduxForm} from "redux-form";
import {FormControl} from "../common/formsControl/FormsControl";
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
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const LoginForm = (props) => {
    //const maxLength18 = maxLengthCreator(18)
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field typefield='input' placeholder='Enter your login' name={'email'} component={FormControl}
                       validate={[required]}/>
            </div>
            <div>
                <Field typefield='input' placeholder='Enter your password' name={'password'} type='password'
                       component={FormControl} validate={[required]}/>
            </div>
            <div>
                <Field type="checkbox" typefield="checkbox" name={'rememberMe'} component={FormControl}/> Remember Me
            </div>
            {props.error && <div className={style.formError}>{props.error}</div> }

            <div>
                <button>Log In</button>
            </div>
        </form>
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default connect(mapStateToProps, {login})(Login);