import React from 'react'
import style from './Dialogs.module.css'
import DialogsItem from "./dialogsItem/DialogsItem";
import Messages from "./dialogsMessages/Messages";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map(dialog => <DialogsItem name={dialog.name} id={dialog.id} key={dialog.id} />)
    let messagesElements = props.state.messagesData.map(message => <Messages message={message.message} id={message.id} key={message.id} />)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;