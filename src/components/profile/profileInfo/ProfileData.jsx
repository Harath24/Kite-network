import React from 'react'
import style from "./ProfileInfo.module.css";
const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
        <div>
            <b>Locking for a job</b>: {profile.lookingForAJob ? 'Ищу работу' : 'Работа не нужна'}
        </div>
        <div>
            <b>My professional skills</b>: {profile.lookingForAJobDescription}
        </div>
        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>
        <div>
            <b>My contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <Contacts contactTitle={key} contactValue={profile.contacts[key]} key={key}/>
        })}
        </div>
        {isOwner &&
        <button onClick={goToEditMode}>Edit profile</button>}
    </div>
}
const Contacts = ({contactTitle, contactValue}) => {
    return <div className={style.contacts} key={contactTitle}>
        {contactTitle}: {contactValue}
    </div>
}
export default ProfileData;