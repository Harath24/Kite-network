import React from 'react'
import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Friends from "../friends/Friends";

const Navbar = (props) => {

    let friends = props.sideBar.sideBar.map(friend => <span className={style.friend}><img className={style.friends}
                                                                                          alt="friendsAva"
                                                                                          src={friend.url}/><a
        href="#s">{friend.name}</a>
                                            </span>)
    return (
        <nav className={style.nav}>
            <div>
                <div className={style.item}><NavLink activeClassName={style.active} to='/Profile'>Profile</NavLink>
                </div>
                <div className={style.item}><NavLink activeClassName={style.active} to='/Dialogs'>Messages</NavLink>
                </div><div className={style.item}><NavLink activeClassName={style.active} to='/Users'>Users</NavLink>
                </div>
                <div className={style.item}><NavLink activeClassName={style.active} to='/News'>News</NavLink></div>
                <div className={style.item}><NavLink activeClassName={style.active} to='/Music'>Music</NavLink></div>
                <div className={style.item}><NavLink activeClassName={style.active} to='/Settings'>Settings</NavLink>
                </div>
                <div className={style.item}><NavLink activeClassName={style.active}
                                                     to='/Friends'>Friends</NavLink>
                    <div>{friends}</div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;