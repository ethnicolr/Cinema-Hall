import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { Authenticated } from './Authenticated'
import { Logo } from './Logo'
import { Navbar } from './Navbar'
import { Unauthenticated } from './Unauthenticated'

function Header() {
    const { data, isSuccess, isLoading, status } = useAuth()
    return (
        <header className='h-20'>
            <Logo />
            <div className='z-0 relative w-full'>
                <div className='relative flex justify-between items-center px-4 py-5 md:justify-between'>
                    <Navbar />
                    {isSuccess && data?.email ? (
                        <Authenticated />
                    ) : (
                        <Unauthenticated />
                    )}
                    {isLoading && (
                        <div
                            id='loader'
                            className='fixed inset-0 transition-opacity z-50'
                        >
                            <div className='absolute inset-0 bg-gray-500 opacity-75'></div>
                            <div className='spinner'></div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}

export { Header }
