import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
let initialState = {
    postsData: [
        {id: 1, post: 'New Post', likesCounter: 10},
        {id: 2, post: 'Second Post', likesCounter: 12},
        {id: 3, post: 'Third Post', likesCounter: 30}
    ],
    isFetching: false,
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST':
            return {...state, postsData: [...state.postsData, {id:5, post: action.newPostText, likesCounter: 0}]};
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
        default:
            return state;
    }
}
export const addPostAC = (newPostText) => ({type: ADD_POST , newPostText})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})

export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }
}
export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setUserStatus(response.data))
            })
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if(response.data.resultCode !== 1 ){
                dispatch(setUserStatus(status))
            }})
    }
}
export default profileReducer;