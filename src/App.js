import React from 'react';
import './App.css';
import Profile from './components/profile/Profile';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import {Route} from 'react-router-dom'
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import Friends from "./components/friends/Friends";
import DialogsContainer from "./components/dialogs/DialogsContainer";

const App = (props) => {

    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route path={'/profile'} render={ () => <Profile  />} />
                    <Route path={'/dialogs'} render={ () => <DialogsContainer />} />
                    <Route path={'/news'} render={News} />
                    <Route path={'/music'} render={Music} />
                    <Route path={'/settings'} render={Settings} />
                    <Route path={'/friends'} render={() => <Friends />} />
                </div>
            </div>
    );
}

export default App;
