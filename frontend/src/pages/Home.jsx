import React from 'react'

const Home = () => {
  return (
    <div>
        <div className='h-screen pt-8 flex justify-between flex-col w-full bg-red-400'>
            <img className='w-16 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="" />
            <div className='bg-white py-4 px-4 pb-7'>
                <h2 className='text-3xl font-bold'>Get Started With Uber</h2>
                <button className='bg-black text-white w-full  py-3 rounded mt-5 '>Continue</button>
            </div>
        </div>
    </div>
  )
}

export default Home