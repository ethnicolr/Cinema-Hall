import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { Spinner } from '../components/Spinner'
import { Sessions } from '../components/Sessions'
import { client } from '../auth-provider'
import { MovieRelationType, SessionsType } from '../shared/types'
import { getdhm, groupArray } from '../utils'
import MovieDetails from '../components/MovieDetails'

function MoviePage() {
    const fetchMovieData = (id?: string): Promise<MovieRelationType> =>
        client(`movie/${id}`)

    const { id } = useParams()

    const { data, isLoading, isSuccess } = useQuery(['movie'], () =>
        fetchMovieData(id)
    )

    if (isLoading) return <Spinner />
    if (isSuccess) {
        const { poster, name, ageRestriction, cinemaShows } = data

        const group = groupArray(cinemaShows, {}, [
            (item) => getdhm(item.startTime).movieDate,
            (item) => item.technology + item.format,
        ]) as SessionsType

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
                            <Sessions data={group} />
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
