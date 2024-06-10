import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='bg-gray-400 p-4'>
        <ul className='px-4 flex justify-end gap-4'>
            <Link to = '/'>Home</Link>
            <Link to = '/Owner'>Owner</Link>
        </ul>
    </header>
  )
}

export default Navbar