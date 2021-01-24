import React from 'react'
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPostsContainer from "./myposts/MyPostsContainer";
import style from '../profile/Profile.module.css'

const Profile = ({profile, status, updateStatus, store}) => {
    return (
      <div className={style.profile}>
          <div>
              <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} />
              <MyPostsContainer store={store}/>
          </div>

      </div>
    )
}

export default Profile;