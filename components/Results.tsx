import React, { useEffect, useState } from 'react'
import postData from '../utility/postData'
import ResultCard from './ResultCard'

interface ResultsProps {
    query: string;
}

interface Result {
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

function Results({ query } : ResultsProps) {
    const [results, setResults] = useState<Result[]>([]);

    useEffect(() => {
        setResults([]);

        postData("/api/search", { query: query }).then((response) => {
            if (response.success)
                setResults(response.data);
            console.log(response);
        });

    }, [query])

    return (
        <div className="m-4 md:m-8">
            {query && query != "" && `${results.length} results`}

            {results.map((officialData) => (
                <ResultCard {...officialData} />
            ))}
        </div>
    )
}

export default Results