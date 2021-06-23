import React from 'react'

function ResultCard({office, name, party, photo, address, urls, channels, emails, phones}) {
    return (
        <div className="flex flex-col p-4 my-4 bg-white shadow-2xl ring-2 rounded-xl">
            <div>{office}</div>
            <div>{name}</div>
            <div>{party}</div>
        </div>
    )
}

export default ResultCard
