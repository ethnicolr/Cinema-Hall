import React from 'react'
interface Props {
    url: string
    isHidden: boolean
}

function Poster({ url, isHidden }: Props) {
    return (
        <li
            className='hero'
            style={{
                backgroundImage: `url('${url}')`,
                display: `${isHidden ? 'none' : 'flex'}`,
            }}
        >
            <article className='justify-between flex flex-col md:flex-row items-center bg-transparentBlack p-8 text-white'>
                <div>
                    <h2 className='font-bold text-3xl'>
                        Покемон детектив Пикачу (0+)
                    </h2>
                    <h3 className='text-2xl'>Detective Pikachu</h3>
                </div>
                <button className='mt-8 md:mt-0 border border-transparent text-xl leading-5 font-medium rounded-md text-white bg-active hover:bg-blue-500 focus:outline-none focus:border-blue-600 focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-ou'>
                    <a
                        href='./filmPage.html'
                        className='hover:underline py-4 px-8 inline-block'
                    >
                        Купить билет!
                    </a>
                </button>
            </article>
        </li>
    )
}

export { Poster }
