import Signin from '@/src/components/AuthPage/Signin'
import Signup from '@/src/components/AuthPage/Signup';
import { useState } from 'react';

export default function Home() {
  const [login, setLogin] = useState(true);
  return (
    <>
    <main className='flex min-w-screen min-h-screen'>

    <div className="basis-1/3 bg-black flex justify-center align-middle  md:mr-0">
      <h1 className='font-bold font-montserrat my-auto  md:text-4xl lg:text-7xl text-primary '>Board.</h1>
    </div>
    <div className=" basis-2/3 flex justify-center items-center ">
      {login ?  <Signin setLogin={setLogin}/>:
      <Signup setLogin={setLogin}/>
      }
    </div>
    </main>
    
    </>
  )
}
