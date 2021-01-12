import React from 'react'
import {addNewMessageActionCreator, updateNewMessageTextActionCreator} from "../../state/dialogsPage";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

/*const DialogsContainer = (props) => {
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
}*/
let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
        newMessageText: state.dialogPage.newMessageText,
        //dialogsData: state.dialogPage.dialogsData
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: () => dispatch(addNewMessageActionCreator()),
        onMessageChange: (text) => dispatch(updateNewMessageTextActionCreator(text))
    }
}

/*let AuthRedirectComponent = (props) => {
    if (!this.props.isAuth) {return <Redirect to={'/login'}/>}
    return <Dialogs {...props} />
}*/
/*let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)*/

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);