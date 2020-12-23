import React, { useState } from 'react'
import Nav from '../UI/Nav'
import ricky from '../../IMG/pexels-horacio-rojas-2866073.jpg'

const Index = () => {
   const [showRicky, setshowRicky] = useState(false)

   return (
      <div className='index'>
         <Nav />
         <header>
            <img src={ricky} className={showRicky ? 'showRicky' : ''} />
            <h1 onMouseEnter={() => setshowRicky(true)} onMouseLeave={() => setshowRicky(false)}>
               Hot Ricky
            </h1>
            <h2>takes drippy photos</h2>
         </header>
      </div>
   )
}

export default Index
