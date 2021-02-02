import React, { useState } from 'react'
import Nav from '../UI/Nav'

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
         fetch('contact', {
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
         <h2>Contact</h2>
         <div className='container'>
            <div>
               <p>Name: Ricky Kelley</p>
               <p>Email: RickyKelleyPhotography@gmail.com</p>
            </div>
            <form>
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
               <label>
                  Message:
                  <textarea
                     value={message}
                     name='message'
                     onChange={e => setMessage(e.target.value)}
                  />
               </label>
               <button type='submit' onClick={e => buttonClick(e)}>
                  Submit
               </button>
               <p>{feedback}</p>
            </form>
         </div>
      </div>
   )
}

export default Contact
