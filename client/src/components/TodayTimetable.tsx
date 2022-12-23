import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { MoviePoster } from './MoviePoster'
import { getCinemaShows } from '../api'

function TodayTimetable() {
    const { data, isSuccess } = useQuery(['shows'], () => getCinemaShows())
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
