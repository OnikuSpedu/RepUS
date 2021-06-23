import React from 'react'
import SearchBar from './SearchBar'

interface HeroProps {
    setQuery: (any) => any;
}

function Hero({ setQuery } : HeroProps) {
    return (
        <div className="flex flex-col items-center mx-4 mb-8 xl:items-start xl:justify-start md:mx-8">
            <div className="items-center my-8 text-6xl font-bold md:leading-snug ">
                Find Your Elected Officials
            </div>

            <SearchBar setQuery={setQuery} />
        </div>
    )
}

export default Hero