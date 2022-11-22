import React from 'react'
import { Logo } from './Logo'
import { Navbar } from './Navbar'
import { Unauthenticated } from './Unauthenticated'

function Header() {
    return (
        <header className='h-20'>
            <Logo />
            <div className='z-0 relative w-full'>
                <div className='relative flex justify-between items-center px-4 py-5 md:justify-between'>
                    <Navbar />
                    <Unauthenticated />
                </div>
            </div>
        </header>
    )
}

export { Header }
