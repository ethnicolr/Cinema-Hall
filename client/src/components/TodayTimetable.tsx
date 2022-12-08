import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { MoviePoster } from './MoviePoster'
import { CinemaShowRelationType } from '../shared/types'

function TodayTimetable() {
    const fetchMovies = (): Promise<CinemaShowRelationType[]> =>
        fetch(`${process.env.API_URL}/cinemaShows`).then((response) =>
            response.json()
        )
    const { data, isSuccess } = useQuery(['movies'], fetchMovies)
    return (
        <section className='todayTimetable container mx-auto'>
            <h1 className='text-center md:text-left text-4xl md:pl-12 pt-8'>
                Сегодня в кино
                <sup className='text-xl text-gray-500 films-count'>
                    7 фильмов
                </sup>
            </h1>
            <ul className='flex flex-column sm:flex-row flex-wrap'>
                {isSuccess &&
                    data.map((cinemaShows) => (
                        <MoviePoster
                            data={cinemaShows.movie}
                            key={cinemaShows.id}
                        />
                    ))}
            </ul>
        </section>
    )
}

export { TodayTimetable }
