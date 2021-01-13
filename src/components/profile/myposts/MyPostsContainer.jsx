import React from 'react'
import {addPostAC} from "../../../state/profilePage";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

/*const MyPostsContainer = (props) => {
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
}*/
let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => dispatch(addPostAC(newPostText)),
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;