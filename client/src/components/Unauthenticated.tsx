import React from 'react'
import { LoginModal } from './LoginModal'
import { RegisterModal } from './RegisterModal'

function Unauthenticated() {
    return (
        <div className='user not-authorized flex items-center'>
            <LoginModal />
            |
            <RegisterModal />
        </div>
    )
}

export { Unauthenticated }
