import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Montserrat } from 'next/font/google'
import Signin from '@/src/components/AuthPage/Signin'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <main className='flex min-w-screen min-h-screen'>

    <div className="basis-1/3 bg-black flex justify-center align-middle">
      <h1 className='font-bold font-montserrat my-auto text-7xl text-primary '>Board.</h1>
    </div>
    <div className=" basis-2/3 flex justify-center items-center ">
      <Signin/>
    </div>
    </main>
    
    </>
  )
}
