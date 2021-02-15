import React, {useState} from 'react'
import style from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/preloader";
import ProfileStatusHooks from "./ProfileStatusHooks";
import userPhoto from '../../../assets/images/users.png'
import ProfileData from "./ProfileData";
//import ProfileDataFormFormik from "./ProfileDataFormFormik";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, updateAvaImage, userId, saveProfile, ...props}) => {
    const [editMode, setEditMode] = useState(false)
    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            updateAvaImage(e.target.files[0])
        }
    }
    const onSubmit = (formData) => {
        saveProfile(formData).then(()=> {
            setEditMode(false)
        })
    }
    return (
        <div>
            <div>
                <div className={style.description}>
                    <div><label htmlFor="ava"><img className={style.avaImg} alt='ava'
                                                   src={profile.photos.large != null ? profile.photos.large : userPhoto}/></label>
                        {isOwner &&
                        <input type="file" className={style.avaUpload} id='ava' onChange={onMainPhotoSelected}/>}
                    </div>
                    <div className={style.fullName}>
                        {profile.fullName}
                    </div>
                    <ProfileStatusHooks status={status} updateStatus={updateStatus} userId={userId}/>
                    {editMode
                        ? <ProfileDataForm initialValues={profile} profile={profile} isOwner={isOwner} onSubmit={onSubmit}/>
                        : <ProfileData goToEditMode={()=>setEditMode(true)} profile={profile} isOwner={isOwner}/>
                    }
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo;