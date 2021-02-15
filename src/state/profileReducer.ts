import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

type AddPostActionType = {
    type: typeof ADD_POST
    newPostText: string
}
type DeletePostActionType = {
    type: typeof DELETE_POST
    id: number
}
type ToggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
type SetUserStatusActionType = {
    type: typeof SET_USER_STATUS
    status: string
}
type SetUserAvaImageActionType = {
    type: typeof SET_USER_AVA_IMAGE
    image: PhotosType
}
type ProfileActionTypes =
    AddPostActionType
    | DeletePostActionType
    | ToggleIsFetchingActionType
    | SetUserProfileActionType
    | SetUserStatusActionType
    | SetUserAvaImageActionType
const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE_POST';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const SET_USER_AVA_IMAGE = 'SET_USER_AVA_IMAGE';
type PhotosType = {
    small: string | null
    large: string | null
}
type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType

}
export type PostsDataType = Array<{
    id: number
    post: string
    likesCounter: number
}>
export type InitialStateType = {
    postsData: PostsDataType
    isFetching: boolean
    profile: ProfileType | null
    status: string | null
}
let initialState: InitialStateType = {
    postsData: [
        {id: 1, post: 'New Post', likesCounter: 10},
        {id: 2, post: 'Second Post', likesCounter: 12},
        {id: 3, post: 'Third Post', likesCounter: 30}
    ],
    isFetching: false,
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action: ProfileActionTypes): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postsData: [...state.postsData, {id: Math.random(), post: action.newPostText, likesCounter: 0}]
            };
        case DELETE_POST:
            return {...state, postsData: state.postsData.filter(p => p.id !== action.id)}
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }
        case SET_USER_STATUS:
            return {
                ...state, status: action.status
            }
        case SET_USER_AVA_IMAGE:
            return {
                ...state, profile: {...(state.profile), photos: action.image} as ProfileType
            }
        default:
            return state;
    }
}

export const addPostAC = (newPostText: string): AddPostActionType => ({type: ADD_POST, newPostText})
export const deletePost = (id: number): DeletePostActionType => ({type: DELETE_POST, id})
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
})
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (status: string): SetUserStatusActionType => ({type: SET_USER_STATUS, status})
export const setUserAvaImage = (image: PhotosType): SetUserAvaImageActionType => ({type: SET_USER_AVA_IMAGE, image})

export const getUserProfile = (userId: number) => async (dispatch: any) => {
    let response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data))
}
export const getUserStatus = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setUserStatus(response.data))
}
export const updateStatus = (status: string) => async (dispatch: any) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode !== 1) {
        dispatch(setUserStatus(status))
    }
}
export const updateAvaImage = (image: any) => async (dispatch: any) => {
    let response = await profileAPI.updateAvaImage(image)
    if (response.data.resultCode !== 1) {
        dispatch(setUserAvaImage(response.data.data.photos))
    }
}
export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.id
    const response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode !== 1) {
        dispatch(getUserProfile(userId))
    } else {
        let errors = response.data.messages[0].map((el: any) => el.match(/Contacts->(\w+)/)[1].toLocaleLowerCase())
        dispatch(stopSubmit('editProfile', {'contacts': {[errors]: response.data.messages}}))
        return Promise.reject(response.data.messages)
    }
}
export default profileReducer;