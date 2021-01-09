import React from 'react'
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile, toggleIsFetching} from "../../state/profilePage";

class ProfileContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/10`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
                <Profile  {...this.props} />

        )
    }
}

let mapStateToProps = (state) => ({
    isFetching: state.profilePage.isFetching,
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile, toggleIsFetching})(ProfileContainer);