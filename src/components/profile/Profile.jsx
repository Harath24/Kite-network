import React from 'react'
import style from './Profile.module.css'
import MyPosts from './myposts/MyPosts'
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = (props) => {
    return (
      <div>
      <ProfileInfo />
      <MyPosts postsData={props.state.postsData}
               addPost={props.addPost
                }/>
      </div>
    )
}

export default Profile;