import reportWebVitals from './reportWebVitals';
import state, {addNewMessage, addPost, subscribe, updateNewMessageText, updateNewPostText} from "./state/State";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
                 addNewMessage={addNewMessage}
                 updateNewMessageText={updateNewMessageText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state)
subscribe(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
