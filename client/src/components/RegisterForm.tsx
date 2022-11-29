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
interface Props {
    onSubmit: (...agrs: any) => Promise<string | object>
}

function RegisterForm({ onSubmit }: Props) {
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
        <form name='registration' noValidate onSubmit={handleOnSubmit}>
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

            <div className='mt-2 rounded-md'>
                <input
                    aria-label='Password'
                    name='confirmPassword'
                    type='password'
                    className='formField'
                    placeholder='повторите пароль'
                    onChange={handleChange}
                    onBlur={handleOnBlur}
                    value={values.confirmPassword}
                />
                {errorsFields.confirmPassword && fieldDirty.confirmPassword && (
                    <span className='errorMessage'>
                        {errorsFields.confirmPassword}
                    </span>
                )}
            </div>

            <div className='mt-6'>
                {errorSubmit && (
                    <span className='errorMessage serverError'>
                        {errorSubmit}
                    </span>
                )}
                <button
                    type='submit'
                    className='submitButton'
                    disabled={formDisabled}
                >
                    Регистрация
                </button>
            </div>
        </form>
    )
}

export { RegisterForm }
