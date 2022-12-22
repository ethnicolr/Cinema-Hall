import React from 'react'
import { TicketsUserType } from '../shared/types'
import { getdhm } from '../utils'

interface Props {
    cinemaShows: TicketsUserType[]
}

function Tickets({ cinemaShows }: Props) {
    return (
        <ul className='ticketsList container ml-0 md:ml-8 flex-col flex md:flex-row items-start flex-wrap'>
            {cinemaShows.map((cinemaShow) => {
                const { id, movie, tickets, startTime } = cinemaShow
                const { name } = movie
                const { hour, minute, month, day } = getdhm(startTime)
                return (
                    <li
                        key={id}
                        className='cart w-full md:w-1/2 lg:w-1/4 lg:max-w-xl lg:pr-2 flex flex-col items-stretch m-4 max-w-xs'
                    >
                        <div className='rounded  ticketCart'>
                            <h2 className='font-bold text-2xl m-4'>{name}</h2>
                            <div className='flex border-gray-600 border-t border-b my-4'>
                                <div className='dateBlock border-r border-gray-600 w-1/2 text-center py-2 font-bold flex flex-col'>
                                    <span className='dayOfMonth text-3xl'>
                                        {day}
                                    </span>
                                    <span className='month text-base'>
                                        {month}
                                    </span>
                                </div>
                                <div className='filmTime w-1/2 text-center py-2 font-bold text-3xl m-auto'>
                                    {`${hour}:${minute}`}
                                </div>
                            </div>

                            <div className='bg-gray-600 h-px'></div>
                            <ul className='seatsList'>
                                {tickets.map((ticket) => {
                                    const { id, chair, row } = ticket
                                    return (
                                        <li
                                            key={id}
                                            className='border border-gray-600 rounded flex my-2'
                                        >
                                            <div className='w-1/2 text-center'>
                                                <span>ряд </span>
                                                <span className='rowNumber text-3xl font-bold'>
                                                    {row}
                                                </span>
                                            </div>
                                            <div className='border border-gray-600 rounded bg-gray-700 text-white w-1/2 text-center '>
                                                <span>место </span>
                                                <span className='seatNumber text-3xl font-bold'>
                                                    {chair}
                                                </span>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

export { Tickets }
