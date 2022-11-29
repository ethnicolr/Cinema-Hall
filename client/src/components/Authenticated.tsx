import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { SuccessBunner } from './SuccessBunner'

function Authenticated() {
    const { logout } = useAuth()

    const handleClick = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        e.preventDefault()
        logout()
    }
    return (
        <>
            <div className='user authorized flex items-center '>
                <a title='' href='./cabinet.html'>
                    <img src='assets/img/user-icon.svg' className='w-10' />
                </a>
                <a
                    href='/logout'
                    className='w-8 ml-2 focus:outline-none'
                    onClick={handleClick}
                >
                    <img src='assets/img/logout.svg' />
                </a>
            </div>
            <SuccessBunner />
        </>
    )
}

export { Authenticated }
