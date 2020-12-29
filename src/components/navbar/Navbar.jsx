import React from 'react'
import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={style.nav}>
        <div>
        <div className={style.item}><NavLink activeClassName = {style.active} to='/Profile'>Profile</NavLink></div>
        <div className={style.item}><NavLink activeClassName = {style.active} to='/Dialogs'>Messages</NavLink></div>
        <div className={style.item}><NavLink activeClassName = {style.active} to='/News'>News</NavLink></div>
        <div className={style.item}><NavLink activeClassName = {style.active} to='/Music'>Music</NavLink></div>
        <div className={style.item}><NavLink activeClassName = {style.active} to='/Settings'>Settings</NavLink></div>
        </div>
      </nav>
    )
}

export default Navbar;