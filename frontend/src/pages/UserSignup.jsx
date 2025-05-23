import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserSignup = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [userData, setUserData] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
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
   <div>
     <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="" />
        <form onSubmit={(e) => {
          submitHandler(e)
        }}>
          <h3 className='mb-2 text-lg font-medium'>What's Your Name</h3>
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
          <h3 className='mb-2 text-lg font-medium'>What's Your Email</h3>
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
        <p className='text-center'>Already have a account? <Link to="/login" className='text-blue-600'>Login here</Link></p>
      </div>
      <div>
        <p className='text-[10px] leading-tight'>
          This site is protected by reCAPTCHA and the <span className='underline'>Google privacy Policy</span> and <span className='underline'>Terms of Service apply</span> 
        </p>
      </div>
    </div>
   </div>
  )
}

export default UserSignup