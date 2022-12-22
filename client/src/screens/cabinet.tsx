import React, { useEffect, useState } from 'react'
import { client } from '../auth-provider'
import { Spinner } from '../components/Spinner'
import { Tickets } from '../components/Tickets'
import { useAuth } from '../hooks/useAuth'
import { useModal } from '../hooks/useModal'
import { TicketsUserType } from '../shared/types'

function Cabinet() {
    const [cinemaShows, setCinemaShows] = useState<TicketsUserType[] | null>(
        null
    )
    const { data, status } = useAuth()
    const { setLoginOpen } = useModal()

    useEffect(() => {
        console.log(status)
        const fetchTickets = async () => {
            const data = await client('tickets/my')
            console.log(data)
            setCinemaShows(data)
        }

        if (data && status === 'resolved') fetchTickets()
        if (!data && status === 'idle') setLoginOpen(true)
    }, [data, status])

    if (!cinemaShows) return null

    const ticketsCount = cinemaShows.reduce(
        (count, next) => count + next.tickets.length,
        0
    )

    return (
        <main className='cabinet mt-20 overflow-y-auto'>
            <h1 className='text-center md:text-left text-4xl md:pl-12 pt-8'>
                Ваши билеты:
                <sup className='text-xl text-gray-500 films-count'>
                    {`${ticketsCount} билетов`}
                </sup>
            </h1>
            <Tickets cinemaShows={cinemaShows} />
        </main>
    )
}

export { Cabinet }
