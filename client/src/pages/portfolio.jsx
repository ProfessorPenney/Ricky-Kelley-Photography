import React, { useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Head from '../Components/Head'
import NavBar from '../Components/NavBar'

import '../styles/App.scss'
import * as portfolioStyles from './portfolio.module.scss'

import images from '../data/images.js'

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

   const testImage = '../IMG/faces_of_ricky.jpg'

   return (
      <div className={`${portfolioStyles.portfolio} portfolio`}>
         <Head title='Portfolio' />
         <NavBar />
         {/* <h2>My Work</h2> */}
         {bigPic && (
            <div className={`${portfolioStyles.bigImage}`} onClick={() => setBigPic(false)}>
               <div className='left arrow' onClick={e => scrollLeft(e)}>
                  <hr className='top' />
                  <hr className='bottom' />
               </div>
               <StaticImage
                  src={images[bigPic - 1].full}
                  alt='portfolio pic'
                  placeholder='blurred'
               />
               <div className='right arrow' onClick={e => scrollRight(e)}>
                  <hr className='top' />
                  <hr className='bottom' />
               </div>
               <div className={`${portfolioStyles.closePic}`}>
                  <hr />
                  <hr />
               </div>
            </div>
         )}
         <div className={`${portfolioStyles.photoGrid}`}>
            <StaticImage src={testImage} />
            {images.map(img => (
               <StaticImage
                  onClick={e => showPic(e)}
                  key={img.id}
                  src={img.src}
                  title={img.title}
                  alt='portfolio'
                  data-full={img.full}
                  data-id={img.id}
                  loading='lazy'
               />
            ))}
         </div>
      </div>
   )
}

export default Portfolio
