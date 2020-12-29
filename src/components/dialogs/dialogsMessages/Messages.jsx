import React from 'react'
import style from './Messages.module.css'


const Messages = (props) => {
    return (
        <div className={style.message}>{props.message}</div>
    )
}

export default Messages;