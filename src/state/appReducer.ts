import {getAuthUserData} from "./authReducer";

export type InitialStateType = {
    initialized: boolean
}

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState: InitialStateType = {
    initialized: false
}
const appReducer = (state = initialState, action:InitializedSuccessActionType): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

type InitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}
export const initializedSuccess = ():InitializedSuccessActionType => ({type: INITIALIZED_SUCCESS})

export const initializeApp = () => {
    return (dispatch:any) => {
       let promise = dispatch(getAuthUserData())
        //dispatch(something())
        //dispatch(somethingElse())
        Promise.all([promise])
            .then( () => {
                dispatch(initializedSuccess())
            })

    }
}


export default appReducer;