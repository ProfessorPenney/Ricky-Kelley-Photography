const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')

const app = express()

app.use(cors())

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.post('/contact', async req => {
   let transporter = nodemailer.createTransport({
      service: 'Outlook',
      auth: {
         user: 'penneyprojects@outlook.com',
         pass: '3zSco5sfnh@#cXq6'
      }
   })

   let info = await transporter.sendMail(
      {
         from: `"Photography Contact" <penneyprojects@outlook.com>`,
         to: 'kpenney@gmail.com, rickykelleyphotography@gmail.com',
         subject: 'New Message',
         html: `
         <style>
            p {
               font-size: 20px;
            }
            ul {
               font-size: 20px;
            }
         </style>
            <p>You have a new contact request</p>
            <h2>Contact Details</h2>
            <ul>
               <li>Name: ${req.body.name}</li>
               <li>Email: ${req.body.email}</li>
               <li>Phone: ${req.body.phone}</li>
            </ul>
            <h2>Message</h2>
            <p>${req.body.message}</p>
            `
      },
      (error, info) => {
         if (error) return console.log(error)
         console.log('Message sent: %s', info.messageId)
      }
   )
})

const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
