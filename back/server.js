// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use (cors());

app.post('/send', async (req, res) => {
    const { email, message } = req.body;

    // Configurer Nodemailer

    const mailOptions = {
        from: email,
        to: 'k.yao1305@gmail.com', // Remplacez par votre adresse email de réception
        subject: 'Nouveau contact',
        text: `De: ${email}\nMessage:\n${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send({ message: 'e-mail envoyé avec succès !' });
    } catch (error) {
        console.error('Erreur lors de l’envoi de l’e-mail :', error);
        res.status(500).send({ error: 'Erreur lors de l’envoi de l’e-mail' });
    }
});

app.listen(3000, () => {
    console.log('Serveur en cours d’exécution sur le port 3000');
});
