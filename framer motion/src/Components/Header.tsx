import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import './header.css'

function Header() {
  return (
    <header className='shadow-md w-full mb-2 py-4 px-2 md:px-4 lg:px-[20%]'>
        <nav className='flex justify-between'>
            <Link to="/" className="logo flex gap-1 cursor-pointer">
                <img className='w-8' src="/logo.svg" alt="logo" />
                <p className='text-2xl font-bold'>Framer Motion</p>
            </Link>
            <div className="toggle lg:hidden">
                <img className='w-8' src="/toggle.svg" alt="menu toggle" />
            </div>
            <div className="links grid lg:grid-flow-col lg:gap-6">
                <NavLink className='navlink' to='/home'>Home</NavLink>
                {/* <NavLink className='navlink' to='/store'>Store</NavLink>
                <NavLink className='navlink' to='/cart'>Cart</NavLink> */}
                <NavLink className='navlink' to='/post'>Post</NavLink>
            </div>
        </nav>
    </header>
  )
}

export default Header