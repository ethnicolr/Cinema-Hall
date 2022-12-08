import React from 'react'
import { client } from '../auth-provider'
import { useAsync } from '../hooks/useAsync'
import { CinemaShowRelationType } from '../shared/types'
import { MovieSessions } from '../components/MovieSessions'
import { Filter } from '../components/Filter'

function Timetable() {
    const { data, run } = useAsync<CinemaShowRelationType[]>()

    const fetchCinemaShows = (params: string) => {
        return client(`cinemaShows?${params}`)
    }

    const onSubmitFilter = (params: string) => run(fetchCinemaShows(params))

    return (
        <main className='mt-20 overflow-y-auto'>
            <h1 className='text-center md:text-left text-4xl md:pl-12 pt-8'>
                Расписание сеансов
            </h1>
            <div className='flex bg-white flex-col md:flex-row'>
                <Filter onSubmit={onSubmitFilter} />
                <MovieSessions data={data} />
            </div>
        </main>
    )
}

export { Timetable }
