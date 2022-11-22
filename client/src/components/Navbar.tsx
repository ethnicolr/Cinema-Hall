import React from 'react'

function Navbar() {
    return (
        <>
            <button className='z-10 md:hidden flex items-center text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600 w-10 h-10 cursor-pointer relative'>
                <div className='space-y-2'>
                    <div className='w-8 h-0.5 bg-white'></div>
                    <div className='w-8 h-0.5 bg-white'></div>
                    <div className='w-8 h-0.5 bg-white'></div>
                </div>
            </button>
            <nav className='flex-row relative top-auto right-auto bottom-auto left-auto p-0 m-0 w-auto'>
                <a
                    href='./timetable.html'
                    className='text-base leading-6 font-medium  hover:underline transition ease-in-out duration-150 active ml-4 mr-4 mt-2 mb-2'
                >
                    Расписание
                </a>
                <a
                    href='./films.html'
                    className='text-base leading-6 font-medium  hover:underline transition ease-in-out duration-150 ml-4 mr-4 mt-2 mb-2'
                >
                    Фильмы
                </a>
                <a
                    href='#'
                    className='text-base leading-6 font-medium  hover:underline transition ease-in-out duration-150 ml-4 mr-4 mt-2 mb-2'
                >
                    4DX
                </a>
            </nav>
        </>
    )
}

export { Navbar }
