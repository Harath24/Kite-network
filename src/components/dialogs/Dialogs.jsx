import React from 'react'
import style from './Dialogs.module.css'
import DialogsItem from "./dialogsItem/DialogsItem";
import Messages from "./dialogsMessages/Messages";


const Dialogs = (props) => {

    let dialogsElements = props.dialogPage.dialogsData.map(dialog => <DialogsItem name={dialog.name} id={dialog.id}
                                                                             key={dialog.id} url={dialog.url}/>)
    let messagesElements = props.dialogPage.messagesData.map(message => <Messages message={message.message} id={message.id}
                                                                             key={message.id}/>)
    let newMessageElement = React.createRef();
    let addNewMessage = () => {
        props.dispatch({type: 'ADD-NEW-MESSAGE'});
    }
    let onMessageChange = () => {
        let text = newMessageElement.current.value
        let action = {type:'UPDATE-NEW-MESSAGE-TEXT', newMessage:text};
        props.dispatch(action)
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <div><textarea onChange={onMessageChange} value={props.newMessageText} ref={newMessageElement} placeholder="Enter your message"/></div>
                <div><button onClick={addNewMessage}>Send</button></div>
            </div>

        </div>
    )
}

export default Dialogs;