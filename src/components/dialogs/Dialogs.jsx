import React from 'react'
import style from './Dialogs.module.css'
import DialogsItem from "./dialogsItem/DialogsItem";
import Messages from "./dialogsMessages/Messages";
import {addNewMessageActionCreator, updateNewMessageTextActionCreator} from "../../state/dialogsPage";



const Dialogs = (props) => {

    let dialogsElements = props.dialogPage.dialogsData.map(dialog => <DialogsItem name={dialog.name} id={dialog.id}
                                                                             key={dialog.id} url={dialog.url}/>)
    let messagesElements = props.dialogPage.messagesData.map(message => <Messages message={message.message} id={message.id}
                                                                             key={message.id}/>)
    let addNewMessage = () => {
        //props.dispatch(addNewMessageActionCreator());
        props.addNewMessage()
    }
    let onMessageChange = (e) => {
        let text = e.target.value
        //props.dispatch(updateNewMessageTextActionCreator(text))
        props.onMessageChange(text)
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <div><textarea onChange={onMessageChange} value={props.newMessageText} placeholder="Enter your message"/></div>
                <div><button onClick={addNewMessage}>Send</button></div>
            </div>

        </div>
    )
}

export default Dialogs;