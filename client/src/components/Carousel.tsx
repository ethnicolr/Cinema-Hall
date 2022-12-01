import React, { useState, useId, useEffect, useRef } from 'react'
import { Poster } from './Poster'

function Carousel() {
    const [list, setList] = useState([
        './slideA.jpg',
        './slideB.jpg',
        './slideC.jpg',
    ])
    const [current, setCurrent] = useState(2)
    const [itervalId, setItervalId] = useState<null | NodeJS.Timer>(null)

    const carousel = useRef<HTMLElement>(null)

    const handleSlide = () => {
        setCurrent((cur) => {
            if (cur === 2) return 0
            return cur + 1
        })
    }

    const setSlideIterval = () => {
        const id = setInterval(() => handleSlide(), 3000)
        setItervalId(id)
    }

    const clearSlideIterval = () => {
        setItervalId((id) => {
            if (id) clearInterval(id)
            return null
        })
    }

    useEffect(() => {
        const element = carousel.current as HTMLElement
        element.addEventListener('mouseover', clearSlideIterval)
        element.addEventListener('mouseout', setSlideIterval)

        return () => {
            element.removeEventListener('mouseover', clearSlideIterval)
            element.removeEventListener('mouseout', setSlideIterval)
        }
    }, [])

    return (
        <section
            className='carousel w-full pb-8 relative overflow-hidden'
            ref={carousel}
        >
            <ul className='list-none flex flex-row'>
                {list.map((item, ind) => {
                    const id = useId()
                    return (
                        <Poster
                            url={item}
                            key={id}
                            isHidden={ind !== current}
                        />
                    )
                })}
            </ul>
        </section>
    )
}

export { Carousel }
