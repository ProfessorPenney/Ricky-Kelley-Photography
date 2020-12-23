import React from 'react'
import pic1 from '../../IMG/portfolio/pexels-jaysen-scott-2387488.jpg'
import pic2 from '../../IMG/portfolio/pexels-julia-volk-5656747.jpg'
import pic3 from '../../IMG/portfolio/pexels-koolshooters-6087546.jpg'
import pic4 from '../../IMG/portfolio/pexels-ready-made-4298015.jpg'

const Portfolio = () => {
   return (
      <div className='portfolio'>
         <h1>Portfolio Page</h1>

         <div className='photo-grid'>
            <img src={pic1} alt='pic1' />
            <img src={pic2} alt='pic2' />
            <img src={pic3} alt='pic3' />
            <img src={pic4} alt='pic4' />
            <img src={pic2} alt='pic2' />
            <img src={pic3} alt='pic3' />
            <img src={pic1} alt='pic1' />
            <img src={pic4} alt='pic4' />
         </div>
      </div>
   )
}

export default Portfolio
