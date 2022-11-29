import React from 'react'
import { LoginModal } from './LoginModal'
import { RegisterModal } from './RegisterModal'
import { RestorePasswordModal } from './RestorePasswordModal'
import { ResetPasswordModal } from './ResetPasswordModal'

function Unauthenticated() {
    return (
        <div className='user not-authorized flex items-center'>
            <LoginModal />
            |
            <RegisterModal />
            <RestorePasswordModal />
            <ResetPasswordModal />
        </div>
    )
}

export { Unauthenticated }
