import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

const Nav = () => {
   const [hoverPort, sethoverPort] = useState(false)
   const [hoverAbout, sethoverAbout] = useState(false)
   const [hoverCont, sethoverCont] = useState(false)
   const [hoverTest, sethoverTest] = useState(false)
   const [animate, setanimate] = useState(false)

   const history = useHistory()

   const handleMouseDown = () => {
      setanimate(true)
      setTimeout(() => {
         setanimate(false)
      }, 100)
   }

   const handleMouseUp = () => {
      setanimate(false)
      setTimeout(() => {
         history.push('/portfolio')
      }, 20)
   }

   return (
      <nav className='nav'>
         <li
            className={animate ? 'animate' : ''}
            onMouseEnter={() => sethoverPort(true)}
            onMouseLeave={() => sethoverPort(false)}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}>
            Portfolio
            <hr className={hoverPort ? 'mouseover-link-grow' : ''} />
         </li>
         <li onMouseEnter={() => sethoverAbout(true)} onMouseLeave={() => sethoverAbout(false)}>
            <Link to='/about'>About</Link>
            <hr className={hoverAbout ? 'mouseover-link-grow' : ''} />
         </li>
         <li onMouseEnter={() => sethoverCont(true)} onMouseLeave={() => sethoverCont(false)}>
            <Link to='/contact'>Contact</Link>
            <hr className={hoverCont ? 'mouseover-link-grow' : ''} />
         </li>
         <li onMouseEnter={() => sethoverTest(true)} onMouseLeave={() => sethoverTest(false)}>
            <Link to='/testimonials'>And maaaaaybe Testimonials</Link>
            <hr className={hoverTest ? 'mouseover-link-grow' : ''} />
         </li>
      </nav>
   )
}

export default Nav
