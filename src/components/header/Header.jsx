import React from 'react'
import style from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={style.header}>
            <div className={style.logo}>
                {props.isAuth? props.login :
                <button><NavLink to={'/login'} className={style.loginBlock}>Login</NavLink></button>}
            </div>
            <div className={style.background}></div>
        </header>
    )
}

export default Header;