import React from 'react'
import { useHistory } from 'react-router-dom'

const Nav = () => {
   const history = useHistory()

   const handleMouseDown = e => {
      e.target.className = 'animate'
      setTimeout(() => {
         e.target.className = ''
      }, 100)
   }

   const handleMouseUp = e => {
      e.target.className = ''
      setTimeout(() => {
         history.push(`/${e.target.textContent.toLowerCase()}`)
      }, 20)
   }

   return (
      <nav className='nav'>
         <a href='/' title='Home'>
            <div className='logo'>
               <p>Ricky Kelley</p>
               <hr />
               <p>Photography</p>
            </div>
         </a>
         <li onMouseDown={e => handleMouseDown(e)} onMouseUp={e => handleMouseUp(e)}>
            Portfolio
            <hr />
         </li>
         <li onMouseDown={e => handleMouseDown(e)} onMouseUp={e => handleMouseUp(e)}>
            About
            <hr />
         </li>
         <li onMouseDown={e => handleMouseDown(e)} onMouseUp={e => handleMouseUp(e)}>
            Contact
            <hr />
         </li>
         {/* <li onMouseDown={e => handleMouseDown(e)} onMouseUp={e => handleMouseUp(e)}>
            Testimonials
            <hr />
         </li> */}
      </nav>
   )
}

export default Nav
