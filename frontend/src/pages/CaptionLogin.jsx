import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptionLogin = () => {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [captionData, setCaptionData] = useState({})
  
    const submitHandler = (e) => {
      e.preventDefault()
      setCaptionData({
        email,
        password
      })
      setEmail('')
      setPassword('')
    }
  return (
    <div className='px-7 pt-4 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-20 mb-3' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
        <form onSubmit={(e) => {
          submitHandler(e)
        }}>
          <h3 className='text-lg mb-2 font-medium'>What's Your Email</h3>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            required
            type="email"
            placeholder='email@example.com'
          />

          <h3 className='text-lg mb-2 font-medium'>Enter Password</h3>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            required
            type="password"
            placeholder='password'
          />
          <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base'>Login</button>
        </form>
        <p className='text-center'>Join a fleet? <Link to="/caption-signup" className='text-blue-600'>Register as a Caption</Link></p>
      </div>
      <div>
        <Link
          to="/login"
          className='bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base'>SignIn as User</Link>
      </div>
    </div>
  )
}

export default CaptionLogin