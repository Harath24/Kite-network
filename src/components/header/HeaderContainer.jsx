import React from 'react'
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {getAuth} from "../../state/authReducer";
import {usersAPI} from "../../api/api";


class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuth()
        /*usersAPI.getAuth()
            .then(data => {
                if(data.resultCode === 0) {
                    let {id, email, login} = data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })*/
    }
    render() {
        return (
            <Header {...this.props} />
        )
    }
}
let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps, {getAuth})(HeaderContainer);