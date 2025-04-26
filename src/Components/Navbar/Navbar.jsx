import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='Navbar'>
            <Link to='/'>All</Link>
            <Link to='/mens'>Mens</Link>
            <Link to='/womens'>Womens</Link>


        </div>
    )
}

export default Navbar