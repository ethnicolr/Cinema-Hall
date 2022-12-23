import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useAuth } from '../hooks/useAuth'
import { useModal } from '../hooks/useModal'
import { Busket } from '../components/Busket'
import { Hall } from '../components/Hall'
import { butTickets, getCinemaShow } from '../api'
import { client } from '../auth-provider'

function BuyTickets() {
    const [selSeats, setSeats] = useState<string[]>([])
    const { setLoginOpen, setTextModal } = useModal()
    const { data: user } = useAuth()
    const { id: cinemaShowId } = useParams()
    const { data: cinemaShowData } = useQuery(['cinemaShow'], () =>
        getCinemaShow(cinemaShowId)
    )
    const mutation = useMutation({
        mutationFn: () => {
            const tickets = selSeats.map((place) => {
                const [row, chair] = place.split('-')
                return { row, chair }
            })
            return butTickets(cinemaShowId!, tickets)
        },
    })

    const navigate = useNavigate()

    const handleSelect = (seat: string) => {
        const isExist = selSeats.includes(seat)
        const newArr = isExist
            ? selSeats.filter((id) => id !== seat)
            : [...selSeats, seat]
        setSeats(newArr)
    }

    const buyTickets = async () => {
        if (!user) {
            setTextModal('Авторизуйтесь для покупки билетов')
            setLoginOpen(true)
            return
        }
        const tickets = selSeats.map((place) => {
            const [row, chair] = place.split('-')
            return { row, chair }
        })
        mutation.mutate()

        // const response = await client(`cinemaShows/${cinemaShowId}/tickets`, {
        //     data: tickets,
        // })
        // if (response.success) {
        //     navigate('/cabinet')
        // }
    }

    if (!cinemaShowData) return null
    const { hall, price, tickets } = cinemaShowData
    return (
        <main className='mt-20 overflow-y-auto'>
            <section
                className='moviePreview flex flex-shrink-0 flex-col justify-end w-full bg-cover bg-center h-48'
                // style="background-image: url('https://planetakino.ua/res/get-poster/00000000000000000000000000001618/Detective-Pikachu-afisha7.jpg')"
            >
                <div className='justify-between flex flex-col items-start bg-transparentBlack p-8 text-white'>
                    <div>
                        <span className='uppercase text-xl text-gray-400'>
                            Фильм:
                        </span>
                        <span className='filmName text-xl'>
                            Покемон детектив Пикачу (0+)
                        </span>
                    </div>
                    <div>
                        <span className='uppercase text-xl text-gray-400'>
                            Сеанс:
                        </span>
                        <span className='movieTime text-xl'>13:45, 28 мая</span>
                    </div>
                </div>
            </section>
            <div className='container mx-auto'>
                <div className='py-12 pl-8'>
                    <h1 className='text-4xl'>Выбор мест</h1>
                    <span className='inline-block'>
                        Пожалуйста, выберите места на схеме и нажмите
                        &quot;Купить билеты&quot;
                    </span>
                </div>
                {/* <section className='flex flex-col-reverse lg:flex-row items-center lg:items-baseline p-4'> */}
                <section className='flex lg:flex-row items-center '>
                    <Busket
                        price={price}
                        handleSelect={handleSelect}
                        selectedSeats={selSeats}
                        buyTickets={buyTickets}
                    />
                    <Hall
                        config={hall}
                        handleSelect={handleSelect}
                        selectedSeats={selSeats}
                        soldSeats={tickets}
                    />
                </section>
            </div>
            <div
                id='errorBanner'
                className='banner bg-red-600 fixed w-full z-10'
            >
                <div className='max-w-screen-xl mx-auto py-3 px-3 sm:px-6 lg:px-8'>
                    <div className='flex items-center justify-between flex-wrap'>
                        <div className='w-0 flex-1 flex items-center'>
                            <p className='messageText'>
                                erddddddddddddddddddddddddddddddddddrr
                            </p>
                        </div>
                        <div className='order-2 flex-shrink-0 sm:order-3 sm:ml-3'>
                            <button
                                type='button'
                                // onClick='closeBanner(event)'
                                className='-mr-1 flex p-2 rounded-md hover:bg-red-500 focus:outline-none focus:bg-red-500 sm:-mr-2 transition ease-in-out duration-150'
                                aria-label='Dismiss'
                            >
                                <svg
                                    className='h-6 w-6 text-white'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M6 18L18 6M6 6l12 12'
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export { BuyTickets }
