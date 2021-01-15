import React from "react";
import {Field, reduxForm} from "redux-form";
import {FormControl} from "../common/formsControl/FormsControl";
import {maxLengthCreator, required} from "../../utils/validators/validator";


const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const LoginForm = (props) => {
    const maxLength8 = maxLengthCreator(8)
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field typefield='input' placeholder='Enter your login' name={'login'} component={FormControl} validate={[required, maxLength8]}/>
            </div>
            <div>
                <Field typefield='input' placeholder='Enter your password' name={'password'} component={FormControl} validate={[required, maxLength8]}/>
            </div>
            <div>
                <Field type="checkbox" typefield="checkbox" name={'rememberMe'} component={FormControl} validate={required}/>
            </div>
            <div>
                <button>Log In</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default Login;