import React from 'react'
import { Header } from './components/Header'
import { AuthProvider } from './context/auth-context'

export default function App() {
    return (
        <>
            <AuthProvider>
                <Header />
            </AuthProvider>
        </>
    )
}
