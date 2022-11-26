import React, { createContext, useContext } from 'react'
import { useAsync } from '../hooks/useAsync'
import * as auth from './../auth-provider'

interface AuthContextInterface {
    account: auth.UserResponse | null
    login: (form: auth.Account) => void
    register: (form: auth.Account) => void
    logout: () => void
}

interface Props {
    children: React.ReactNode
}

const AuthContext = createContext<AuthContextInterface>(
    {} as AuthContextInterface
)

function AuthProvider({ children }: Props) {
    const { data: account, run, reset } = useAsync<auth.UserResponse>()

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
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export { AuthProvider, AuthContext }
