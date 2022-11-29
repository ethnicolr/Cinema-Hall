import React from 'react'
import { Header } from './components/Header'
import { AuthProvider } from './context/auth-context'
import { ModalProvider } from './context/modal-context'
import { Main } from './screens/main'

export default function App() {
    return (
        <>
            <ModalProvider>
                <AuthProvider>
                    <Header />
                    <Main />
                </AuthProvider>
            </ModalProvider>
        </>
    )
}
