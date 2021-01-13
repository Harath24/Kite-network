const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
let initialState = {
    dialogsData: [
        {
            id: '1',
            name: 'Leo',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4lRdbb-GfTkirwRnibu2vO_xkDv-q_ce8fA&usqp=CAU'
        },
        {
            id: '2',
            name: 'Chika',
            url: 'https://i.pinimg.com/736x/3d/b7/7d/3db77df2a496f33b09c1861acc7a7b1c.jpg'
        },
        {id: '3', name: 'Bro', url: 'https://www.worldphoto.org/sites/default/files/default-media/Piercy.jpg'},
        {
            id: '4',
            name: 'Alex',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9HvhUfcjWOFaISAirSCG2xfdfOMONoC7-FA&usqp=CAU'
        },
        {
            id: '5',
            name: 'Demon',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoYg_loo5GQu9tChS6_zc24E4zgToC6-WAdQ&usqp=CAU'
        }
    ],
    messagesData: [
        {id: 1, message: 'Hey!'},
        {id: 2, message: 'What is your name?'},
        {id: 3, message: 'Tonny!'},
        {id: 4, message: 'Fuck you Tonny!'}
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-NEW-MESSAGE':
            return {...state, messagesData: [...state.messagesData, {id:5, message: action.newMessageText}]};
        default:
            return state;
    }
}
export const addNewMessageActionCreator = (newMessageText) => ({type: ADD_NEW_MESSAGE, newMessageText})

export default dialogsReducer;