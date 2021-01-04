import React from 'react'
import style from './Profile.module.css'
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPostsContainer from "./myposts/MyPostsContainer";

const Profile = (props) => {
    return (
      <div>
      <ProfileInfo />
      <MyPostsContainer store={props.store}/>
      </div>
    )
}

export default Profile;