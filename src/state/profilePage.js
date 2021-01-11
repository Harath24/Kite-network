import {usersAPI} from "../api/api";
import {setUsers} from "./usersReducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
let initialState = {
    postsData: [
        {id: 1, post: 'New Post', likesCounter: 10},
        {id: 2, post: 'Second Post', likesCounter: 12},
        {id: 3, post: 'Third Post', likesCounter: 30}
    ],
    newPostText: '',
    isFetching: false,
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST':
            return {...state, newPostText: '', postsData: [...state.postsData, {id:5, post: state.newPostText, likesCounter: 0}]};
        case 'UPDATE-NEW-POST-TEXT':
            return {...state, newPostText: action.newText};
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }
        default:
            return state;
    }
}
export const addPostAC = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText:text})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }
}
export default profileReducer;