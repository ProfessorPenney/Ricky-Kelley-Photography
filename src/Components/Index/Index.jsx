import React, { useEffect, useState } from 'react'
import Nav from '../UI/Nav'
import ricky from '../../IMG/pexels-horacio-rojas-2866073.jpg'
// import pic1 from '../../IMG/landscapes/Beach Sunset.jpg'
// import pic2 from '../../IMG/landscapes/IMG_9469 (2).JPG'
// import pic3 from '../../IMG/landscapes/IMG_9698 Diff NEW.jpg'
// import pic4 from '../../IMG/landscapes/Mt Burdell Sunset.JPG'
// import pic5 from '../../IMG/landscapes/Spring Blossoms 2.jpg'
// import pic6 from '../../IMG/landscapes/IMG_9531 Diff.jpg'

// const bgs = [pic1, pic2, pic3, pic4, pic5, pic6]

const Index = () => {
   const [showRicky, setshowRicky] = useState(false)
   const [picIndex, setPicIndex] = useState(0)

   useEffect(() => {
      rotateBackground()
   }, [])

   const rotateBackground = () => {
      console.log(picIndex)
      setTimeout(() => {
         setPicIndex(i => {
            rotateBackground()
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
               Hot Ricky
            </h1>
            <h2>takes drippy photos</h2>
         </header>
      </div>
   )
}

export default Index
