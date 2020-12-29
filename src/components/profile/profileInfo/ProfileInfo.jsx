import React from 'react'
import style from './ProfileInfo.module.css'


const ProfileInfo = (props) => {
    return (
        <div>
            <div className={style.backgroundImage}>
            </div>
            <div className={style.description}>
                <img className={style.avaImg} alt='ava'
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsyMtFEP1wMKU3ywZzbDLobsR9yfB3PnHNHQ&usqp=CAU"/>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto necessitatibus, perferendis quibusdam quidem velit voluptatibus.</span>
            </div>
        </div>
    )
}

export default ProfileInfo;