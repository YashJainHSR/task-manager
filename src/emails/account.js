const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.SENDER_EMAIL_ADDRESS,
        pass: process.env.SENDER_EMAIL_PASSWORD
    },
    requireTLS: true,

});

const sendWelcomeEmail = (email, name) => {
    console.log('Sending E-mail...');
    var mailOptions = {
        from: `\"Yash Jain ✌\" <${process.env.SENDER_EMAIL_ADDRESS}>`,
        to: email,
        subject: 'Thanks for Joining Task-Manager!',
        text: `Welcome to the app, ${name}.`
    };
    transporter.sendMail(mailOptions, function (error, info) {
        console.log('Processing!')
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}


module.exports = {
    sendWelcomeEmail
}
