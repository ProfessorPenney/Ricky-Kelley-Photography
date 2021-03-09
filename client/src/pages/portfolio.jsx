import React, { useState } from 'react'

import Head from '../Components/Head'
import NavBar from '../Components/NavBar'
import PortfolioGrid from '../Components/PortfolioGrid'

import '../styles/App.scss'
import * as portfolioStyles from './portfolio.module.scss'

import largeImages from '../data/images'

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
      <div className={`${portfolioStyles.portfolio} portfolio`}>
         <Head title='Portfolio' />
         <NavBar />
         {bigPic && (
            <div className={`${portfolioStyles.bigImage}`} onClick={() => setBigPic(false)}>
               <div className='left arrow' onClick={e => scrollLeft(e)}>
                  <hr className='top' />
                  <hr className='bottom' />
               </div>
               <img src={largeImages[bigPic - 1]} alt='large img' loading='eager' />
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
            <PortfolioGrid showPic={showPic} setBigPic={setBigPic} />
         </div>
      </div>
   )
}

export default Portfolio
