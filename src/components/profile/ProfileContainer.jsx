import React from 'react'
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile, toggleIsFetching} from "../../state/profilePage";
import {withRouter} from "react-router";
import {usersAPI} from "../../api/api";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = 12
        }
        usersAPI.getProfile(userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
                <Profile  {...this.props} profile={this.props.profile} />

        )
    }
}

let mapStateToProps = (state) => ({
    isFetching: state.profilePage.isFetching,
    profile: state.profilePage.profile
})
let WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile, toggleIsFetching})(WithUrlDataContainerComponent);