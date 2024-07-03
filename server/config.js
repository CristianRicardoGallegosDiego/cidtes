require('dotenv').config();

module.exports = {
    port: process.env.PORT,
    resendApiKey: process.env.RESEND_API_KEY,
    emailFrom: process.env.EMAIL_FROM,
    emailTo: process.env.EMAIL_TO
};