import {combineReducers, createStore} from "redux";
import profileReducer from "./profilePage";
import dialogsReducer from "./dialogsPage";
import sidebarReducer from "./sidebarPage";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    sideBar: sidebarReducer
})
let store = createStore(reducers);

export default store;