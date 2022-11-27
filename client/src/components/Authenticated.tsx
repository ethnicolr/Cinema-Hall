import React from 'react'

function Authenticated() {
    return (
        <div className='user authorized flex items-center '>
            <a title='' href='./cabinet.html'>
                <img src='assets/img/user-icon.svg' className='w-10' />
            </a>
            <a href='/logout' className='w-8 ml-2 focus:outline-none'>
                <img src='assets/img/logout.svg' />
            </a>
        </div>
    )
}

export { Authenticated }
