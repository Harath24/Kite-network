import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import NavbarContainer from "./components/navbar/NavbarContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/login/Login";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {compose} from "redux";
import {initializeApp} from "./state/appReducer";
import Preloader from "./components/common/preloader/preloader";

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if(!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <NavbarContainer/>
                <div className='app-wrapper-content'>
                    <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                    <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                    <Route path={'/users'} render={() => <UsersContainer/>}/>
                    <Route path={'/login'} render={() => <Login/>}/>
                    <Route path={'/news'} render={News}/>
                    <Route path={'/music'} render={Music}/>
                    <Route path={'/settings'} render={Settings}/>
                    {/*<Route path={'/friends'} render={() => <Friends/>}/>*/}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})
export default compose(
    withRouter,
        connect(mapStateToProps, {initializeApp}))(App);
