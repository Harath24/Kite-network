import React from 'react'
import {Form, Formik} from 'formik'
import {LoginSchema} from "../../../utils/validators/validator";
import {EditProfileTextField} from "../../common/formsControl/FormsControlFormik";
import style from "../../common/formsControl/FormsControl.module.css";

const ProfileDataFormFormik = ({profile, onSubmit, error}) => {
    return (
        <Formik initialValues={{
            fullName: '',
            lookingForAJob: false,
            lookingForAJobDescription: '',
            aboutMe: '',
            contacts: Object.keys(profile.contacts).map(key => key),
            submitBtn: '',

        }}
                validateOnBlur
                onSubmit={console.log('Save')}
                validationSchema={LoginSchema}>
            {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                <Form>
                    <EditProfileTextField name={'fullName'} label={'Full name'} type={'text'}
                                          placeholder={'Enter your name...'} values={values.fullName}
                                          handleSubmit={onSubmit} handleChange={handleChange}/>
                    <EditProfileTextField name={'lookingForAJob'} label={'Looking for a job'}
                                          type={'checkbox'} values={values.lookingForAJob} handleSubmit={onSubmit} handleChange={handleChange}/>
                    <EditProfileTextField name={'lookingForAJobDescription'} label={'My professional skills'}
                                          type={'text'} placeholder={'Your professional skills...'} values={values.lookingForAJobDescription}
                                          handleSubmit={onSubmit} handleChange={handleChange}/>
                    <EditProfileTextField name={'aboutMe'} label={'About Me'} type={'text'}
                                          placeholder={'About me...'} values={values.aboutMe}
                                          handleSubmit={onSubmit} handleChange={handleChange}/>
                    <b>Contacts: </b> {Object.keys(profile.contacts).map(key => {
                    return <div key={key}>
                        <b>{<EditProfileTextField name={'contacts.' + key} label={key} placeholder={`Your ${key}...`}
                                                  errors={error} values={values.contacts.key} handleSubmit={onSubmit} handleChange={handleChange}/>}</b>
                    </div>
                })}
                    <button className={style.logoBtn}
                            type={"submit"}>Save
                    </button>
                </Form>
            )}
        </Formik>
    )
}

export default ProfileDataFormFormik;