import {rerenderEntireTree} from "../rerender";


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
        ]
    },
    profilePage : {
        postsData: [
            {id: 1, post: 'New Post', likesCounter: 10},
            {id: 2, post: 'Second Post', likesCounter: 12},
            {id: 3, post: 'Third Post', likesCounter: 30},
        ]
    },
    sideBar :
        [{id: '2', name: 'Chika', url : 'https://i.pinimg.com/736x/3d/b7/7d/3db77df2a496f33b09c1861acc7a7b1c.jpg'},
        {id: '3', name: 'Bro', url : 'https://www.worldphoto.org/sites/default/files/default-media/Piercy.jpg'},
        {id: '4', name: 'Alex', url : 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Poster-sized_portrait_of_Barack_Obama.jpg'}
        ]

}
export let addPost = (postMessage) => {
    let newPost = {
        id : 5,
        post : postMessage,
        likesCounter : 0
    }
    state.profilePage.postsData.push(newPost)
    rerenderEntireTree(state)
}
export let addNewMessage = (message) => {
    let newMessage = {
        id : 5,
        message : message
    }
    state.dialogPage.messagesData.push(newMessage)
    rerenderEntireTree(state)
}

export default state;
