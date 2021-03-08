import React from 'react'
import { Link } from 'gatsby'

import Head from '../Components/Head'
import NavBar from '../Components/NavBar'
import '../styles/App.scss'

const NotFound = () => {
   return (
      <div>
         <Head title='404' />
         <NavBar />
         <h2>Page Not Found</h2>
         <p>
            <Link to='/'>Head Home</Link>
         </p>
      </div>
   )
}

export default NotFound
