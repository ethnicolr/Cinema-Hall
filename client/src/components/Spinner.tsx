import React from 'react'

function Spinner() {
    return (
        <div id='loader' className='fixed inset-0 transition-opacity z-50'>
            <div className='absolute inset-0 bg-gray-500 opacity-75'></div>
            <div className='spinner'></div>
        </div>
    )
}

export { Spinner }
