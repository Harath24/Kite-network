import React from 'react'
import style from './Profile.module.css'
import MyPosts from './myposts/MyPosts'
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = (props) => {
    return (
      <div>
      <ProfileInfo />
      <MyPosts postsData={props.profilePage.postsData}
               newPostText={props.profilePage.newPostText}
               dispatch={props.dispatch}
      />
      </div>
    )
}

export default Profile;