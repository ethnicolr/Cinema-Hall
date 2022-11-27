import React, { useEffect, useState } from 'react'
import { useAuth } from '../hooks/useAuth'

interface Props {
    buttonText: string
    title: string
    closeEvent?: () => void
    children?: React.ReactNode
}

function Modal({ buttonText, title, children, closeEvent }: Props) {
    const { isSuccess, error: errorSubmit, reset } = useAuth()
    const [isOpen, setOpen] = useState(false)

    const toggleModal = (
        e: React.MouseEvent<HTMLDetailsElement, MouseEvent>
    ) => {
        const element = (e.target as HTMLElement).tagName
        if (element === 'SUMMARY' || element === 'svg') {
            e.preventDefault()
            setOpen((open) => !open)
        }
    }

    useEffect(() => {
        const handleKeyUp = (e: KeyboardEvent) => {
            const { key } = e
            if (key === 'Escape') {
                e.preventDefault()
                setOpen(false)
            }
        }
        document.addEventListener('keyup', handleKeyUp)
        return () => {
            document.removeEventListener('keyup', handleKeyUp)
        }
    }, [errorSubmit])

    useEffect(() => {
        if (isSuccess) {
            setOpen(false)
        }
    }, [isSuccess])

    useEffect(() => {
        if (!isOpen) {
            if (errorSubmit) reset()
            if (closeEvent) closeEvent()
        }
    }, [isOpen])

    return (
        <div>
            <details
                className='dialog registration'
                open={isOpen}
                onClick={toggleModal}
            >
                <summary
                    role='button'
                    className='text-base leading-6 font-medium focus:outline-none hover:underline transition ease-in-out duration-150'
                >
                    {buttonText}
                </summary>

                <div
                    className='modal-dialog bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 translate-y-4 sm:translate-y-0 ease-out duration-300 sm:scale-95 rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg max-w-sm w-full'
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
                    <div className='flex w-full items-center justify-center'>
                        <div className='max-w-lg p-6 w-full'>
                            <div className='text-center'>
                                <a href='./index.html'>
                                    <img
                                        className='h-24 w-auto inline-block'
                                        src='../assets/img/g12.png'
                                    />
                                </a>
                                <h2 className='mt-6 text-center text-base md:text-2xl leading-9 font-extrabold text-gray-900'>
                                    {title}
                                </h2>
                            </div>
                            {children}
                        </div>
                    </div>
                </div>
            </details>
        </div>
    )
}

export { Modal }
