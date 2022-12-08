import React from 'react'
import { Link } from 'react-router-dom'
import { MovieType } from '../shared/types'

interface Props {
    data: MovieType
}

function MoviePoster({ data }: Props) {
    const { poster, name, ageRestriction } = data
    const title = `${name} (${ageRestriction})`
    return (
        <li className='mx-4 md:mx-8 my-4 text-xl font-bold md:w-48 w-full sm:w-40 text-center sm:text-left'>
            <Link to={`movie/${data.id}`} className='hover:underline'>
                <img src={poster} className='w-48 h-64 mx-auto' />
                <span>{title}</span>
            </Link>
        </li>
    )
}

export { MoviePoster }
