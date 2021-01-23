import React from 'react'
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPostsContainer from "./myposts/MyPostsContainer";

const Profile = ({profile, status, updateStatus, store}) => {
    return (
      <div>
          <div>
              <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} />
              <MyPostsContainer store={store}/>
          </div>

      </div>
    )
}

export default Profile;