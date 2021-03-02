import React from 'react'
import Nav from '../UI/NavBar'

const Index = () => {
   return (
      <div className='index'>
         <Nav />
         <header>
            <h1 className='logo1'>
               <span className='letter-spacing'>
                  <span className='caps'>R</span>ICKY <span className='caps'>K</span>ELLE
               </span>
               Y
            </h1>
            <hr />
            <h1 className='logo-line2'>
               <span className='letter-spacing2'>PHOTOGRAPH</span>Y
            </h1>
         </header>
         <div className='preload' style={{ display: 'none' }}>
            <img src={require('../../IMG/Slideshow/1.jpg').default} alt='' />
            <img src={require('../../IMG/Slideshow/2.jpg').default} alt='' />
            <img src={require('../../IMG/Slideshow/3.jpg').default} alt='' />
            <img src={require('../../IMG/Slideshow/4.jpg').default} alt='' />
            <img src={require('../../IMG/Slideshow/5.jpg').default} alt='' />
            <img src={require('../../IMG/Slideshow/6.jpg').default} alt='' />
            <img src={require('../../IMG/Slideshow/7.jpg').default} alt='' />
         </div>
      </div>
   )
}

export default Index
