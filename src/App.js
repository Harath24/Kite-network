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


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={'/profile'} render={ () => <Profile state={props.state.profilePage} />} />
                    <Route path={'/dialogs'} render={ () => <Dialogs state={props.state.dialogPage}  /> } />
                    <Route path={'/news'} component={News} />
                    <Route path={'/music'} component={Music} />
                    <Route path={'/settings'} component={Settings} />

                </div>
            </div>
        </BrowserRouter>


    )
        ;
}

export default App;
