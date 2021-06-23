import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Results from '../components/Results'

import { useState } from 'react'

export default function Home() {
  const [query, setQuery] = useState<string>("");

  return (
    <div className="flex flex-col min-h-screen bg-img">
      <Head>
        <title>RepUS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col flex-auto xl:flex-row lg:flex-wrap">
        <div className={`${query == "" && "flex-auto"} xl:max-w-2xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-6`}>
          <Navbar />
          <Hero setQuery={setQuery} />
        </div>
        <div className={`${query == "" ? "hidden" : "flex-auto"} items-center xl:items-start`}>
          <Results query={query} />
        </div>
      </main>
    </div>
  )
}
