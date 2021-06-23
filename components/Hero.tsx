import React from 'react'
import SearchBar from './SearchBar'

interface HeroProps {
    setQuery: (any) => any;
}

function Hero({ setQuery } : HeroProps) {
    return (
        <div className="flex flex-col mx-4 mb-8 md:mx-8">
            <div className="my-8 text-6xl font-bold leading-snug md:mb-14">
                Find Your Elected Officials
            </div>

            <SearchBar setQuery={setQuery} />
        </div>
    )
}

export default Hero