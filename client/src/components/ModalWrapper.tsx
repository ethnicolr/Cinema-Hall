import React, { useEffect, useState } from 'react'
import { useAuth } from '../hooks/useAuth'

interface Props {
    buttonText?: string
    title?: string
    isOpen: boolean
    toggleModal: React.Dispatch<React.SetStateAction<boolean>>
    children?: React.ReactNode
}

function ModalWrapper({
    buttonText,
    title,
    toggleModal,
    isOpen,
    children,
}: Props) {
    const { isSuccess, error: errorSubmit, reset } = useAuth()

    const handleClick = (
        e: React.MouseEvent<HTMLDetailsElement, MouseEvent>
    ) => {
        const element = (e.target as HTMLElement).tagName
        if (element === 'SUMMARY' || element === 'svg') {
            e.preventDefault()
            console.log('click')
            toggleModal((open) => !open)
        }
    }

    useEffect(() => {
        const handleKeyUp = (e: KeyboardEvent) => {
            const { key } = e
            if (key === 'Escape') {
                e.preventDefault()
                toggleModal(false)
            }
        }
        document.addEventListener('keyup', handleKeyUp)
        return () => {
            document.removeEventListener('keyup', handleKeyUp)
        }
    }, [errorSubmit])

    useEffect(() => {
        if (isSuccess) {
            toggleModal(false)
        }
    }, [isSuccess])

    useEffect(() => {
        if (!isOpen) {
            if (errorSubmit) reset()
        }
    }, [isOpen])

    return (
        <div>
            <details
                className='dialog registration'
                open={isOpen}
                onClick={handleClick}
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
                        {isOpen && children}
                    </div>
                </div>
            </details>
        </div>
    )
}

export { ModalWrapper }
