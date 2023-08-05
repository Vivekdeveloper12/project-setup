import React, { createContext, useEffect, useReducer } from 'react'
import { redirect } from "react-router-dom";
import axios from '../axios'
import { signIn, signUp, getProfile } from '../Apis'

const initialState = {
    isAuthenticated: false,
    isInitialised: false,
    user: null,
}

const setSession = (token) => {
    if (token) {
        localStorage.setItem('token', token)
        axios.defaults.headers.common.Authorization = `${token}`
    } else {
        localStorage.removeItem('token')
        delete axios.defaults.headers.common.Authorization
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'INIT': {
            const { isAuthenticated, user } = action.payload
            return {
                ...state,
                isAuthenticated,
                isInitialised: true,
                user,
            }
        }
        case 'LOGIN': {
            const { user } = action.payload
            return {
                ...state,
                isAuthenticated: true,
                user,
            }
        }
        case 'LOGOUT': {
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            }
        }
        case 'REGISTER': {
            const { user } = action.payload

            return {
                ...state,
                isAuthenticated: true,
                user,
            }
        }
        default: {
            return { ...state }
        }
    }
}

const AuthContext = createContext({
    ...initialState,
    login: () => Promise.resolve(),
    cloneLogin: () => Promise.response(),
    logout: () => { },
    register: () => Promise.resolve(),
})

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const cloneLogin = async (data) => {
        setSession(data.token)
        dispatch({
            type: 'LOGIN',
            payload: { user: data}
        })
    }
    const login = async(data) => {
        const response = await signIn(data)
        const { token, id } = response.data.data
        setSession(token)
        dispatch({
            type: 'LOGIN',
            payload: {
                user: response.data.data,
            },
        })
        return response.data
    }

    const register = async(data) => {
        const response = await signUp(data)
        const { token, id } = response.data.data
        setSession(token)
        dispatch({
            type: 'REGISTER',
            payload: {
                user: id,
            },
        })
    }

    const logout = () => {
        setSession(null)
        dispatch({ type: 'LOGOUT' })
        redirect("/");
    }

    useEffect(() => {
        (async () => {
            try{
                const token = window.localStorage.getItem('token')
                if (token) {
                    setSession(token)
                    window.addEventListener("load", async () => {
                        const response = await getProfile()
                        dispatch({
                            type: 'INIT',
                            payload: {
                                isAuthenticated: true,
                                user: response.data.data,
                            },
                    })
                    })
                } else {
                    dispatch({
                        type: 'INIT',
                        payload: {
                            isAuthenticated: false,
                            user: null,
                        },
                    })
                }
    
            } catch(e){
                dispatch({
                    type: 'INIT',
                    payload: {
                        isAuthenticated: false,
                        user: null,
                    },
                })
            }
            
        })()
    }, [])

    return (
        <AuthContext.Provider
            value={{
                ...state,
                login,
                cloneLogin,
                logout,
                register,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext