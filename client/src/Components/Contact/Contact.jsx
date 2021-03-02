import React, { useState } from 'react'
import Nav from '../UI/NavBar'
import ArrowImg from '../UI/ArrowImg'

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
      <div className='contact'>
         <Nav />
         <h2>Say Hello!</h2>
         <p className='subtitle'>
            <a href='mailto:rickykelleyphotography@gmail.com'>Email me</a> at:
            RickyKelleyPhotography@gmail.com
         </p>
         <p className='subtitle'>
            <ArrowImg />
         </p>
         <div className='container'>
            <form>
               <div>
                  <label className='grid-item'>
                     Name:
                     <input
                        value={name}
                        name='name'
                        type='text'
                        onChange={e => setName(e.target.value)}
                     />
                  </label>
                  <label className='grid-item'>
                     Email:
                     <input
                        value={email}
                        name='email'
                        type='email'
                        onChange={e => setEmail(e.target.value)}
                     />
                  </label>
                  <label className='grid-item'>
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
                  <label className='grid-item'>
                     Message:
                     <textarea
                        value={message}
                        name='message'
                        onChange={e => setMessage(e.target.value)}
                     />
                  </label>
                  <div className='feedback'>
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
