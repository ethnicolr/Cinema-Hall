import React, { useEffect } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useForm } from '../hooks/useForm'
import { RE_EMAIL } from '../utils'
import { Modal } from './Modal'

const stateScheme = {
    email: {
        required: true,
        validator: {
            func: (value: string, compareField?: string) =>
                !RE_EMAIL.test(value),
            error: 'Некорректный email',
        },
    },
    password: {
        required: true,
    },
}

function LoginModal() {
    const { login } = useAuth()
    const {
        values,
        errors,
        handleChange,
        handleOnBlur,
        fieldDirty,
        formDisabled,
    } = useForm(stateScheme, login)

    return (
        <Modal title='Вход в аккаунт' buttonText='Вход'>
            <form noValidate name='login'>
                <div className='mt-2 rounded-md'>
                    <input
                        aria-label='Email address'
                        name='email'
                        type='email'
                        className='formField'
                        placeholder='e-mail'
                        onChange={handleChange}
                        onBlur={handleOnBlur}
                        value={values.email}
                    />
                    {errors.email && fieldDirty.email && (
                        <span className='errorMessage'>{errors.email}</span>
                    )}
                </div>
                <div className='mt-2 rounded-md'>
                    <input
                        aria-label='Password'
                        name='password'
                        type='password'
                        className='formField'
                        placeholder='пароль'
                        onChange={handleChange}
                        onBlur={handleOnBlur}
                        value={values.password}
                    />
                    {errors.password && fieldDirty.password && (
                        <span className='errorMessage'>{errors.password}</span>
                    )}
                </div>
                <div className='mt-6 text-center'>
                    <span className='errorMessage serverError'></span>
                    <button
                        type='submit'
                        className='mt-4 submitButton'
                        disabled={formDisabled}
                    >
                        Вход
                    </button>
                </div>
            </form>
        </Modal>
    )
}

export { LoginModal }
