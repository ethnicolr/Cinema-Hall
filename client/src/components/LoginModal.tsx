import React, { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useForm } from '../hooks/useForm'
import { useModal } from '../hooks/useModal'
import { RE_EMAIL } from '../utils'
import { LoginForm } from './LoginForm'
import { ModalWrapper } from './ModalWrapper'

const stateScheme = {
    email: {
        required: true,
        validator: {
            func: (value: string) => !RE_EMAIL.test(value),
            error: 'Некорректный email',
        },
    },
    password: {
        required: true,
    },
}

function LoginModal() {
    const { login } = useAuth()
    const { loginOpen, setLoginOpen, setResetPasswordOpen, textModal } =
        useModal()

    const handleSubmit = async (
        values: Record<keyof typeof stateScheme, string>
    ) => {
        const response = await login(values)
        if (typeof response !== 'string') {
            setLoginOpen(false)
        }
        return response
    }

    const redirectModal = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        e.preventDefault()
        // setResetPasswordOpen(true)
        // setLoginOpen(false)
    }

    return (
        <ModalWrapper
            title='Вход в аккаунт'
            buttonText='Вход'
            toggleModal={setLoginOpen}
            isOpen={loginOpen}
        >
            <div className='max-w-lg p-6 w-full'>
                <div className='text-center'>
                    <a href='./index.html'>
                        <img
                            className='h-24 w-auto inline-block'
                            src='../assets/img/g12.png'
                        />
                    </a>
                    <h2 className='mt-6 text-center text-base md:text-2xl leading-9 font-extrabold text-gray-900'>
                        {textModal || 'Вход в аккаунт'}
                    </h2>
                    <a
                        role='button'
                        id='forgotPasswordButton'
                        className='hover:underline text-active text-base'
                        onClick={redirectModal}
                    >
                        Забыли пароль?
                    </a>
                </div>
                <LoginForm onSubmit={handleSubmit} />
            </div>
        </ModalWrapper>
    )
}

export { LoginModal }
