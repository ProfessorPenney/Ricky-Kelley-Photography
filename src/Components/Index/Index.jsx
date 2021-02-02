import React, { useEffect, useState } from 'react'
import Nav from '../UI/Nav'

const Index = () => {
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
            <h1>
               <span>Ricky Kelle</span>y
            </h1>
            <hr />
            <h1>
               <span>Photograph</span>y
            </h1>
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
