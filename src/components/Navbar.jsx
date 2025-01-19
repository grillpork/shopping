import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className=' flex justify-between items-center py-4 w-[80%] m-auto'>
        <div className='inline-flex justify-center items-center space-x-8'>
          <div className=' text-red-600 text-3xl font-bold'>Mall TH</div>
          <ul className=' flex space-x-8'>
              <Link className=' hover: text-blue-500 font-bold before: absolute top-10 
                left-0 bg-gray-300 w-[50] h-[4] rounded-xl 
              ' to= {'/'}>Home</Link>
              <Link className=' hover: text-blue-500 font-bold before: absolute top-10 
                left-0 bg-gray-300 w-[50] h-[4] rounded-xl 
              ' to= {'/shop'}>Shop</Link>
              <Link className=' hover: text-blue-500 font-bold before: absolute top-10 
                left-0 bg-gray-300 w-[50] h-[4] rounded-xl 
              ' to= {'/'}>New</Link>
              <Link className=' hover: text-blue-500 font-bold before: absolute top-10 
                left-0 bg-gray-300 w-[50] h-[4] rounded-xl 
              ' to= {'/'}>Cart</Link>
          </ul>
        </div>

        <div className=' space-x-8'>
          <Link to= {'/login'}>Sign In</Link>
          <Link to= {'/register'}>Register</Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar
