import React, { useRef, useState } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';

const Home = () => {
  const [pickUp, setPickUp] = useState('');
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const submitHandler = (e) => {
    e.preventDefault()
  }

  useGSAP(function () {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        padding: 24
      })
      gsap.to(panelCloseRef.current, {
        opacity: 1
      })
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        padding: 0
      })
      gsap.to(panelCloseRef.current, {
        opacity: 0
      })
    }
  }, [panelOpen])


  return (
    <div className='h-screen relative overflow-hidden' >
      <img className='w-16 absolute top-5 left-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="" />

      <div className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src="https://quickbzar.com/storage/public_storage/google_static_images/ad_id__496_date_2021_05_21_22_31_19.png" alt="" />
      </div>

      <div className=' flex flex-col justify-end h-screen absolute bottom-0 w-full'>
        <div className='h-[30%] p-6 bg-white relative'>
          <h5 ref={panelCloseRef} onClick={() => {
            setPanelOpen(false)
          }} className='absolute opacity-0 top-6 right-6 text-2xl'>
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className='text-2xl font-semibold top'>Find a trip</h4>
          <form onSubmit={(e) => {
            submitHandler(e)
          }} >
            <div className='absolute top-[45%] left-10 flex flex-col items-center  '>
              <div className='text-[10px]'>
                <i className="ri-progress-8-fill"></i>
              </div>
              <div className='line  h-10 w-[2px] bg-gray-900 rounded-full'></div>
              <div className='text-[10px]'>
                <i className="ri-progress-8-fill"></i>
              </div>
            </div>
            <input
              onClick={() => {
                setPanelOpen(true)
              }}
              value={pickUp}
              onChange={(e) => {
                setPickUp(e.target.value)
              }}
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5'
              type="text"
              placeholder='Add a pick-up location' />
            <input
              onClick={() => {
                setPanelOpen(true)
              }}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value)
              }}
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3'
              type="text"
              placeholder='enter your destination' />
          </form>
        </div>
        <div ref={panelRef} className=' bg-white h-0'>
          <LocationSearchPanel />
        </div>
      </div>

      <div className='fixed w-full z-10 bottom-0 translate-y-full px-3 py-8  bg-white '>
        <h3 className='text-2xl font-semibold mb-5'> Choose a vehicle</h3>

        <div className='flex items-center w-full mb-2 gap-2 p-1 border-2 border-white active:border-gray-950 rounded-xl justify-between'>
          <img className='h-16 py-1' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367310/assets/30/51e602-10bb-4e65-b122-e394d80a9c47/original/Final_UberX.png" alt="" />
          <div className=' ml-5 w-8/12'>
            <h4 className='font-medium text-m'>UberGo <span><i className="ri-user-fill"></i>4</span></h4>
            <h5 className='text-sm'>2 mins away</h5>
            <p className='text-xs text-gray-800'>Affordable, Compact rides</p>
          </div>
          <h2 className='flex items-center justify-end text-lg  font-semibold'><i className="ri-money-rupee-circle-fill"></i> 193.20</h2>
        </div>
        <div className='flex items-center w-full mb-2 gap-2 p-1 border-2 border-white active:border-gray-950 rounded-xl justify-between'>
          <img className='h-16 py-1' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
          <div className=' -ml-2 w-8/12'>
            <h4 className='font-medium text-m'>Moto <span><i className="ri-user-fill"></i>1</span></h4>
            <h5 className='text-sm'>3 mins away</h5>
            <p className='text-xs text-gray-800'>Affordable, motorcycle rides</p>
          </div>
          <h2 className='flex items-center justify-end text-lg  font-semibold'><i className="ri-money-rupee-circle-fill"></i> 65.17</h2>
        </div>
        <div className='flex items-center w-full mb-2 gap-2 p-1 border-2 border-white active:border-gray-950 rounded-xl justify-between'>
          <img className='h-16 py-1' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
          <div className=' -ml-2 w-8/12'>
            <h4 className='font-medium text-m'>UberAuto <span><i className="ri-user-fill"></i>3</span></h4>
            <h5 className='text-sm'>4 mins away</h5>
            <p className='text-xs text-gray-800'>Affordable, Auto rides</p>
          </div>
          <h2 className='flex items-center justify-end text-lg  font-semibold'><i className="ri-money-rupee-circle-fill"></i> 118.21</h2>
        </div>
      </div>

    </div>
  )
}

export default Home