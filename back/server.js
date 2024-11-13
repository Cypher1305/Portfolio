require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(cors({
    origin: 'https://cypher1305.onrender.com', // Remplace par ton domaine front-end
}));

// Configurer Nodemailer avec un transporteur SMTP
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587, // Utilisez 465 pour une connexion sécurisée SSL, sinon laissez 587
    secure: false, // Utilisez `true` pour SSL/TLS si vous changez le port en 465
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Route pour envoyer un e-mail et enregistrer les données
app.post('/send', async (req, res) => {
    console.log('Données reçues:', req.body);
    const { nom, email, message } = req.body;

    // Vérification des champs obligatoires
    if (!nom || !email || !message) {
        return res.status(400).json({ error: 'Tous les champs sont requis' });
    }
    // Validation basique de l'email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Email invalide' });
    }

    try {
        // Options de l'email
        const mailOptions = {
            from: email, // Adresse email configurée dans Nodemailer
            replyTo: email, // Répondre à l'utilisateur
            to: process.env.EMAIL_USER, // Votre adresse pour recevoir le message
            subject: `Message de Mme/M. ${nom}`,
            text: message,
            html: `<p>${message}</p>`,
        };

        // Envoyer l'email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error("Erreur lors de l'envoi de l'email:", error);
                return res.status(500).json({ message: "Erreur lors de l'envoi de l'email" });
            } else {
                console.log('Email envoyé:', info.response);
                return res.status(200).json({ message: 'Message envoyé avec succès' });
            }
        });

    } catch (err) {
        console.error("Erreur lors de l'enregistrement ou de l'envoi du message:", err.message);
        res.status(500).json({ message: "Erreur serveur" });
    }
});

// Lancer le serveur sur le port 3000
app.listen(3000, () => {
    console.log(`Serveur démarré sur http://localhost:3000`);
});
