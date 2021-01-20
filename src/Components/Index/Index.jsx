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
         <div className='preload' style={{ display: 'none' }}>
            <img src={require('../../IMG/landscapes/IMG_9469 (2).JPG').default} alt='' />
            <img src={require('../../IMG/landscapes/IMG_9531 Diff.jpg').default} alt='' />
            <img src={require('../../IMG/landscapes/IMG_9698 Diff NEW.jpg').default} alt='' />
            <img
               src={require('../../IMG/landscapes/Mt Burdell (Diff Aspect).jpg').default}
               alt=''
            />
            <img src={require('../../IMG/landscapes/Spring Blossoms 2.jpg').default} alt='' />
         </div>
      </div>
   )
}

export default Index
