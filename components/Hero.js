import React from 'react'
import SearchBar from './SearchBar'

function Hero({ setQuery }) {
    return (
        <div className="mx-4 mb-8 md:mx-8">
            <div className="my-8 text-6xl font-bold leading-tight">
                Find Your Elected Officials
            </div>

            <SearchBar setQuery={setQuery} />
        </div>
    )
}

export default Hero