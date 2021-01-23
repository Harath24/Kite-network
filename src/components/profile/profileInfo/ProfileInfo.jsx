import React from 'react'
import style from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/preloader";
import ProfileStatusHooks from "./ProfileStatusHooks";


const ProfileInfo = ({profile, status, updateStatus, ...props}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <div className={style.description}>
                    <div><img className={style.avaImg} alt='ava'
                              src={profile.photos.large}/>
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