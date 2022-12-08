import React from 'react'
import { MovieType } from '../shared/types'

interface Props {
    data: MovieType
}

export default function MovieDetails({ data }: Props) {
    const {
        poster,
        imdbRating,
        yearOfCreation,
        country,
        language,
        genre,
        mainCrew,
        director,
        screenwriter,
        duration,
        ageRestriction,
        rentalStart,
    } = data
    return (
        <section className='info flex flex-col bg-white w-full lg:w-48 mt-8 lg:mt-0'>
            <img src={poster} className='w-48 mx-auto sm:mx-0' />
            <div className='font-semibold flex items-center'>
                <img src='assets/img/imdb.svg' className='w-16' />
                <div className='ml-2'>
                    <span className='rating text-xl'>{imdbRating}</span>/
                    <span className='text-base'>10</span>
                </div>
            </div>
            <dl>
                <dt className='text-xs text-gray-500'>Год</dt>
                <dd className='text-base mb-5'>{yearOfCreation}</dd>
                <dt className='text-xs text-gray-500'>Страна</dt>
                <dd className='text-base mb-5'>{country}</dd>
                <dt className='text-xs text-gray-500'>Язык</dt>
                <dd className='text-base mb-5'>{language}</dd>
                <dt className='text-xs text-gray-500'>Жанр</dt>
                <dd className='text-base mb-5'>{genre}</dd>
                <dt className='text-xs text-gray-500'>В главных ролях</dt>
                <dd className='text-base mb-5'>{mainCrew}</dd>
                <dt className='text-xs text-gray-500'>Режиссёр</dt>
                <dd className='text-base mb-5'>{director}</dd>
                <dt className='text-xs text-gray-500'>Сценарист</dt>
                <dd className='text-base mb-5'>{screenwriter}</dd>
                <dt className='text-xs text-gray-500'>Прокат</dt>
                <dd className='text-base mb-5'>С {rentalStart}</dd>
                <dt className='text-xs text-gray-500'>Продолжительность</dt>
                <dd className='text-base mb-5'>{duration} мин.</dd>
                <dt className='text-xs text-gray-500'>
                    Возрастное ограничение
                </dt>
                <dd className='text-base mb-5'>{ageRestriction}</dd>
            </dl>
        </section>
    )
}
