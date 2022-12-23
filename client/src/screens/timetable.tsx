import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getCinemaShows } from '../api'
import { CinemaShowRelationType } from '../shared/types'
import { MovieSessions } from '../components/MovieSessions'
import { Filter } from '../components/Filter'
import { Spinner } from '../components/Spinner'

function Timetable() {
    const [params, setParams] = useState<string>()
    const {
        data: shows,
        isLoading,
        isSuccess,
    } = useQuery<CinemaShowRelationType[]>(
        ['shows', params],
        async () => await getCinemaShows(params)
    )

    const onSubmitFilter = (params: string) => setParams(params)

    return (
        <main className='mt-20 overflow-y-auto'>
            <h1 className='text-center md:text-left text-4xl md:pl-12 pt-8'>
                Расписание сеансов
            </h1>
            <div className='flex bg-white flex-col md:flex-row'>
                <Filter onSubmit={onSubmitFilter} />

                {isSuccess && <MovieSessions data={shows} />}
                {isLoading && <Spinner />}
            </div>
        </main>
    )
}

export { Timetable }
