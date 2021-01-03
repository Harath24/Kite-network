import React from 'react'
import style from './Friends.module.css'


const Friends = (props) => {

let friends = props.state.map(friend => <div><img alt="friendsAva" src={friend.url}/>{friend.name}</div>)

    return (
      <div className={style.friend}>
          {friends}
      </div>
    )
}

export default Friends;