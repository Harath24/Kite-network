import React from 'react'
import style from './Dialogs.module.css'
import DialogsItem from "./dialogsItem/DialogsItem";
import Messages from "./dialogsMessages/Messages";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map(dialog => <DialogsItem name={dialog.name} id={dialog.id}
                                                                             key={dialog.id} url={dialog.url}/>)
    let messagesElements = props.state.messagesData.map(message => <Messages message={message.message} id={message.id}
                                                                             key={message.id}/>)
    let newMessageElement = React.createRef();
    let addNewMessage = () => {
        let text = newMessageElement.current.value
        props.addNewMessage(text);
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <div><textarea ref={newMessageElement} placeholder="Enter your message"></textarea></div>
                <div><button onClick={addNewMessage}>Send</button></div>
            </div>

        </div>
    )
}

export default Dialogs;