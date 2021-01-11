import React from 'react'
import style from './Dialogs.module.css'
import DialogsItem from "./dialogsItem/DialogsItem";
import Messages from "./dialogsMessages/Messages";
import {Redirect} from "react-router";


/*class Dialogs extends React.Component{

    constructor(props) {
        super(props);
        dialogsElements = this.props.dialogPage.dialogsData.map(dialog => <DialogsItem name={dialog.name} id={dialog.id}
                                                                                  key={dialog.id} url={dialog.url}/>)
        messagesElements = this.props.dialogPage.messagesData.map(message => <Messages message={message.message} id={message.id}
                                                                                      key={message.id}/>)
    }

    addNewMessage = () => {
        this.props.addNewMessage()}

    onMessageChange = (e) => {
        let text = e.target.value
        this.props.onMessageChange(text)}

    render() {
        return (
            <div className={style.dialogs}>
                <div className={style.dialogsItem}>
                    {this.props.dialogsElements}
                </div>
                <div className={style.messages}>
                    {this.messagesElements}
                    <div className={style.input}><textarea onChange={this.onMessageChange} value={this.props.newMessageText} placeholder="Enter your message..."/></div>
                    <div><button onClick={this.addNewMessage}>Send</button></div>
                </div>

            </div>
        )
    }
}*/

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
    if(!props.isAuth){
        return <Redirect to={'/login'}/>
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <div className={style.input}><textarea onChange={onMessageChange} value={props.newMessageText} placeholder="Enter your message..."/></div>
                <div><button onClick={addNewMessage}>Send</button></div>
            </div>

        </div>
    )
}

export default Dialogs;