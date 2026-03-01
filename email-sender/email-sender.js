require('dotenv').config();
const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS
  }
});
let mailOptions = {
  from: process.env.EMAIL,
  to: process.env.mailo,
  subject: 'Test Email',
  text: 'Hello from Node.js   lll'
};
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});