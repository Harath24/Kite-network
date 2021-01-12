import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile, toggleIsFetching} from "../../state/profilePage";
import {Redirect, withRouter} from "react-router";
import {usersAPI} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


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
/*let AuthRedirectComponent = (props) => {
    if (!this.props.isAuth) {
        return <Redirect to={'/login'}/>
    }
    return <ProfileContainer {...props} />
}*/

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)


let mapStateToProps = (state) => ({
    isFetching: state.profilePage.isFetching,
    profile: state.profilePage.profile,
})
let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)
export default connect(mapStateToProps, {setUserProfile, toggleIsFetching})(WithUrlDataContainerComponent);