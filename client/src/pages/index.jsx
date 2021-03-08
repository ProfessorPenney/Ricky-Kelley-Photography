import React from 'react'

import Head from '../Components/Head'
import NavBar from '../Components/NavBar'
import '../styles/App.scss'
import * as indexStyles from './index.module.scss'
import '@fontsource/cormorant-garamond/300.css'

const Index = () => {
   return (
      <div className={`${indexStyles.index} index`}>
         <Head title='Home' />
         <NavBar page='index' />
         <header>
            <h1>
               <span className={indexStyles.letterSpacing}>
                  <span className={indexStyles.caps}>R</span>ICKY
                  <span className={indexStyles.caps}> K</span>ELLE
               </span>
               Y
            </h1>
            <hr />
            <h1 className={indexStyles.logoLine2}>
               <span className={indexStyles.letterSpacing2}>PHOTOGRAPH</span>Y
            </h1>
         </header>
         {/* <div className='preload' style={{ display: 'none' }}>
            <img src={require('../IMG/Slideshow/1.jpg').default} alt='' />
            <img src={require('../IMG/Slideshow/2.jpg').default} alt='' />
            <img src={require('../IMG/Slideshow/3.jpg').default} alt='' />
            <img src={require('../IMG/Slideshow/4.jpg').default} alt='' />
            <img src={require('../IMG/Slideshow/5.jpg').default} alt='' />
            <img src={require('../IMG/Slideshow/6.jpg').default} alt='' />
            <img src={require('../IMG/Slideshow/7.jpg').default} alt='' />
         </div> */}
      </div>
   )
}

export default Index
