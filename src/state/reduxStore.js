import {combineReducers, createStore} from "redux";
import profileReducer from "./profilePage";
import dialogsReducer from "./dialogsPage";
import sidebarReducer from "./sidebarPage";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
})
let store = createStore(reducers);

export default store;