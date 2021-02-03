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
         fetch('http://localhost:4000/contact', {
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
            <form>
               <div className='grid-item'>
                  <h3>Contact Ricky Kelley:</h3>
                  {/* <p> Ricky Kelley</p> */}
                  {/* <h3>Email: </h3> */}
                  <p>RickyKelleyPhotography</p>
                  <p>@gmail.com</p>
               </div>
               <label className='grid-item'>
                  Name:
                  <textarea
                     value={name}
                     name='name'
                     type='text'
                     onChange={e => setName(e.target.value)}
                  />
               </label>
               <label className='grid-item'>
                  Email:
                  <textarea
                     value={email}
                     name='email'
                     type='email'
                     onChange={e => setEmail(e.target.value)}
                  />
               </label>
               <label className='grid-item'>
                  Phone:
                  <textarea
                     value={phone}
                     name='phone'
                     type='phone'
                     onChange={e => setPhone(e.target.value)}
                  />
               </label>
               <button type='submit' onClick={e => buttonClick(e)}>
                  Submit
               </button>
               <label className='grid-item grid-item-big'>
                  Message:
                  <textarea
                     value={message}
                     name='message'
                     onChange={e => setMessage(e.target.value)}
                  />
               </label>
               <p className='feedback'>{feedback}</p>
            </form>
         </div>
      </div>
   )
}

export default Contact
