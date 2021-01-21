import profileReducer, {addPostAC, deletePost} from "./profileReducer";
let state = {
    postsData: [
        {id: 1, post: 'New Post', likesCounter: 10},
        {id: 2, post: 'Second Post', likesCounter: 12},
        {id: 3, post: 'Third Post', likesCounter: 30}
    ]
}
it('Length of post should be incremented', () => {
    let action = addPostAC('Tested post')

    let newState = profileReducer(state, action)

    expect(newState.postsData.length === 4)
})
it('Message of new post should be Tested post', () => {
    let action = addPostAC('Tested post')

    let newState = profileReducer(state, action)

    expect(newState.postsData[3].post).toBe('Tested post')
})
it('After deleting length should be decremented ', () => {
    let action = deletePost(1)

    let newState = profileReducer(state, action)

    expect(newState.postsData.length).toBe(2)
})