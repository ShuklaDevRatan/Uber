import React from 'react'

const LocationSearchPanel = () => {
  const location = [
    "86,84 Comfort Park Opp Rajiv nagar sector A Ayodhya By Pass road , Bhopal",
    "65,66 krishna farm  bilkiriya thana  raisen road , Bhopal",
    "101,102 chitrakoot appartments near mittal collage Ayodhya By Pass road , Bhopal"
  ]
  return (
    <div>
      {
        location.map(function (elem) {
         return <div className='flex gap-2 mb-2 border border-white active:border-black p-3 rounded-xl  items-center justify-start '>
            <h2 className='bg-[#dfdddd] h-8  w-16 flex items-center justify-center rounded-full'><i className="ri-map-pin-fill text-xl"></i></h2>
            <h4 className='leading-tight font-medium '>{elem}</h4>
          </div>
        })
      }


    </div>
  )
}

export default LocationSearchPanel