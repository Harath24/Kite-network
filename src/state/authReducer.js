import {authAPI, securityAPI} from "../api/api";


const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL = 'GET_CAPTCHA_URL';

let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    password: null,
    rememberMe: false,
    captchaUrl: null
}
const authReducer = (state = initialState, action) => {
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
export const setAuthUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, payload: {id, email, login, isAuth}})

export const getCaptchaUrlSuccess = (captchaUrl) => ({type: GET_CAPTCHA_URL, payload: {captchaUrl}})

export const getAuthUserData = () => async (dispatch) => {

      let response = await authAPI.me()
                if(response.resultCode === 0) {
                    let {id, email, login} = response.data
                    dispatch(setAuthUserData(id, email, login, true))
                }
}
export const login = (email, password, rememberMe, captcha) => async (dispatch) => {

    let response = await authAPI.login(email, password, rememberMe, captcha)
                if(response.data.resultCode === 0) {
                    dispatch(getAuthUserData())
                } else {
                    if(response.data.resultCode === 10){
                        dispatch(getCaptchaUrl())
                    }
                    let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some Error"
                    return Promise.reject(message)
                }
}
export const getCaptchaUrl = () => async (dispatch) => {

    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))

}
export const logout = () => async (dispatch) => {

        let response = await authAPI.logout()
                if(response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
}

export default authReducer;