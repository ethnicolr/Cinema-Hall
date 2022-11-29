import React, { createContext, useState } from 'react'

interface Props {
    children: React.ReactNode
}

interface ModalContextInterface {
    loginOpen: boolean
    singUpOpen: boolean
    restorePasswordOpen: boolean
    resetPasswordOpen: boolean
    setLoginOpen: React.Dispatch<React.SetStateAction<boolean>>
    setSingUpOpen: React.Dispatch<React.SetStateAction<boolean>>
    setRestorePasswordOpen: React.Dispatch<React.SetStateAction<boolean>>
    setResetPasswordOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalContext = createContext<ModalContextInterface>(
    {} as ModalContextInterface
)

function ModalProvider({ children }: Props) {
    const [loginOpen, setLoginOpen] = useState(false)
    const [singUpOpen, setSingUpOpen] = useState(false)
    const [restorePasswordOpen, setRestorePasswordOpen] = useState(false)
    const [resetPasswordOpen, setResetPasswordOpen] = useState(false)

    const value = {
        loginOpen,
        singUpOpen,
        restorePasswordOpen,
        setLoginOpen,
        setSingUpOpen,
        setRestorePasswordOpen,
        resetPasswordOpen,
        setResetPasswordOpen,
    }

    return (
        <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
    )
}

export { ModalProvider, ModalContext }
