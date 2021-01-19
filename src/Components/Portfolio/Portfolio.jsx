import React from 'react'
import images from './images.js'

const Portfolio = () => {
   return (
      <div className='portfolio'>
         <h1>Portfolio</h1>
         <div className='photo-grid'>
            {images.map(img => (
               <img key={img.key} src={img.src} title={img.title} alt='Portfolio Picture' />
            ))}
         </div>
      </div>
   )
}

export default Portfolio
