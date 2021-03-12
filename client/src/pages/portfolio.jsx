import React, { useState } from 'react'

import Head from '../Components/Head'
import NavBar from '../Components/NavBar'

import '../styles/App.scss'
import * as portfolioStyles from './portfolio.module.scss'

import images from '../data/images'

const Portfolio = () => {
   const [bigPic, setBigPic] = useState(false)

   const showPic = e => {
      setBigPic(+e.target.dataset.id)
   }

   const scrollRight = e => {
      e.stopPropagation()
      if (bigPic === 63) setBigPic(1)
      else setBigPic(prevPic => prevPic + 1)
   }

   const scrollLeft = e => {
      e.stopPropagation()
      if (bigPic === 1) setBigPic(63)
      else setBigPic(prevPic => prevPic - 1)
   }

   return (
      <div className={portfolioStyles.portfolio}>
         <Head title='Portfolio' />
         <NavBar />
         {bigPic && (
            <div className={portfolioStyles.bigImage} onClick={() => setBigPic(false)}>
               <div
                  className={`${portfolioStyles.left} ${portfolioStyles.arrow}`}
                  onClick={e => scrollLeft(e)}>
                  <hr />
                  <hr />
               </div>
               <img src={images[bigPic - 1].full} alt='Detailed' />
               <div
                  className={`${portfolioStyles.right} ${portfolioStyles.arrow}`}
                  onClick={e => scrollRight(e)}>
                  <hr />
                  <hr />
               </div>
               <div className={`${portfolioStyles.closePic}`}>
                  <hr />
                  <hr />
               </div>
            </div>
         )}
         <div className={`${portfolioStyles.photoGrid}`}>
            {images.map((pic, i) => (
               <img
                  onClick={e => showPic(e)}
                  key={i}
                  src={pic.src}
                  alt='Thumbnail'
                  data-id={i + 1}
                  loading={i < 8 ? 'eager' : 'lazy'}
               />
            ))}
         </div>
      </div>
   )
}

export default Portfolio
