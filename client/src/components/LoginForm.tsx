import React, { useEffect } from 'react'
import { useForm } from '../hooks/useForm'
import { RE_EMAIL } from '../utils'

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

interface Props {
    onSubmit: (...agrs: any) => Promise<string | object>
}

function LoginForm({ onSubmit }: Props) {
    const {
        values,
        errors: errorsFields,
        handleChange,
        handleOnBlur,
        fieldDirty,
        formDisabled,
        handleOnSubmit,
        errorSubmit,
    } = useForm(stateScheme, onSubmit)

    return (
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
                    <span className='errorMessage'>{errorsFields.email}</span>
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
    )
}

export { LoginForm }
