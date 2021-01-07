import React from "react";
import style from './Users.module.css'
import * as axios from 'axios'
import userPhoto from '../../assets/images/users.png'

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

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                //this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (p) => {
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => this.props.setUsers(response.data.items))
    }

    render() {
        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for(let i =1; i <= pageCount; i++){
            pages.push(i)
        }
        return (
            <div>
                <div className={style.btnNumb}>{pages.map(p => {
                   return <button className={this.props.currentPage === p && style.selectedPage} onClick={()=>{this.onPageChanged(p)}}>{p}</button>
                })}</div>
                {this.props.users.map(u => <div key={u.id} className={style.usersWrapper}>
                    <div className={style.userPhoto}>
                        <div className={style.usersPhoto_photo}><img alt='#'
                                                                     src={u.photos.small != null ? u.photos.small : userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unFollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
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
}

export default Users;