import React from 'react'

function ResultCard({office, name, party, photo, address, urls, channels, emails, phones}) {
    return (
        <div className="flex flex-col max-w-3xl p-6 my-4 bg-white shadow-2xl rounded-xl">
            <div className="text-lg uppercase">{office}</div>
            <div className="text-2xl font-bold">{name}</div>
            <div className="mt-4 text-lg">{party}</div>
        </div>
    )
}

export default ResultCard
