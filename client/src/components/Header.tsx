import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { Authenticated } from './Authenticated'
import { Logo } from './Logo'
import { Navbar } from './Navbar'
import { Unauthenticated } from './Unauthenticated'

function Header() {
    const { account } = useAuth()
    return (
        <header className='h-20'>
            <Logo />
            <div className='z-0 relative w-full'>
                <div className='relative flex justify-between items-center px-4 py-5 md:justify-between'>
                    <Navbar />
                    {account ? <Authenticated /> : <Unauthenticated />}
                </div>
            </div>
        </header>
    )
}

export { Header }
