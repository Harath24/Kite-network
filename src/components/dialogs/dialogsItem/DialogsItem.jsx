import React from 'react'
import style from './DialogsItem.module.css'
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let path = `${'/Dialogs/'}${props.id}`
    return (
        <div className={style.dialog}>
            <NavLink activeClassName={style.active} to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogsItem;