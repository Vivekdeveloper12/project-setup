import { _get, _post, _put, _patch, _delete } from './apiMethods'

export const API_INITIAL = process.env.REACT_APP_API_INITIAL

export const signIn = async (data) => {
    let url = API_INITIAL + '/signin'
    return await _post(url, data)
}
export const signUp = async (data) => {
    let url = API_INITIAL + '/signup'
    return await _post(url, data)
}

export const getProfile = async () => {
    let url = API_INITIAL + '/profile'
    return await _get(url)
}


