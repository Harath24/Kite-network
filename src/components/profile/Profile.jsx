import React from 'react'
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPostsContainer from "./myposts/MyPostsContainer";
import style from '../profile/Profile.module.css'

const Profile = ({profile, status, updateStatus, store, isOwner, updateAvaImage,}) => {
    return (
      <div className={style.profile}>
          <div>
              <ProfileInfo isOwner={isOwner} profile={profile} status={status} updateStatus={updateStatus} updateAvaImage={updateAvaImage} />
              <MyPostsContainer store={store} profile={profile}/>
          </div>

      </div>
    )
}

export default Profile;