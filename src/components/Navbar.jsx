import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex border space-x-8 items-center pl-3 py-4 '>
            <img className='w-[50px]' src="/public/images/movieLogo.png" alt='No image found' />
            <Link to='/' className='text-blue-500 text-xl font-bold'>Movies</Link>
            <Link to='/watchList' className='text-blue-500 text-xl font-bold'>WatchList</Link>
        </div>
    )
}

export default Navbar
Navbar