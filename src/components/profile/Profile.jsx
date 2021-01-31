import React from 'react'
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPostsContainer from "./myposts/MyPostsContainer";
import style from '../profile/Profile.module.css'

const Profile = ({profile, status, updateStatus, store, isOwner, updateAvaImage, userId, saveProfile,}) => {
    return (
        <div className={style.profile}>
            <div>
                <ProfileInfo userId={userId} isOwner={isOwner} profile={profile} status={status}
                             updateStatus={updateStatus} updateAvaImage={updateAvaImage} saveProfile={saveProfile}/>
                <MyPostsContainer store={store} profile={profile}/>
            </div>

        </div>
    )
}

export default Profile;