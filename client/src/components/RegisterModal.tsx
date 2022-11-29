import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { useModal } from '../hooks/useModal'
import { RE_EMAIL } from '../utils'
import { ModalWrapper } from './ModalWrapper'
import { RegisterForm } from './RegisterForm'

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
        validator: {
            func(value: string) {
                if (value.length < 6) {
                    this.error =
                        'Слишком короткий пароль. Минимальная длина - 6 символов'
                    return true
                }
                return false
            },
            error: 'Некорректный email',
        },
    },
    confirmPassword: {
        required: true,
        compareField: 'password',
        validator: {
            func(value: string, compare?: string) {
                if (value !== compare) {
                    console.log('err')
                    console.log(this.error)
                    this.error = 'Пароли не совпадают'
                    return true
                }
                return false
            },
            error: 'Некорректный email',
        },
    },
}

function RegisterModal() {
    const { singUpOpen, setSingUpOpen } = useModal()
    const { register } = useAuth()

    const handleSubmit = async (
        values: Record<keyof typeof stateScheme, string>
    ) => {
        const response = register(values)
        if (typeof response !== 'string') {
            setSingUpOpen(false)
        }
        return response
    }
    return (
        <ModalWrapper
            toggleModal={setSingUpOpen}
            isOpen={singUpOpen}
            buttonText={'Регистрация'}
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
                        Регистрация в системе
                    </h2>
                </div>
                <RegisterForm onSubmit={handleSubmit} />
            </div>
        </ModalWrapper>
    )
}

export { RegisterModal }
