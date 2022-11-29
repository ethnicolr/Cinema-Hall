import React from 'react'
import { useModal } from '../hooks/useModal'
import { ModalWrapper } from './ModalWrapper'

function ResetPasswordModal() {
    const { resetPasswordOpen, setResetPasswordOpen } = useModal()
    return (
        <ModalWrapper
            title='Reset Password'
            toggleModal={setResetPasswordOpen}
            isOpen={resetPasswordOpen}
        >
            <div className='flex w-full items-center justify-center '>
                <div className='max-w-lg p-6 w-full'>
                    <div className='text-center'>
                        <a href='./index.html'>
                            <img
                                className='h-24 w-auto inline-block'
                                src='assets/img/g12.png'
                            />
                        </a>
                        <h2 className='mt-6 text-center text-base md:text-2xl leading-9 font-extrabold text-gray-900'>
                            Восстановление пароля
                        </h2>
                        <span className='text-gray-700 text-sm md:text-base'>
                            Введите email и следуйте инструкциям, отправленным
                            на почту
                        </span>
                    </div>
                    <form name='restorePasswordStepOne' noValidate>
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

                        <div className='mt-6'>
                            <span className='errorMessage serverError'></span>
                            <button type='submit' className='submitButton'>
                                <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                                    <svg
                                        className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150'
                                        fill='currentColor'
                                        viewBox='0 0 20 20'
                                    >
                                        <path
                                            fillRule='evenodd'
                                            d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z'
                                            clipRule='evenodd'
                                        />
                                    </svg>
                                </span>
                                Отправить
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </ModalWrapper>
    )
}

export { ResetPasswordModal }
