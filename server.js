const express = require('express');
const app = express();
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    console.log('Homepage loaded');
    res.render('index');
});

//Routes
const mailerRouter = require('./routes/mailer');
app.use('/mailer', mailerRouter)

app.listen(PORT, () => console.log('Listening on port:' + PORT));