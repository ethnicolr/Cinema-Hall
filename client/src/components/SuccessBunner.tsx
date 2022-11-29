import React, { useEffect, useState } from 'react'
import { useAuth } from '../hooks/useAuth'

function SuccessBunner() {
    const { data, isSuccess } = useAuth()
    const [isHidden, setisHidden] = useState(true)

    const closeBunner = () => setisHidden(true)
    return (
        <div
            id='successBanner'
            className={`banner bg-green-600 ${isHidden ? 'hidden' : ''}`}
        >
            <div className='max-w-screen-xl mx-auto py-3 px-3 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between flex-wrap'>
                    <div className='w-0 flex-1 flex items-center'>
                        <p className='messageText'>
                            {`Вы вошли в систему, как ${data!.email}`}
                        </p>
                    </div>
                    <div className='order-2 flex-shrink-0 sm:order-3 sm:ml-3'>
                        <button
                            type='button'
                            className='-mr-1 flex p-2 rounded-md hover:bg-green-500 focus:outline-none focus:bg-green-500 sm:-mr-2 transition ease-in-out duration-150'
                            aria-label='Dismiss'
                            onClick={closeBunner}
                        >
                            <svg
                                className='h-6 w-6 text-white'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
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
                </div>
            </div>
        </div>
    )
}

export { SuccessBunner }
