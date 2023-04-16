import React from 'react'

function SearchBox() {
    return (
        <form className='lg:w-1/3 md:w-2/3 w-3/4 mx-auto pt-2 pb-8'>
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Arama yap...</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-main" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" id="default-search" className="flex w-full p-4 pl-10 text-sm text-gray-900 rounded-lg bg-gray-200 focus:outline-none" placeholder="Arama yap..." required />
                <button type="submit" className="text-white absolute right-2 bottom-1 bg-main hover:opacity-90 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg py-3 px-4">Ara</button>
            </div>
        </form>
    )
}

export default SearchBox