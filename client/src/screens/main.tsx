import React from 'react'
import { Carousel } from '../components/Carousel'
import { TodayTimetable } from '../components/TodayTimetable'

function Main() {
    return (
        <main className='mt-20 overflow-y-auto'>
            <Carousel />
            <TodayTimetable />
        </main>
    )
}

export { Main }
