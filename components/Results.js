import React, { useEffect, useState } from 'react'
import postData from '../utility/postData'
import ResultCard from './ResultCard'

function Results({ query }) {
    const [results, setResults] = useState([]);

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
            {`${results.length} results`}

            {results.map((officialData) => (
                <ResultCard {...officialData} />
            ))}
        </div>
    )
}

export default Results