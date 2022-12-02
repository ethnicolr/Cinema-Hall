import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'
import { MovieResponse } from '../shared/types'
import { Spinner } from '../components/Spinner'
import { API } from '../constants'
import MovieDetails from '../components/MovieDetails'
import { MovieSessions } from '../components/MovieSessions'

function MoviePage() {
    const getMovieData = (id?: string): Promise<MovieResponse> =>
        fetch(`${API}/movie/${id}`).then((response) => response.json())

    const { id } = useParams()

    const { data, isLoading, isSuccess } = useQuery(['movie'], () =>
        getMovieData(id)
    )

    if (isLoading) return <Spinner />
    if (isSuccess) {
        const { poster, name, ageRestriction } = data
        const title = `${name} (${ageRestriction})`
        return (
            <>
                {isSuccess && (
                    <>
                        <div
                            className='hero'
                            style={{
                                backgroundImage: `url(${poster})`,
                            }}
                        >
                            <article className='justify-between flex flex-col bg-transparentBlack p-8 text-white'>
                                <h2 className='font-bold text-3xl'>{title}</h2>
                                <h3 className='text-2xl'>Detective Pikachu</h3>
                            </article>
                        </div>
                        <div className='flex p-8 justify-between flex-col lg:flex-row container mx-auto'>
                            <MovieSessions data={data.cinemaShows} />
                            <MovieDetails data={data} />
                        </div>
                    </>
                )}
            </>
        )
    }
    return null
}

export { MoviePage }
