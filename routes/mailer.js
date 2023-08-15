const express = require('express');
const router = express.Router();

//Backend functions
router.post('/SendEmail', async (req, res) => {
        console.log('Email sent');
        res.send('AJAX request handled in mailer.js');
});

module.exports = router;