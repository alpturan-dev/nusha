import React from 'react'

function SearchBox() {
    return (
        <form className='lg:w-1/3 md:w-2/3 w-3/4 mx-auto pt-2 pb-8'>
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Arama yap...</label>
            <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-main" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" id="default-search" class="flex w-full p-6 pl-10 text-lg text-gray-900 rounded-lg bg-gray-200 focus:outline-none" placeholder="Arama yap..." required />
                <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-main hover:opacity-90 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg p-4">Ara</button>
            </div>
        </form>
    )
}

export default SearchBox