import Head from 'next/head'
import Image from 'next/image'
import bgImage from '../public/bg.jpg'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Results from '../components/Results'

import {useState} from 'react'

export default function Home() {
  const [query, setQuery] = useState("");
  
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>RepUS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* <Image
        alt="Mountains"
        src={bgImage}
        layout="fill"
        objectFit="cover"
        className="-z-1"
        quality={100}
      /> */}

      <main>
        <div>
          <Navbar />
          <Hero setQuery={setQuery}/>
        </div>
        <div>
          <Results query={query}/>
        </div>
      </main>
      
      {/* <main className="flex flex-col flex-auto lg:flex-row lg:flex-wrap">
        <div className="border border-gray-300 lg:max-w-2xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60">
          <Navbar />
          <div className="flex items-center flex-auto p-4 text-6xl font-bold leading-snug">
            Find Your Elected Officials
          </div>

          <form>
            
          </form>
        </div>
        <div className="flex-auto">
          Hello
        </div>
      </main> */}
    </div>
  )
}
