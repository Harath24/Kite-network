import React from 'react'
import style from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/preloader";
import ProfileStatusHooks from "./ProfileStatusHooks";
import userPhoto from '../../../assets/images/users.png'


const ProfileInfo = ({profile, status, updateStatus, isOwner,updateAvaImage, ...props}) => {
    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if(e.target.files.length) {
            updateAvaImage(e.target.files[0])
        }
    }
    return (
        <div>
            <div>
                <div className={style.description}>
                    <div><label for="ava"><img className={style.avaImg} alt='ava'
                                               src={profile.photos.large != null ? profile.photos.large : userPhoto}/></label>
                        {isOwner && <input type="file" className={style.avaUpload} id='ava' onChange={onMainPhotoSelected} />}
                    </div>
                    <div className={style.fullName}>
                        {profile.fullName}
                    </div>
                    <ProfileStatusHooks status={status} updateStatus={updateStatus}/>
                    <div>
                        {profile.lookingForAJobDescription}
                    </div>
                    <div>
                        {profile.lookingForAJob ? 'Ищу работу' : 'Работа не нужна'}
                    </div>
                    <div>
                        {`${'Мои контакты: '}${profile.contacts.facebook}${', '}${profile.contacts.instagram}`}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;