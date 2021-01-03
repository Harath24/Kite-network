let initialState = {
    sideBar: [
            {id: '2', name: 'Chika', url: 'https://i.pinimg.com/736x/3d/b7/7d/3db77df2a496f33b09c1861acc7a7b1c.jpg'},
            {id: '3', name: 'Bro', url: 'https://www.worldphoto.org/sites/default/files/default-media/Piercy.jpg'},
            {id: '4',name: 'Alex', url: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Poster-sized_portrait_of_Barack_Obama.jpg'}
        ]
}
const sidebarReducer = (state = initialState, action) => {
    return state;
}
export default sidebarReducer;