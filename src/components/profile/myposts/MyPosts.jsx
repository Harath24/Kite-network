import React from 'react'
import style from './MyPosts.module.css'
import Post from './post/Post'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validator";
import {createField, FormControl} from "../../common/formsControl/FormsControl";

const MyPosts = React.memo(({addPost, postsData, ...props}) => {
    let postsElements = postsData.map(post => <Post messages={post.post} likes={post.likesCounter} id={post.id}
                                                          key={post.id}/>)
    /*    let newPostElement = React.createRef();
        let addPost = () => {
            // props.dispatch(addPostActionCreator())
            props.addPost()
        }*/
    /*    let onPostChange = () => {
            let text = newPostElement.current.value
            //props.dispatch(updateNewPostTextActionCreator(text))
            props.onPostChange(text)
        }*/
    let addNewPost = (values) => {
        addPost(values.newPostText)
    }
    return (
        <div className={style.profile}>
            <div>
                <h3>My posts</h3>
            </div>
            <AddPostReduxForm onSubmit={addNewPost}/>
            {postsElements}
        </div>
    )
})
const maxLength15 = maxLengthCreator(15)
const AddPostForm = ({handleSubmit}) => {
    return <form onSubmit={handleSubmit}>
        <div className={style.input}>
            {createField('textarea', "Your news...", 'newPostText', FormControl, [required, maxLength15], )}
        </div>
        <div>
            <button>Add News</button>
        </div>
    </form>
}
const AddPostReduxForm = reduxForm({form: 'profileAddPostForm'})(AddPostForm)
export default MyPosts;