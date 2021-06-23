import React from 'react'

interface ResultCardProps {
    office: string,
    name: string,
    party: string,
    photo?: string,
    address?: object[],
    urls?: string[],
    channels?: object[],
    emails?: string[],
    phones?: string[]
}

function ResultCard({office, name, party, photo, address, urls, channels, emails, phones} : ResultCardProps) {
    return (
        <div className={`flex flex-col w-full max-w-3xl p-6 my-2 bg-white shadow-2xl rounded-xl border-l-8 ${(party == "Democratic Party" && "border-blue-500")} ${(party == "Republican Party" && "border-red-500")} ${((party != "Republican Party" && party != "Democratic Party") && "border-gray-200")}`}>
            <div className="text-lg uppercase">{office}</div>
            <div className="text-2xl font-bold">{name}</div>
            <div className="mt-4 text-lg">{party}</div>
        </div>
    )
}

export default ResultCard
