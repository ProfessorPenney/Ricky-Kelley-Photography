import React from 'react'

import Head from '../Components/Head'
import NavBar from '../Components/NavBar'

import '../styles/App.scss'
import * as indexStyles from './index.module.scss'
import '@fontsource/cormorant-garamond/300.css'

const Index = () => {
   return (
      <div className={indexStyles.index}>
         <div className={`${indexStyles.background} ${indexStyles.bg1}`} />
         <div className={`${indexStyles.background} ${indexStyles.bg2}`} />
         <div className={`${indexStyles.background} ${indexStyles.bg3}`} />
         <div className={`${indexStyles.background} ${indexStyles.bg4}`} />
         <div className={`${indexStyles.background} ${indexStyles.bg5}`} />
         <div className={`${indexStyles.background} ${indexStyles.bg6}`} />
         <div className={`${indexStyles.background} ${indexStyles.bg7}`} />
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
      </div>
   )
}

export default Index
