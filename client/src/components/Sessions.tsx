import React from 'react'
import { Link } from 'react-router-dom'
import { SessionsType } from '../shared/types'
import { getdhm } from '../utils'

interface Props {
    data: SessionsType
}
function Sessions({ data }: Props) {
    return (
        <section className='flex-1 lg:mr-8'>
            <ul className='filmTimetable focus:outline-none'>
                {Object.keys(data).map((day) => {
                    return (
                        <li className='dailySchedule' key={day}>
                            <h5 className='text-xl'>{day}</h5>
                            <ul className='focus:outline-none'>
                                {Object.keys(data[day]).map((type) => {
                                    return (
                                        <li
                                            className='flex items-start m-2 p-2'
                                            key={type}
                                        >
                                            <h6 className='w-24 flex-shrink-0 mt-2'>
                                                {type}
                                            </h6>
                                            <div className='flex flex-wrap'>
                                                {data[day][type].map(
                                                    (cinemaShow) => {
                                                        const {
                                                            id,
                                                            startTime,
                                                        } = cinemaShow
                                                        const { hour, minute } =
                                                            getdhm(startTime)
                                                        return (
                                                            <Link
                                                                className='movieTimeLink'
                                                                key={id}
                                                                to={`/buy-tickets/${id}`}
                                                            >
                                                                {`${hour}:${minute}`}
                                                            </Link>
                                                        )
                                                    }
                                                )}
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export { Sessions }
