import React from 'react';
import './App.css';
import Profile from './components/profile/Profile';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Dialogs from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom'
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import Friends from "./components/friends/Friends";



const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar state={props.state.sideBar}/>
                <div className='app-wrapper-content'>
                    <Route path={'/profile'} render={ () => <Profile profilePage={props.state.profilePage}
                                                                     updateNewPostText={props.updateNewPostText}
                                                                     addPost={props.addPost} />}

                    />
                    <Route path={'/dialogs'} render={ () => <Dialogs dialogPage={props.state.dialogPage}
                                                                     addNewMessage={props.addNewMessage}
                                                                     newMessageText={props.state.dialogPage.newMessageText}
                                                                     updateNewMessageText={props.updateNewMessageText}
                    /> } />
                    <Route path={'/news'} render={News} />
                    <Route path={'/music'} render={Music} />
                    <Route path={'/settings'} render={Settings} />
                    <Route path={'/friends'} render={() => <Friends state={props.state.sideBar}/>} />

                </div>
            </div>
        </BrowserRouter>


    )
        ;
}

export default App;
