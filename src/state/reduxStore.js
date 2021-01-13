import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profilePage";
import dialogsReducer from "./dialogsPage";
import sidebarReducer from "./sidebarPage";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;