import React, { createContext, useEffect, useState } from 'react'

interface Props {
    children: React.ReactNode
}

interface ModalContextInterface {
    loginOpen: boolean
    singUpOpen: boolean
    restorePasswordOpen: boolean
    resetPasswordOpen: boolean
    textModal: null | string
    setTextModal: React.Dispatch<React.SetStateAction<string | null>>
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
    const [textModal, setTextModal] = useState<null | string>(null)

    useEffect(() => {
        if (textModal && !loginOpen) setTextModal(null)
    }, [textModal, loginOpen])

    const value = {
        loginOpen,
        singUpOpen,
        restorePasswordOpen,
        setLoginOpen,
        setSingUpOpen,
        setRestorePasswordOpen,
        resetPasswordOpen,
        setResetPasswordOpen,
        setTextModal,
        textModal,
    }

    return (
        <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
    )
}

export { ModalProvider, ModalContext }
