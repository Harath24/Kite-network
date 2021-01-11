import React from "react";
import style from './Users.module.css'
import userPhoto from '../../assets/images/users.png'
import {NavLink} from "react-router-dom";

/*const Users = (props) => {
    if (props.users.length == 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response =>
        props.setUsers(response.data.items))
    }

    return (
            <div>
                {
                    props.users.map(u => <div key={u.id} className={style.usersWrapper}>
                        <div className={style.userPhoto}>
                            <div className={style.usersPhoto_photo}><img alt='#' src={u.photos.small != null ? u.photos.small : userPhoto}/></div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => {props.unFollow(u.id)}}>Unfollow</button>
                                    : <button onClick={() => {props.follow(u.id)}}>Follow</button> }
                                </div>
                            <div className={style.usersInfo}>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </div>
                            <div className={style.usersLocation}>
                                <div>"u.location.country"</div>
                                <div>"u.location.city"</div>
                            </div>
                        </div>
                    </div>)
                }
            </div>

    )
}*/

let Users = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for(let i =1; i <= pageCount; i++){
        pages.push(i)
    }
    return (
        <div>
            <div className={style.btnNumb}>{pages.map(p => {
                return <button className={props.currentPage === p && style.selectedPage} onClick={() => {
                    props.onPageChanged(p)
                }}>{p}</button>
            })}</div>
            {props.users.map(u => <div key={u.id} className={style.usersWrapper}>
                <div className={style.userPhoto}>
                    <div className={style.usersPhoto_photo}>
                        <NavLink to={`${'/profile/'}${u.id}`}><img alt='#'src={u.photos.small != null ? u.photos.small : userPhoto}/></NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                /*props.toggleFollowingInProgress(true, u.id)
                                usersAPI.unFollowUser(u.id)
                                    .then(data => {
                                        if(data.resultCode === 0) {
                                            props.unFollow(u.id)
                                        }
                                       props.toggleFollowingInProgress(false, u.id)
                                    })*/
                                props.unFollow(u.id)
                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                /*props.toggleFollowingInProgress(true, u.id)
                                usersAPI.followUser(u.id)
                                    .then(data => {
                                        if(data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                        props.toggleFollowingInProgress(false, u.id)
                                    })*/
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                    <div className={style.usersInfo}>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                    <div className={style.usersLocation}>
                        <div>"u.location.country"</div>
                        <div>"u.location.city"</div>
                    </div>
                </div>
            </div>)
            }
        </div>
    )
}

export default Users;