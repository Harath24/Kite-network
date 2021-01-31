import React from 'react'
import {createField, FormControl} from "../../common/formsControl/FormsControl";
import {reduxForm} from "redux-form";
import style from "../../common/formsControl/FormsControl.module.css";

const ProfileDataForm = ({profile, isOwner, handleSubmit, error}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <b>Full Name</b>: {createField('input', 'Full name', 'fullName', FormControl, [])}
        </div>
        <div>
           <b>Looking for a job</b>: {createField('checkbox', '', 'lookingForAJob', FormControl, [], {type:'checkbox'})}
        </div>
        <div>
            <b>My professional skills</b>: {createField('textarea', 'My professional skills', 'lookingForAJobDescription', FormControl, [])}
        </div>
        <div>
            <b>About Me</b>: {createField('textarea', 'About me', 'AboutMe', FormControl,[])}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <div key={key}>
                <b>{key}: {createField('input', key,'contacts.' + key, FormControl, [], {key:key})}</b>
            </div>
        })}
            {error && <div className={style.formError}>{error}</div>}
        </div>
        {isOwner &&
        <button>Save</button>}
    </form>
}
const ProfileDataFormReduxForm = reduxForm({form: 'editProfile'})(ProfileDataForm);
export default ProfileDataFormReduxForm;