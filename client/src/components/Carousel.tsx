import React, { useState, useId } from 'react'
import { Poster } from './Poster'

function Carousel() {
    const [list, setList] = useState([
        './slideA.jpg',
        './slideB.jpg',
        './slideC.jpg',
    ])

    return (
        <section className='carousel w-full pb-8 relative overflow-hidden'>
            <ul className='list-none flex flex-row'>
                {list.map((item) => {
                    const id = useId()
                    return <Poster url={item} key={id} />
                })}
            </ul>
        </section>
    )
}

export { Carousel }
