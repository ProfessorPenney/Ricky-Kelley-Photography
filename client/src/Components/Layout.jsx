import React from 'react'

import NavBar from './NavBar'
import '../styles/App.scss'

const Layout = ({ children }) => {
   return (
      <>
         <NavBar />
         {children}
      </>
   )
}

export default Layout
