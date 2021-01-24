import React from "react";
import style from './Users.module.css'
import Paginator from "../common/paginator/Paginator";
import User from "./User";

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

let Users = ({
                 totalUsersCount,
                 pageSize,
                 currentPage,
                 onPageChanged,
                 users,
                 follow,
                 unFollow,
                 followingInProgress,
                 ...props
             }) => {
    return (
        <div>
            <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage}
                       onPageChanged={onPageChanged}/>
            {users.map(u => <User user={u} key={u.id} className={style.usersWrapper}
                                  follow={follow} unFollow={unFollow} followingInProgress={followingInProgress}/>)
            }
        </div>
    )
}

export default Users;