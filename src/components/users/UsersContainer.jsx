import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {
    follow, requestUsers,
    setCurrentPage,
    toggleIsFetching,
    unFollow
} from "../../state/usersReducer";
import Preloader from "../common/preloader/preloader";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../state/usersSelectors";

class UsersContainer extends React.Component {

    componentDidMount() {
/*        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                //this.props.setTotalUsersCount(data.totalCount)
            })*/
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (p) => {
        this.props.requestUsers(p, this.props.pageSize)
        /*this.props.setCurrentPage(p)
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(p, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.toggleIsFetching(false)
            })*/
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       unFollow={this.props.unFollow}
                       follow={this.props.follow}
                       users={this.props.users}
                       followingInProgress={this.props.followingInProgress}
                />
            </>

        )
    }
}

/*let mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}*/
let mapStateToProps = (state) => {

    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}
/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}*/

export default connect(mapStateToProps,
    {follow, unFollow, setCurrentPage, toggleIsFetching, requestUsers: requestUsers})(UsersContainer)