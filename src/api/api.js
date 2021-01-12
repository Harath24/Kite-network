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
    getProfile(userId) {
        console.warn('Obsolete method. Please use profileAPI object')
        return (
            profileAPI.getProfile(userId)
        )
    }
}
export const profileAPI = {
    getProfile(userId) {
        return (
            instance.get(`profile/${userId}`)
        )
    },
    getStatus(userId) {
       return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
       return instance.put(`profile/status/`, {status: status})
    }
}
export const authAPI = {

    me() {
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

