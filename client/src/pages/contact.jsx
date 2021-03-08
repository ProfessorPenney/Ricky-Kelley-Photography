import React, { useState } from 'react'

import Head from '../Components/Head'
import NavBar from '../Components/NavBar'
import ArrowImg from '../Components/ArrowImg'
import '../styles/App.scss'
import * as contactStyles from './contact.module.scss'
import '@fontsource/cormorant-garamond/700.css'

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
         <div className={contactStyles.container}>
            <form>
               <div>
                  <label>
                     Name:
                     <input
                        value={name}
                        name='name'
                        type='text'
                        onChange={e => setName(e.target.value)}
                     />
                  </label>
                  <label>
                     Email:
                     <input
                        value={email}
                        name='email'
                        type='email'
                        onChange={e => setEmail(e.target.value)}
                     />
                  </label>
                  <label>
                     Phone:
                     <input
                        value={phone}
                        name='phone'
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
