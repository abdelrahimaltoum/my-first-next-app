import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
      <div className='content  flex flex-col bg-gray-400 items-center ml-40 mr-40 mt-20'>
        <h1 className=' header  text-4xl mb-10 mt-5'>Log In form</h1>
       <form >
        <div className='log-in-info   flex space-x-20 mb-5 flex '>
   <div>  <label className='text-lg  text-3xl mr-2 '>username</label>  <input className='h-50' type="text"/></div> 
   <div>  <label className='text-lg  text-3xl mr-2'>Password</label>  <input type="password"/> </div>
   </div>
   <div className='flex flex-col w-full'>
    <div className='flex '>
   <input type="checkbox" className='ml-10 text-5xl'/><span className='text-2xl ml-2'>Remember Me</span></div>
    <button className='bg-black text-white w-2/5 ml-60 mb-3 '>Log In</button></div>
       </form>
      </div>
  )
}
