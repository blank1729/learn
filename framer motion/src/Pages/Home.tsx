import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'

function Home() {
  return (
    <main className='w-screen h-screen bg-violet-300'>
        <nav className='absolute right-[5%] text-white grid top-[10%]'>
            <Link className='nav-link' to='/home'>HOME</Link>
            <Link className='nav-link' to='/home'>BOOKS</Link>
            <Link className='nav-link' to='/home'>GARDEN</Link>
            <Link className='nav-link' to='/home'>BLOG</Link>
            <Link className='nav-link' to='/gallery'>GALLERY</Link>
            <Link className='nav-link' to='/home'>PORTFOLIO</Link>
            <Link className='nav-link' to='/home'>PROJECTS</Link>
            <Link className='nav-link' to='/test'>TEST</Link>
        </nav>
    </main>
  )
}

export default Home