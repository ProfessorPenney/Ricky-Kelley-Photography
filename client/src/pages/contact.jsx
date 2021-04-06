import React, { useState } from 'react'

import Head from '../Components/Head'
import NavBar from '../Components/NavBar'
import ArrowImg from '../Components/ArrowImg'

import '@fontsource/cormorant-garamond/700.css'
import '../styles/App.scss'
import * as contactStyles from './contact.module.scss'

const Contact = () => {
   const [feedback, setFeedback] = useState('')
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [phone, setPhone] = useState('')
   const [message, setMessage] = useState('')

   const buttonClick = e => {
      e.preventDefault()
      if (name === '') {
         setFeedback('Please enter your name.')
      } else if (email === '' && phone === '') {
         setFeedback('Please enter at least one contact method.')
      } else if (message === '') {
         setFeedback('Please enter a message.')
      } else {
         setFeedback('Email Sent.')
         setName('')
         setEmail('')
         setPhone('')
         setMessage('')
         // const details = {
         //    'entry.2005620554': name,
         //    'entry.1045781291': email,
         //    'entry.839337160': phone,
         //    'entry.839337160': message
         // }
         // const formBody = Object.keys(details)
         //    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(details[key]))
         //    .join('&')
         // fetch(
         //    'https://docs.google.com/forms/d/e/1FAIpQLSekePWwmvlpIxjDkleo95lzk5nC-pD5Y3p9UjIRwvRbozfycg/viewform',
         //    {
         //       method: 'POST',
         //       headers: { 'Content-type': 'x-www-form-urlencoded;charset=UTF-8' },
         //       body: formBody
         //    }
         // )
         fetch('/contactform', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
               name,
               email,
               phone,
               message
            })
         })
      }
   }

   return (
      <div className={`${contactStyles.contact} contact`}>
         <Head title='Contact' />
         <NavBar />
         <h2>Say Hello!</h2>
         <p className={contactStyles.subtitle}>
            <a href='mailto:rickykelleyphotography@gmail.com'>Email me</a> at:
            RickyKelleyPhotography@gmail.com
         </p>
         <p className={contactStyles.subtitle}>
            <ArrowImg />
         </p>
         {/* <iframe
            src='https://docs.google.com/forms/d/e/1FAIpQLSekePWwmvlpIxjDkleo95lzk5nC-pD5Y3p9UjIRwvRbozfycg/viewform?embedded=true'
            width='640'
            height='853'
            frameborder='0'
            marginheight='0'
            marginwidth='0'>
            Loading…
         </iframe> */}
         {/* <iframe
            className={contactStyles.container}
            src='about:blank'
            title='Contact Form'
            width='100%'
            height='100%'
            srcDoc="<form action='https://docs.google.com/forms/u/0/d/e/1FAIpQLSekePWwmvlpIxjDkleo95lzk5nC-pD5Y3p9UjIRwvRbozfycg/formResponse'>
            <div>
               <label>
                  Name:
                  <input
                     name='entry.2005620554'
                     type='text'
                  />
               </label>
               <label>
                  Email:
                  <input
                     name='entry.1045781291'
                     type='email'
                  />
               </label>
               <label>
                  Phone:
                  <input
                     name='entry.1166974658'
                     type='phone'
                  />
               </label>
            </div>
            <div>
               <label>
                  Message:
                  <textarea name='entry.839337160' placeholder='fart'/>
               </label>
               <div className={contactStyles.feedback}>
                  <p>{feedback}</p>
               </div>
               <button
                  type='submit'
               >
                  SUBMIT
               </button>
            </div>
         </form>">
         </iframe> */}
         <div className={contactStyles.container}>
            <form
            // action='https://docs.google.com/forms/u/0/d/e/1FAIpQLSekePWwmvlpIxjDkleo95lzk5nC-pD5Y3p9UjIRwvRbozfycg/formResponse'
            >
               <div>
                  <label>
                     Name:
                     <input
                        value={name}
                        // name='name'
                        name='entry.2005620554'
                        type='text'
                        onChange={e => setName(e.target.value)}
                     />
                  </label>
                  <label>
                     Email:
                     <input
                        value={email}
                        name='email'
                        // name='entry.1045781291'
                        type='email'
                        onChange={e => setEmail(e.target.value)}
                     />
                  </label>
                  <label>
                     Phone:
                     <input
                        value={phone}
                        name='phone'
                        // name='entry.1166974658'
                        type='phone'
                        onChange={e => setPhone(e.target.value)}
                     />
                  </label>
               </div>
               <div>
                  <label>
                     Message:
                     <textarea
                        value={message}
                        name='message'
                        // name='entry.839337160'
                        onChange={e => setMessage(e.target.value)}
                     />
                  </label>
                  <div className={contactStyles.feedback}>
                     <p>{feedback}</p>
                  </div>
                  <button type='submit' onClick={e => buttonClick(e)}>
                     SUBMIT
                  </button>
               </div>
            </form>
         </div>
      </div>
   )
}

export default Contact
