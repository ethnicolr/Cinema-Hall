import React from 'react'
import { CinemaShow } from '../shared/types'
import { getdhm } from '../utils'

interface Props {
    data: CinemaShow[]
}

type Format = Record<string, CinemaShow[]>
type GroupDaysAndFormat = Record<string, Format>

function MovieSessions({ data }: Props) {
    const days = {} as GroupDaysAndFormat

    data.forEach((session) => {
        const { startTime, format, technology } = session
        const type = `${technology} ${format}`
        const { day } = getdhm(startTime)
        if (days[day]) {
            if (days[day][type]) {
                days[day][type].push(session)
            } else {
                days[day][type] = [session]
            }
        } else {
            days[day] = { [type]: [session] }
        }
    })

    console.log(days)
    return (
        <section className='flex-1 lg:mr-8'>
            <h1 className='text-4xl'>Сеансы</h1>
            <ul className='filmTimetable focus:outline-none'>
                {Object.keys(days).map((day) => {
                    return (
                        <li className='dailySchedule' key={day}>
                            <h5 className='text-xl'>{day}</h5>
                            <ul className='focus:outline-none'>
                                {Object.keys(days[day]).map((type) => {
                                    return (
                                        <li
                                            className='flex items-start m-2 p-2'
                                            key={type}
                                        >
                                            <h6 className='w-24 flex-shrink-0 mt-2'>
                                                {type}
                                                <div className='flex flex-wrap'>
                                                    {days[day][type].map(
                                                        (time) => (
                                                            <a
                                                                className='movieTimeLink notActive'
                                                                key={time.id}
                                                            >
                                                                {time.startTime}
                                                            </a>
                                                        )
                                                    )}
                                                </div>
                                            </h6>
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                    )
                })}
                {/* {data.map((session) => {
                    return <h1>test</h1>
                })} */}
            </ul>
        </section>
    )
}

export { MovieSessions }
