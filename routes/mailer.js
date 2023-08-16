const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

//Backend functions
router.post('/SendEmail', async (req, res) => {
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: req.body.email,
        to: process.env.EMAIL_USER,
        subject: `Message from ${req.body.email}: ${req.body.subject}`,
        text: req.body.message
    }

    transporter.verify(function (error, info){
        if(error){
            console.log(error);
            res.status(500).send('Email could not be sent');
        }
        else{
            console.log(info.response);
            res.status(200).send('Email sent successfully');
        }
    })
    
});

module.exports = router;