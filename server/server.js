const express = require('express')
const nodemailer = require('nodemailer')

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.post('/contact', (req) => {
   let testAccount = await nodemailer.createTestAccount()

   let transporter = modemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
         user: testAccount.user,
         pass: testAccount.pass
      }
   })

   let info = await transporter.sendMail({
      from: '"Rickys Website" <ricky@website.com>',
      to: "kpenney@gmail.com"
   })
})

const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
