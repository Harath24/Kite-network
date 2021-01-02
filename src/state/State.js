let store = {
    _state: {
        dialogPage : {
            dialogsData: [
                {id: '1', name: 'Leo', url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4lRdbb-GfTkirwRnibu2vO_xkDv-q_ce8fA&usqp=CAU'},
                {id: '2', name: 'Chika', url : 'https://i.pinimg.com/736x/3d/b7/7d/3db77df2a496f33b09c1861acc7a7b1c.jpg'},
                {id: '3', name: 'Bro', url : 'https://www.worldphoto.org/sites/default/files/default-media/Piercy.jpg'},
                {id: '4', name: 'Alex', url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9HvhUfcjWOFaISAirSCG2xfdfOMONoC7-FA&usqp=CAU'},
                {id: '5', name: 'Demon', url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoYg_loo5GQu9tChS6_zc24E4zgToC6-WAdQ&usqp=CAU'}
            ],
            messagesData: [
                {id: 1, message: 'Hey!'},
                {id: 2, message: 'What is your name?'},
                {id: 3, message: 'Tonny!'},
                {id: 4, message: 'Fuck you Tonny!'}
            ],
            newMessageText: ''
        },
        profilePage : {
            postsData: [
                {id: 1, post: 'New Post', likesCounter: 10},
                {id: 2, post: 'Second Post', likesCounter: 12},
                {id: 3, post: 'Third Post', likesCounter: 30},
            ],
            newPostText : ''
        },
        sideBar :
            [{id: '2', name: 'Chika', url : 'https://i.pinimg.com/736x/3d/b7/7d/3db77df2a496f33b09c1861acc7a7b1c.jpg'},
                {id: '3', name: 'Bro', url : 'https://www.worldphoto.org/sites/default/files/default-media/Piercy.jpg'},
                {id: '4', name: 'Alex', url : 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Poster-sized_portrait_of_Barack_Obama.jpg'}
            ]
    },
    _callSubscriber() {
        console.log('')
    },

    getState() {
      return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer

    },
/*    addPost() {
        let newPost = {
            id : 5,
            post : this._state.profilePage.newPostText,
            likesCounter : 0
        }
        this._state.profilePage.postsData.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },*/
/*    addNewMessage() {
        let newMessage = {
            id : 5,
            message : this._state.dialogPage.newMessageText
        }
        this._state.dialogPage.messagesData.push(newMessage)
        this._state.dialogPage.newMessageText = ''
        this._callSubscriber(this._state)
    },*/
/*    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },*/
/*    updateNewMessageText(newMessage) {
        this._state.dialogPage.newMessageText = newMessage
        this._callSubscriber(this._state)
    },*/
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id : 5,
                post : this._state.profilePage.newPostText,
                likesCounter : 0
            }
            this._state.profilePage.postsData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'ADD-NEW-MESSAGE') {
            let newMessage = {
                id : 5,
                message : this._state.dialogPage.newMessageText
            }
            this._state.dialogPage.messagesData.push(newMessage)
            this._state.dialogPage.newMessageText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogPage.newMessageText = action.newMessage
            this._callSubscriber(this._state)
        }
    }
}
export default store;

/*let rerenderEntireTree = () => {

}
let state = {
    dialogPage : {
        dialogsData: [
            {id: '1', name: 'Leo', url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4lRdbb-GfTkirwRnibu2vO_xkDv-q_ce8fA&usqp=CAU'},
            {id: '2', name: 'Chika', url : 'https://i.pinimg.com/736x/3d/b7/7d/3db77df2a496f33b09c1861acc7a7b1c.jpg'},
            {id: '3', name: 'Bro', url : 'https://www.worldphoto.org/sites/default/files/default-media/Piercy.jpg'},
            {id: '4', name: 'Alex', url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9HvhUfcjWOFaISAirSCG2xfdfOMONoC7-FA&usqp=CAU'},
            {id: '5', name: 'Demon', url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoYg_loo5GQu9tChS6_zc24E4zgToC6-WAdQ&usqp=CAU'}
        ],
        messagesData: [
            {id: 1, message: 'Hey!'},
            {id: 2, message: 'What is your name?'},
            {id: 3, message: 'Tonny!'},
            {id: 4, message: 'Fuck you Tonny!'}
        ],
        newMessageText: ''
    },
    profilePage : {
        postsData: [
            {id: 1, post: 'New Post', likesCounter: 10},
            {id: 2, post: 'Second Post', likesCounter: 12},
            {id: 3, post: 'Third Post', likesCounter: 30},
        ],
        newPostText : ''
    },
    sideBar :
        [{id: '2', name: 'Chika', url : 'https://i.pinimg.com/736x/3d/b7/7d/3db77df2a496f33b09c1861acc7a7b1c.jpg'},
        {id: '3', name: 'Bro', url : 'https://www.worldphoto.org/sites/default/files/default-media/Piercy.jpg'},
        {id: '4', name: 'Alex', url : 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Poster-sized_portrait_of_Barack_Obama.jpg'}
        ]

}
export let addPost = () => {
    let newPost = {
        id : 5,
        post : state.profilePage.newPostText,
        likesCounter : 0
    }
    state.profilePage.postsData.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree()
}
export let addNewMessage = () => {
    let newMessage = {
        id : 5,
        message : state.dialogPage.newMessageText
    }
    state.dialogPage.messagesData.push(newMessage)
    state.dialogPage.newMessageText = ''
    rerenderEntireTree()
}
export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree()
}
export let updateNewMessageText = (newMessage) => {
    state.dialogPage.newMessageText = newMessage
    rerenderEntireTree()
}
export const subscribe = (observer) => {
    rerenderEntireTree = observer
}

export default state;*/
