import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptionSignup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [captionData, setCaptionData] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();
    setCaptionData({
      fullName: {
        firstname,
        lastname
      },
      email,
      password
    })
    setEmail('')
    setPassword('')
    setFirstname('')
    setLastname('')

  }
  return (
    <div className='p-5 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-20 mb-3' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" /> 
        <form onSubmit={(e) => {
          submitHandler(e)
        }}>
          <h3 className='mb-2 text-lg font-medium'>What's Our Caption's Name</h3>
          <div className='flex mb-6 gap-4'>
            <input
              className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base'
              required
              type="text"
              placeholder='Firstname'
              value={firstname}
              onChange={(e) => {
                setFirstname(e.target.value)
              }}
            />
            <input
              className='bg-[#eeeeee]  rounded px-4 py-2 border w-full text-lg placeholder:text-base'
              required
              type="text"
              placeholder='Lastname'
              value={lastname}
              onChange={(e) => {
                setLastname(e.target.value)
              }}
            />
          </div>
          <h3 className='mb-2 text-lg font-medium'>What's Our Caption's Email</h3>
          <input
            className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            required
            type="email"
            placeholder='email@example.com'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />

          <h3 className='mb-2 text-lg font-medium'>Enter Password</h3>
          <input
            className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            required
            type="password"
            placeholder='password'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
          <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base'>Create Account</button>
        </form>
        <p className='text-center'>Already have a account? <Link to="/caption-login" className='text-blue-600'>Login here</Link></p>
      </div>
      <div>
        <p className='text-[10px] leading-tight'>
          This site is protected by reCAPTCHA and the <span className='underline'>Google privacy Policy</span> and <span className='underline'>Terms of Service apply</span>
        </p>
      </div>
    </div>
  )
}

export default CaptionSignup