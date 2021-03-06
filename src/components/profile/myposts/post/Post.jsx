import React from 'react'
import style from './Post.module.css'
import userPhoto from "../../../../assets/images/users.png";
import Preloader from "../../../common/preloader/preloader";

const Post = ({messages, likes, profile, ...props}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div className={style.item}>
            <div><img alt="avatar" className={`${style.item} ${style.ava}`}
                      src={profile.photos.small || userPhoto}/>
                {messages}
            </div>
            <div><span><a href="#s"><img alt="likes" className={`${style.item} ${style.like}`}
                                         src="data:image/png;base64,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"/>
            </a>{likes}</span>
            </div>
        </div>
    )
}

export default Post;