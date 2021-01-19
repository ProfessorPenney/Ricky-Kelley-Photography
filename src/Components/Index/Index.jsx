import React, { useEffect, useState } from 'react'
import Nav from '../UI/Nav'
import ricky from '../../IMG/pexels-horacio-rojas-2866073.jpg'

const Index = () => {
   const [showRicky, setshowRicky] = useState(false)
   const [picIndex, setPicIndex] = useState(0)

   useEffect(() => {
      rotateBackground()
   }, [picIndex])

   const rotateBackground = () => {
      setTimeout(() => {
         setPicIndex(i => {
            if (i === 5) return 0
            return i + 1
         })
      }, 8000)
   }

   return (
      <div className={`index background${picIndex}`}>
         <Nav />
         <header>
            <img src={ricky} className={showRicky ? 'showRicky' : ''} alt='photographer' />
            <h1 onMouseEnter={() => setshowRicky(true)} onMouseLeave={() => setshowRicky(false)}>
               Ricky Kelley Photography
            </h1>
            {/* <h2>takes drippy photos</h2> */}
         </header>
      </div>
   )
}

export default Index
