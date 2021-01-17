import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, toggleIsFetching, updateStatus} from "../../state/profilePage";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = this.props.authorizedUserId
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return (
                <Profile  {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>

        )
    }
}
/*let AuthRedirectComponent = (props) => {
    if (!this.props.isAuth) {
        return <Redirect to={'/login'}/>
    }
    return <ProfileContainer {...props} />
}*/

/*let AuthRedirectComponent = withAuthRedirect(ProfileContainer)*/


let mapStateToProps = (state) => ({
    isFetching: state.profilePage.isFetching,
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
})
/*let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)
export default connect(mapStateToProps, {setUserProfile, toggleIsFetching})(WithUrlDataContainerComponent);*/
export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateStatus, toggleIsFetching}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)