import React from 'react'

interface Props {
    selectedSeats: string[]
    price: number
    handleSelect: (seat: string) => void
    buyTickets: () => void
}

function Busket({ selectedSeats, handleSelect, buyTickets, price }: Props) {
    return (
        <div className='cart w-full lg:w-1/2 lg:pr-2 mt-4 lg:mt-0 flex flex-col items-stretch  max-w-xl lg:border-r border-gray-400'>
            <span className='text-2xl ml-4'>Ваш заказ в корзине:</span>
            <ul className='mb-8 md:h-64 md:mb-0 overflow-y-auto lg:pr-4'>
                {selectedSeats.map((place) => {
                    const [row, seat] = place.split('-')
                    const onSelect = () => handleSelect(place)
                    return (
                        <li key={place} className='flex items-center m-4'>
                            <div className='bg-gray-300 p-6 mr-2 flex-grow flex'>
                                <div className='flex flex-col justify-center mx-2 items-center'>
                                    <span className='font-semibold text-xl'>
                                        {row}
                                    </span>
                                    <span>ряд</span>
                                </div>
                                <div className='flex flex-col mx-2 items-center'>
                                    <span className='font-semibold text-xl'>
                                        {seat}
                                    </span>
                                    <span>место</span>
                                </div>
                                <div className='ml-auto flex items-center'>
                                    <span className='text-2xl font-bold text-active'>
                                        {price}
                                    </span>
                                    <span className='text-base text-active'>
                                        руб.
                                    </span>
                                </div>
                            </div>
                            <button
                                className='text-base delete-ticket-button focus:outline-none'
                                onClick={onSelect}
                            >
                                X
                            </button>
                        </li>
                    )
                })}
            </ul>
            <div className='flex items-center lg:flex-col md:relative md:my-2 md:mx-4 total-tickets-price'>
                <h3 className='text-xl md:text-2xl lg:m-4'>
                    <span className='hidden rounded-md md:inline'>
                        Всего к оплате:{' '}
                    </span>
                    <span className='font-bold'>
                        {selectedSeats.reduce((acc) => price + acc, 0)}
                    </span>
                    руб.
                </h3>
                <button
                    onClick={buyTickets}
                    type='button'
                    className='m-auto mt-0 border border-transparent text-xl leading-5 font-medium rounded-full w-56 text-white bg-active hover:bg-blue-500  hover:cursor-pointer focus:outline-none focus:border-blue-600 focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out py-4 px-8 self-center'
                >
                    Купить билеты
                </button>
            </div>
        </div>
    )
}

export { Busket }
