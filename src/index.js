import reportWebVitals from './reportWebVitals';
import store from "./state/reduxStore";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

/*let rerenderEntireTree = (state) => {*/
    ReactDOM.render(
        <BrowserRouter>

                <Provider store={store}>
                    <App />
                </Provider>

        </BrowserRouter>, document.getElementById('root')
    );
/*}*/

/*rerenderEntireTree(store.getState())
store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
});*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
