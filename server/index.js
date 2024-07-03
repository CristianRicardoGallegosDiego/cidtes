const { htmlEmail } = require('./htmlCreator');
const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');
const config = require('./config');

const app = express();
app.use(
    cors(
        {
            origin: '*',
            methods: ['GET', 'POST', 'OPTIONS'],
            allowedHeaders: ['Content-Type', 'Authorization'],
            credentials: true,
            optionsSuccessStatus: 204
        }
    )
);
app.use(express.json());

const resend = new Resend(`${config.resendApiKey}`);

app.post('/send-email', async (request, response) => {
    try {
        const { name, email, message } = request.body;
        const { error } = await resend.emails.send({
            from: `${config.emailFrom}`,
            to: [`${config.emailTo}`],
            subject: 'Mensaje de contacto de la página Oficial de CIDTES A. C.',
            html: htmlEmail(name, email, message)
        });
        if (error) {
            response.status(500).json({ status: 500 });
            return;
        }
        response.status(200).json({ status: 200 });
    } catch (error) {
        response.status(500).json({ status: 500 });
    }
});

app.get('/', (request, response) => {
    response.status(200).send('Server is running');
});

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});

module.exports = app;