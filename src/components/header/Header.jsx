import React from 'react'
import style from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = ({login, logout, isAuth}) => {
    return (
        <header className={style.header}>
            <div>
                {isAuth ? <div className={style.logoBtn}>{login}<button onClick={logout}>Log Out</button> </div> :
                <NavLink to={'/login'} className={style.loginBlock}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;