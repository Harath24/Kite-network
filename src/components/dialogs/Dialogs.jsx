import React from 'react'
import style from './Dialogs.module.css'
import DialogsItem from "./dialogsItem/DialogsItem";
import Messages from "./dialogsMessages/Messages";
import {Field, reduxForm} from "redux-form";
import {FormControl} from "../common/formsControl/FormsControl";
import {maxLengthCreator, required} from "../../utils/validators/validator";


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
    let addNewMessage = (values) => {
        //props.dispatch(addNewMessageActionCreator());
        props.addNewMessage(values.newMessageText)
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <AddNewMessageReduxForm onSubmit={addNewMessage}/>
            </div>

        </div>
    )
}
const maxLength50 = maxLengthCreator(50)
const AddNewMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit} >
        <div className={style.input}>
            <Field typefield='textarea' component={FormControl} validate={[required, maxLength50]} name='newMessageText' placeholder="Enter your message..."/>
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>
}
const AddNewMessageReduxForm = reduxForm({form: 'dialogsAddNewMessageForm'})(AddNewMessageForm)
export default Dialogs;