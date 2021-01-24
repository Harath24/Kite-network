import React from "react";
import style from './Users.module.css'
import userPhoto from '../../assets/images/users.png'
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, unFollow, follow, ...props}) => {
    return (
        <div key={user.id} className={style.usersWrapper}>
            <div className={style.userPhoto}>
                <div className={style.usersPhoto_photo}>
                    <NavLink to={`${'/profile/'}${user.id}`}><img alt='#'
                                                                  src={user.photos.small != null ? user.photos.small : userPhoto}/></NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            /*props.toggleFollowingInProgress(true, user.id)
                            usersAPI.unFollowUser(user.id)
                                .then(data => {
                                    if(data.resultCode === 0) {
                                        props.unFollow(user.id)
                                    }
                                   props.toggleFollowingInProgress(false, user.id)
                                })*/
                            unFollow(user.id)
                        }}>Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            /*props.toggleFollowingInProgress(true, user.id)
                            usersAPI.followUser(user.id)
                                .then(data => {
                                    if(data.resultCode === 0) {
                                        props.follow(user.id)
                                    }
                                    props.toggleFollowingInProgress(false, user.id)
                                })*/
                            follow(user.id)
                        }}>Follow</button>}
                </div>
                <div className={style.usersInfo}>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </div>
            </div>
        </div>)
}
export default User;