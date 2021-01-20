import React, { useState } from 'react'
import images from './images.js'

const Portfolio = () => {
   const [bigPic, setBigPic] = useState(false)

   const showPic = e => {
      const index = e.target.dataset.id
      setBigPic(images[index].full)
   }

   return (
      <div className='portfolio'>
         {bigPic && (
            <div className='bigImage' onClick={() => setBigPic(false)}>
               <div className='left arrow'>
                  <hr className='top' />
                  <hr className='bottom' />
               </div>
               <img src={bigPic}></img>
               <div className='right arrow'>
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
                  data-id={img.id - 1}
               />
            ))}
         </div>
      </div>
   )
}

export default Portfolio
