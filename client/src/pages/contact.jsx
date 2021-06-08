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

   const buttonClick = () => {
      // e.preventDefault()
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
         document.querySelector('.contact-form').submit()

         // fetch('/contactform', {
         //    method: 'POST',
         //    headers: { 'Content-type': 'application/json' },
         //    body: JSON.stringify({
         //       name,
         //       email,
         //       phone,
         //       message
         //    })
         // })
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
            <form
               className='contact-form'
               method='post'
               action='https://www1.ipage.com/scripts/formemail.html'
               name='contact-form'>
               <input type='hidden' name='my_email' value='rickykelleyphotography@gmail.com' />
               <input type='hidden' name='subject' value='Photography Client Message' />
               <input
                  type='hidden'
                  name='thankyou_url'
                  value='https://rickykelleyphotography.com/contact'
               />
               <input type='hidden' name='order' value='name,email,phone,message' />
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
                  <button type='button' onClick={() => buttonClick()}>
                     SUBMIT
                  </button>
               </div>
            </form>
         </div>
      </div>
   )
}

export default Contact
