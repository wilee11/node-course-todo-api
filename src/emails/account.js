const sendgridAPIKey = process.env.SENDGRID_API_KEY;
const sgMail = require ('@sendgrid/mail');

sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email, name) => {
    sgMail.send ({
        to: email,
        from : 'dmorgereth@hotmail.com',
        subject : 'Welcome to the team!',
        text : `Hi ${name}.  Nice to meet you`
    });
}

const sendCancellationEmail = (email, name) => {
    sgMail.send ({
        to: email,
        from : 'dmorgereth@hotmail.com',
        subject : 'Goodbye my friend!',
        text : `Hi ${name}.  Sorry to see you go`
    });
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}