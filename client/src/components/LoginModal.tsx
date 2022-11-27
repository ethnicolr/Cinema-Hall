import React, { useEffect, useState } from 'react'
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
    const { login, error: errorSubmit, isSuccess, reset } = useAuth()
    const {
        values,
        errors: errorsFields,
        handleChange,
        handleOnBlur,
        fieldDirty,
        formDisabled,
        handleOnSubmit,
        clearForm,
    } = useForm(stateScheme, login)

    useEffect(() => {
        if (isSuccess) {
            clearForm()
        }
    }, [isSuccess])

    // useEffect(() => {
    //     if (errorSubmit) {
    //         reset()
    //     }
    // }, [errorSubmit, values])

    return (
        <Modal title='Вход в аккаунт' buttonText='Вход' closeEvent={clearForm}>
            <form noValidate name='login' onSubmit={handleOnSubmit}>
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
                    {errorsFields.email && fieldDirty.email && (
                        <span className='errorMessage'>
                            {errorsFields.email}
                        </span>
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
                    {errorsFields.password && fieldDirty.password && (
                        <span className='errorMessage'>
                            {errorsFields.password}
                        </span>
                    )}
                </div>
                <div className='mt-6 text-center'>
                    {errorSubmit && (
                        <span className='errorMessage serverError'>
                            {errorSubmit}
                        </span>
                    )}
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
