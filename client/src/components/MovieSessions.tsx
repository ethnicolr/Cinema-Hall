import React from 'react'
import { getdhm, groupArray } from '../utils'
import { Sessions } from './Sessions'
import {
    CinemaShowRelationType,
    MovieShowsType,
    MovieType,
} from '../shared/types'

interface Props {
    data: CinemaShowRelationType[]
}

function MovieSessions({ data }: Props) {
    const group = groupArray(data, {}, [
        (item) => item.movie.id.toString(),
        (item) => getdhm(item['startTime']).movieDate,
        (item) => `${item.technology} ${item.format}`,
    ]) as MovieShowsType

    const moviesGroups = data.reduce((obj, item) => {
        obj[item.movie.id] = item.movie
        return obj
    }, {} as Record<string, MovieType>)

    return (
        <section className='flex flex-col w-full flex-1 overflow-hidden'>
            <div className='flex flex-col flex-1'>
                <div className='pt-2 pb-6 md:py-6'>
                    <ul className='filmsList flex flex-col p-4 focus:outline-none'>
                        {Object.entries(group).map((item) => {
                            const [id, sessions] = item
                            const { name, poster } = moviesGroups[id]
                            return (
                                <li
                                    key={id}
                                    className='filmItem flex flex-col md:flex-row p-4 my-4 bg-gray-300 overflow-hidden'
                                >
                                    <div className='w-48 flex-shrink-0 self-center md:self-auto'>
                                        <img
                                            src={poster}
                                            className='w-48 h-64'
                                        />
                                    </div>
                                    <div className='flex-col p-2 m-2 flex-1'>
                                        <a
                                            href='./filmPage.html'
                                            className='filmName text-blue-500 text-2xl hover:underline'
                                        >
                                            {name}
                                        </a>
                                        <Sessions data={sessions} />
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export { MovieSessions }
