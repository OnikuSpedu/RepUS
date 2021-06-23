import React, { useEffect, useState } from "react";
import postData from "../utility/postData";
import { ResultCard, LoadingResultCard } from "./ResultCard";
import Skeleton from "react-loading-skeleton";

interface ResultsProps {
  query: string;
}

interface Result {
  office: string;
  name: string;
  party: string;
  photo?: string;
  address?: object[];
  urls?: string[];
  channels?: object[];
  emails?: string[];
  phones?: string[];
}

function Results({ query }: ResultsProps) {
  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    if (query != null && query != "") {
      postData("/api/search", { query: query }).then((response) => {
        if (response.success) setResults(response.data);
        console.log(response);
        setLoading(false);
      });
    } else {
      setResults([]);
      setLoading(false);
    }
  }, [query]);

  return (
    <div className="m-4 md:m-8">
      <div className="w-full max-w-3xl mx-auto font-semibold uppercase">
        {!loading ? (
          <span>{query && query != "" && `${results.length} results`}</span>
        ) : (
          <span>{query && query != "" && `Loading`}</span>
        )}
      </div>

      <div className="flex flex-col items-center xl:items-start">
        {loading ? (
          <React.Fragment>
            <LoadingResultCard />
            <LoadingResultCard />
            <LoadingResultCard />
            <LoadingResultCard />
            <LoadingResultCard />
            <LoadingResultCard />
          </React.Fragment>
        ) : (
          <React.Fragment>
            {results.map((officialData) => (
              <ResultCard {...officialData} />
            ))}
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

export default Results;
