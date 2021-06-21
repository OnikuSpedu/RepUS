import Head from 'next/head'
import Image from 'next/image'
import bgImage from '../public/bg.jpg'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>RepUS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Image
        alt="Mountains"
        src={bgImage}
        layout="fill"
        objectFit="cover"
        className="-z-1"
        quality={100}
      />

      <main className="flex-auto flex flex-col lg:flex-row lg:flex-wrap">
        <div className="flex-1 lg:max-w-4xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border border-gray-300">
          <Navbar />
          <div className="p-4 leading-snug flex-auto flex items-center text-5xl font-bold">
            Find Your Elected Officials
          </div>

          <form>
            
          </form>
        </div>
        <div className="flex-auto">
          Hello
        </div>
      </main>
    </div>
  )
}
