import React, { useEffect, useState } from 'react'

interface Props {
    onSubmit: (searchParams: string) => any
}

function Filter({ onSubmit }: Props) {
    const [date, setDate] = useState<string>('')
    const [type, setType] = useState<{
        technology: string[]
        format: string[]
    }>({ technology: [], format: [] })

    const changeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target

        setDate(value)
    }

    const changeType = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name as 'technology' | 'format'
        const value = e.target.value as string

        setType((state) => ({
            ...state,
            [name]: state[name].includes(value)
                ? state[name].filter((e) => e !== value)
                : [...state[name], value],
        }))
    }

    useEffect(() => {
        const { technology, format } = type
        const paramsObj = {} as Record<string, string>

        if (date) paramsObj['date'] = date
        if (format.length) paramsObj['format'] = format.join(',')
        if (technology.length) paramsObj['technology'] = technology.join(',')

        const serachParams = new URLSearchParams(paramsObj)

        onSubmit(serachParams.toString())
    }, [date, type])

    return (
        <section className='filters'>
            <div className='flex h-screen flex-col bg-white'>
                <div className='flex-1 flex flex-col pt-5 pb-4'>
                    <form id='filtersForm'>
                        <h3 className='py-4 text-base text-center border-b border-solid border-gray-400'>
                            Фильтры
                        </h3>
                        <section className='py-4 border-b border-gray-400 border-solid'>
                            <h4 className='py-2 text-base text-center text-gray-500'>
                                Период
                            </h4>
                            <div className='pt-2 pl-20'>
                                <input
                                    type='radio'
                                    name='date'
                                    id='date-today'
                                    value='today'
                                    onChange={changeDate}
                                />
                                <label htmlFor='date-today'>сегодня</label>
                            </div>
                            <div className='pt-2 pl-20'>
                                <input
                                    type='radio'
                                    name='date'
                                    id='date-tomorrow'
                                    value='tomorrow'
                                    onChange={changeDate}
                                />
                                <label htmlFor='date-tomorrow'>завтра</label>
                            </div>
                            <div className='pt-2 pl-20'>
                                <input
                                    type='radio'
                                    name='date'
                                    id='date-week'
                                    value='week'
                                    onChange={changeDate}
                                />
                                <label htmlFor='date-week'>неделя</label>
                            </div>
                            <div className='pt-2 pl-20'>
                                <input
                                    type='radio'
                                    name='date'
                                    id='date-month'
                                    value='month'
                                    onChange={changeDate}
                                />
                                <label htmlFor='date-month'>месяц</label>
                            </div>
                        </section>

                        <section className='py-4 border-b border-gray-400 border-solid'>
                            <h4 className='py-2 text-base text-center text-gray-500'>
                                Технология
                            </h4>
                            <div className='pt-2 pl-20'>
                                <input
                                    type='checkbox'
                                    name='technology'
                                    id='technology-4dx'
                                    value='4dx'
                                    onChange={changeType}
                                />
                                <label htmlFor='technology-4dx'>4DX</label>
                            </div>
                            <div className='pt-2 pl-20'>
                                <input
                                    type='checkbox'
                                    name='technology'
                                    id='technology-imax'
                                    value='imax'
                                    onChange={changeType}
                                />
                                <label htmlFor='technology-imax'>IMAX</label>
                            </div>
                            <div className='pt-2 pl-20'>
                                <input
                                    type='checkbox'
                                    name='technology'
                                    id='technology-cinetech'
                                    value='cinetech'
                                    onChange={changeType}
                                />
                                <label htmlFor='technology-cinetech'>
                                    Cinetech
                                </label>
                            </div>
                        </section>
                        <section className='py-4 border-b border-gray-400 border-solid'>
                            <h4 className='py-2 text-base text-center text-gray-500'>
                                Формат
                            </h4>
                            <div className='pt-2 pl-20'>
                                <input
                                    type='checkbox'
                                    name='format'
                                    id='format-2d'
                                    value='2d'
                                    onChange={changeType}
                                />
                                <label htmlFor='format-2d'>2D</label>
                            </div>
                            <div className='pt-2 pl-20'>
                                <input
                                    type='checkbox'
                                    name='format'
                                    id='format-3d'
                                    value='3d'
                                    onChange={changeType}
                                />
                                <label htmlFor='format-3d'>3D</label>
                            </div>
                        </section>
                    </form>
                </div>
            </div>
        </section>
    )
}

export { Filter }
