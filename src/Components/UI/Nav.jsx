import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
   return (
      <nav className='nav'>
         <li>
            <Link to='/portfolio'>Portfolio</Link>
         </li>
         <li>
            <Link to='/about'>About</Link>
         </li>
         <li>
            <Link to='/contact'>Contact</Link>
         </li>
         <li>
            <Link to='/testimonials'>And maaaaaybe Testimonials</Link>
         </li>
      </nav>
   )
}

export default Nav
