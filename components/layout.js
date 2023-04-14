import React from 'react'
import Link from 'next/link'
import SearchBox from './searchbox'

function Layout({ children }) {
    return (
        <div className='mx-auto pt-6'>
            <h1 className='py-4 text-4xl text-center text-main font-bold'>
                <Link href="/">dijital nüsha</Link>
            </h1>
            <SearchBox />
            <ul className='bg-main text-white py-4 text-base flex flex-row gap-10 items-center justify-center'>
                <li className='hover:opacity-80 transition-colors'>
                    <Link href="/">Anasayfa</Link>
                </li>
                <li className='hover:opacity-80 transition-colors'>
                    <Link href="/sections/hadis">Hadis</Link>
                </li>
                <li className='hover:opacity-80 transition-colors'>
                    <Link href="/sections/tefsir">Tefsir</Link>
                </li>
                <li className='hover:opacity-80 transition-colors'>
                    <Link href="/sections/meal">Meal</Link>
                </li>
            </ul>
            <main className="py-10 text-center">{children}</main>
        </div>
    )
}

export default Layout