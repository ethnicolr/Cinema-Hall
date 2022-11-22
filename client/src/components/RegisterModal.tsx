import React from 'react'

function RegisterModal() {
    return (
        <details className='dialog registration'>
            <summary
                role='button'
                className='text-base leading-6 font-medium focus:outline-none hover:underline transition ease-in-out duration-150'
            >
                Регистрация
            </summary>

            <div
                className='modal-dialog bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 translate-y-4 sm:translate-y-0 ease-out duration-300 sm:scale-95 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg max-w-sm w-full'
                role='document'
            >
                <div className='block absolute top-0 right-0 pt-4 pr-4'>
                    <button
                        type='button'
                        className='text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150'
                        aria-label='close'
                    >
                        <svg
                            className='h-6 w-6'
                            stroke='currentColor'
                            fill='none'
                            viewBox='0 0 24 24'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M6 18L18 6M6 6l12 12'
                            />
                        </svg>
                    </button>
                </div>
                <div className='flex w-full items-center justify-center bg-gray-50'>
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
                        <form
                            name='registration'
                            action='#'
                            method='POST'
                            noValidate
                        >
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
                    </div>
                </div>
            </div>
        </details>
    )
}

export { RegisterModal }
