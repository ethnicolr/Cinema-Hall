import React from 'react'
import { useModal } from '../hooks/useModal'
import { ModalWrapper } from './ModalWrapper'

function RestorePasswordModal() {
    const { restorePasswordOpen, setRestorePasswordOpen } = useModal()
    return (
        <ModalWrapper
            title='Restore Password'
            toggleModal={setRestorePasswordOpen}
            isOpen={restorePasswordOpen}
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
                            Введите новый пароль
                        </span>
                    </div>
                    <form name='restorePasswordStepTwo' noValidate>
                        <div className='mt-2 rounded-md'>
                            <input
                                aria-label='Password'
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
                                Отправить
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </ModalWrapper>
    )
}
export { RestorePasswordModal }
