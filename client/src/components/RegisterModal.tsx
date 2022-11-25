import React, { useEffect, useRef, useState } from 'react'
import { useForm } from '../hooks/useForm'
import { RE_EMAIL } from '../utils'
import { Modal } from './Modal'

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
            func(value: string, compare?: string | null) {
                if (value !== compare) {
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
    const {
        values,
        errors,
        handleChange,
        handleOnBlur,
        fieldDirty,
        formDisabled,
    } = useForm(stateScheme)
    return (
        <Modal title='Регистрация в системе' buttonText='Регистрация'>
            <form name='registration' action='#' method='POST' noValidate>
                <div className='mt-2 rounded-md'>
                    <input
                        aria-label='Email address'
                        name='email'
                        type='email'
                        className='formField'
                        placeholder='e-mail'
                    />
                    <span className='errorMessage'></span>
                </div>

                <div className='mt-2 rounded-md'>
                    <input
                        aria-label='Password'
                        name='password'
                        type='password'
                        className='formField'
                        placeholder='пароль'
                    />
                    <span className='errorMessage'></span>
                </div>

                <div className='mt-2 rounded-md'>
                    <input
                        aria-label='Password'
                        name='passwordRepeat'
                        type='password'
                        className='formField'
                        placeholder='повторите пароль'
                    />
                    <span className='errorMessage'></span>
                </div>

                <div className='mt-6'>
                    <span className='errorMessage serverError'></span>
                    <button type='submit' className='submitButton'>
                        Регистрация
                    </button>
                </div>
            </form>
        </Modal>
    )
}

export { RegisterModal }
