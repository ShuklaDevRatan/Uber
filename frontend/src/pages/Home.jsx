import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div className='bg-cover bg-bottom bg-[url(https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/c5310f182519763.652f3606b64b0.jpg)] h-screen pt-8 flex justify-between flex-col w-full'>
            <img className='w-16 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="" />
            <div className='bg-white py-4 px-4 pb-7'>
                <h2 className='text-3xl font-bold'>Get Started With Uber</h2>
                <Link to='/login' className='flex items-center justify-center  bg-black text-white w-full  py-3 rounded mt-5 '>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Home