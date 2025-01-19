import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className=' flex justify-between items-center py-4 px-8 m-auto'>
          <ol className='flex justify-center items-center  gap-4'>
            <Link to= {'/'} className='text-2xl font-bold'>LOGO</Link>
              <Link className=' hover:text-blue-500 hover:translate-y-[-4px] 
              ' to= {'/'}>Home</Link>
              <Link className=' hover:text-blue-500 hover:translate-y-[-4px]  
              ' to= {'/shop'}>Shop</Link>
              <Link className=' hover:text-blue-500 hover:translate-y-[-4px]  
              ' to= {'/cart'}>Cart</Link>
          </ol>
        <div className=' space-x-8'>
          <Link to= {'/login'}>Sign In</Link>
          <Link to= {'/register'}>Register</Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar
