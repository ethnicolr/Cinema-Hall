import React, { createContext, useContext, useEffect } from 'react'
import { useAsync } from '../hooks/useAsync'
import * as auth from './../auth-provider'

interface AuthContextInterface {
    account: auth.UserResponse | null
    login: (form: auth.Account) => void
    register: (form: auth.Account) => void
    logout: () => void
    reset: () => void
    isIdle: boolean
    isLoading: boolean
    isError: boolean
    isSuccess: boolean
    error: string | null
    status: string
}

interface Props {
    children: React.ReactNode
}

const AuthContext = createContext<AuthContextInterface>(
    {} as AuthContextInterface
)

async function bootstrapAppData() {
    const token = auth.getToken()
    if (token) {
        return await auth.client('auth/profile', { token })
    } else {
        return Promise.reject(null)
    }
}

function AuthProvider({ children }: Props) {
    const {
        data: account,
        run,
        reset,
        isIdle,
        isLoading,
        isError,
        isSuccess,
        error,
        status,
    } = useAsync<auth.UserResponse>()

    useEffect(() => {
        run(bootstrapAppData())
    }, [])

    const login = (form: auth.Account) => run(auth.login(form))

    const register = (form: auth.Account) => run(auth.register(form))

    const logout = () => {
        auth.logout()
        reset()
    }

    const value = {
        account,
        register,
        login,
        logout,
        reset,
        isIdle,
        isLoading,
        isError,
        isSuccess,
        error,
        status,
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export { AuthProvider, AuthContext }
