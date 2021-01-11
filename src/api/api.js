import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': 'f6745e3b-83df-4fd3-9261-73f7be906e05'}
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => {
                    return response.data})
        )
    },
    followUser(userId) {
        return (
            instance.post(`follow/${userId}`)
                .then(response => {
                    return response.data})
        )
    },
    unFollowUser(userId) {
        return (
            instance.delete(`follow/${userId}`)
                .then(response => {
                    return response.data})
        )
    },
    getAuth() {
        return (
            instance.get(`auth/me`)
                .then(response => {
                    return response.data})
        )
    }
}

/*export const getUsers = (currentPage, pageSize) => {
    return (
        instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    )
}*/
/*export const followUser = (userId) => {
    return (
        instance.post(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    )
}*/
/*export const unFollowUser = (userId) => {
    return (
        instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    )
}*/

