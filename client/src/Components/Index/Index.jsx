import React from 'react'
import Nav from '../UI/NavBar'

const Index = () => {
   return (
      <div className='index'>
         <Nav />
         <header>
            <h1 className='logo'>
               <span className='letter-spacing'>
                  <span className='caps'>R</span>ICKY <span className='caps'>K</span>ELLE
               </span>
               Y
               <hr />
               <span className='letter-spacing'>PHOTOGRAPH</span>Y
            </h1>
         </header>
         <div className='preload' style={{ display: 'none' }}>
            <img
               src={require('../../IMG/Slideshow/Portraits - Hannah-29 SMALLER.jpg').default}
               alt=''
            />
            <img
               src={
                  require('../../IMG/Slideshow/Portraits - KatyLyonsLeach-80 SMALLER.jpg').default
               }
               alt=''
            />
            <img
               src={require('../../IMG/Slideshow/Portraits - KrisaShine-148 SMALLER.jpg').default}
               alt=''
            />
            <img
               src={require('../../IMG/Slideshow/Simon Cockle-102 (SMALLER).jpg').default}
               alt=''
            />
            <img
               src={require('../../IMG/Slideshow/Weddings - Ali and Negin_037 SMALLER.jpg').default}
               alt=''
            />
            <img
               src={require('../../IMG/Slideshow/Weddings - Ali and Negin_093 SMALLER.jpg').default}
               alt=''
            />
            <img
               src={
                  require('../../IMG/Slideshow/Weddings - Elnaz and Benham_122 (FIXED) SMALLER.jpg')
                     .default
               }
               alt=''
            />
         </div>
      </div>
   )
}

export default Index
