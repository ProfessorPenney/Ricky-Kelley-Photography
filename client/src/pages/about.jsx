import React from 'react'

import Head from '../Components/Head'
import NavBar from '../Components/NavBar'
import '../styles/App.scss'
import * as aboutStyles from './about.module.scss'
import '@fontsource/shippori-mincho/400.css'
import '@fontsource/cormorant-garamond/700.css'

const About = () => {
   return (
      <div className={aboutStyles.about}>
         <Head title='About' />
         <NavBar />
         <h2>About Me</h2>
         <p className={aboutStyles.text}>
            I have been practicing the craft of photography for over a decade now in the beautiful
            San Francisco Bay Area. I am dedicated to helping you capture your most important
            moments while delivering the most professional product I can. I specialize in
            photojournalism which can be described as “capturing the uninterrupted moment.” This
            style allows me to better emphasize the candid moments and emotions of your special
            events. In a sense, I consider myself a photographic storyteller in the way I convey
            whole experiences through images – and through these images, I present you your most
            special experiences and memories in a way that you may cherish them forever.
         </p>
         <p className={aboutStyles.text}>
            I favor using techniques and methods that lessen the need for unnatural manipulation of
            the scene while finding more comfortable means so my clients are able to relax and be
            themselves in front of my lens. I believe the comfort level that I have achieved with my
            clients is completely evident in my past work. I do offer posed shots when it comes to
            group and family portraits but whenever possible I prefer to focus on more natural shots
            where the photographer is an unobtrusive figure. I offer photography services in such
            fields as: Weddings, Headshots, Senior Portraits, Baby Portraits, Family Portraits, Pet
            Portraits, Concerts/Shows, Prom/Homecoming, and Real Estate Photography.
         </p>
         <p className={aboutStyles.text}>I look forward to hearing from you!</p>
         <p className={aboutStyles.text}>Ricky</p>
      </div>
   )
}

export default About
