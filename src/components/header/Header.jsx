import React from 'react'
import style from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={style.header}>
            <div className={style.logo}>
                {props.isAuth ? <div className={style.logoBtn}>{props.login}  <button onClick={props.logout}>Log Out</button> </div> :
                <NavLink to={'/login'} className={style.loginBlock}>Login</NavLink>}
            </div>
            {/*<div className={style.background}></div>*/}
        </header>
    )
}

export default Header;