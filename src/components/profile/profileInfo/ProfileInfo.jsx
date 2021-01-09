import React from 'react'
import style from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/preloader";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={style.backgroundImage}>
            </div>
            <div>
                <div className={style.description}>
                    <div><img className={style.avaImg} alt='ava'
                              src={props.profile.photos.large}/>
                    </div>
                    <div className={style.fullName}>
                        {props.profile.fullName}
                    </div>
                    <div>
                        {props.profile.lookingForAJobDescription}
                    </div>
                    <div>
                        {props.profile.lookingForAJob == true ? 'Ищу работу' : 'Работа не нужна'}
                    </div>
                    <div>
                        {`${'Мои контакты: '}${props.profile.contacts.facebook}${', '}${props.profile.contacts.instagram}`}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProfileInfo;