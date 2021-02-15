import {authAPI, securityAPI} from "../api/api";

type SetUserDataType = {
    type: typeof SET_USER_DATA,
    payload: {
        id: null | number,
        email: null | string,
        login: null | string,
        isAuth: boolean
    }
}
type GetCaptchaUplType = {
    type: typeof GET_CAPTCHA_URL,
    payload: { captchaUrl: string }
}
type authActionTypes =  SetUserDataType | GetCaptchaUplType
const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL = 'GET_CAPTCHA_URL';

type InitialStateType = {
    id: null | number,
    email: null | string,
    login: null | string,
    isFetching: boolean | null,
    isAuth: boolean,
    password: null | string,
    rememberMe: boolean,
    captchaUrl: null | string
}
let initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    password: null,
    rememberMe: false,
    captchaUrl: null
}
const authReducer = (state = initialState, action: authActionTypes): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}
export const setAuthUserData = (id:number | null, email:string | null, login:string | null, isAuth:boolean): SetUserDataType => ({type: SET_USER_DATA, payload: {id, email, login, isAuth}})
export const getCaptchaUrlSuccess = (captchaUrl:string): GetCaptchaUplType => ({type: GET_CAPTCHA_URL, payload: {captchaUrl}})

export const getAuthUserData = () => async (dispatch:any) => {

      let response = await authAPI.me()
                if(response.resultCode === 0) {
                    let {id, email, login} = response.data
                    dispatch(setAuthUserData(id, email, login, true))
                }
}
export const login = (email: string, password:string, rememberMe:boolean, captcha:string) => async (dispatch:any) => {

    let response = await authAPI.login(email, password, rememberMe, captcha)
                if(response.data.resultCode === 0) {
                    dispatch(getAuthUserData())
                } else {
                    if(response.data.resultCode === 10){
                        dispatch(getCaptchaUrl())
                    }
                    let message:string = response.data.messages.length > 0 ? response.data.messages[0] : "Some Error"
                    return Promise.reject(message)
                }
}
export const getCaptchaUrl = () => async (dispatch:any) => {

    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl:string = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))

}
export const logout = () => async (dispatch:any) => {

        let response = await authAPI.logout()
                if(response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
}

export default authReducer;