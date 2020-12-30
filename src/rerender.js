import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from "./state/State";
import {addNewMessage} from "./state/State";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addPost={addPost}
                 addNewMessage={addNewMessage}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}


