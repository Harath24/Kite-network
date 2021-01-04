import React from 'react'
import {addNewMessageActionCreator, updateNewMessageTextActionCreator} from "../../state/dialogsPage";
import Dialogs from "./Dialogs";



const DialogsContainer = (props) => {
    let state = props.store.getState();
    let addNewMessage = () => {
        props.store.dispatch(addNewMessageActionCreator());
    }
    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    }

    return (
        <Dialogs dialogPage={state.dialogPage}
                 newMessageText={state.dialogPage.newMessageText}
                 dialogsData={state.dialogPage.dialogsData}
                 addNewMessage={addNewMessage}
                 onMessageChange={onMessageChange}
        />
    )
}

export default DialogsContainer;