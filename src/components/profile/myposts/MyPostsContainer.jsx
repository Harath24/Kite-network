import React from 'react'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../state/profilePage";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
let state = props.store.getState()
    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }
    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }
    return (
      <MyPosts addPost={addPost}
               onPostChange={onPostChange}
               newPostText={state.profilePage.newPostText}
               postsData={state.profilePage.postsData}

      />
    )
}

export default MyPostsContainer;