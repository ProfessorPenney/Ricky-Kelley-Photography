import React, { useState } from 'react'
import images from './images.js'

const Portfolio = () => {
   const [bigPic, setBigPic] = useState(false)

   const showPic = e => {
      setBigPic(+e.target.dataset.id)
   }

   const scrollRight = e => {
      e.stopPropagation()
      if (bigPic === images.length) setBigPic(1)
      else setBigPic(prevPic => prevPic + 1)
   }

   const scrollLeft = e => {
      e.stopPropagation()
      if (bigPic === 1) setBigPic(images.length)
      else setBigPic(prevPic => prevPic - 1)
   }

   return (
      <div className='portfolio'>
         {bigPic && (
            <div className='bigImage' onClick={() => setBigPic(false)}>
               <div className='left arrow' onClick={e => scrollLeft(e)}>
                  <hr className='top' />
                  <hr className='bottom' />
               </div>
               <img src={images[bigPic - 1].full}></img>
               <div className='right arrow' onClick={e => scrollRight(e)}>
                  <hr className='top' />
                  <hr className='bottom' />
               </div>
            </div>
         )}
         <h1>Portfolio</h1>
         <div className='photo-grid'>
            {images.map(img => (
               <img
                  onClick={e => showPic(e)}
                  key={img.id}
                  src={img.src}
                  title={img.title}
                  alt='Portfolio Picture'
                  data-full={img.full}
                  data-id={img.id}
               />
            ))}
         </div>
      </div>
   )
}

export default Portfolio
