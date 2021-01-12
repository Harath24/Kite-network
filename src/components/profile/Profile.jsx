import React from 'react'
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPostsContainer from "./myposts/MyPostsContainer";

const Profile = (props) => {
    return (
      <div>
          <div>
              <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
              <MyPostsContainer store={props.store}/>
          </div>

      </div>
    )
}

export default Profile;