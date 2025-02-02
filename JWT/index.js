const express = require('express');
const jwt = require('jsonwebtoken');
const verifyToken = require('./middleware');

const app = express();
app.use(express.json());

const secretKey = 'secretKey';

app.listen(3000, () => {
    console.log('App is running on port 3000');
});

// Login Route
app.post('/login', (req, res) => {
    const user = {
        name: 'Aakash',
        email: 'ap@gmail.com'
    };

    jwt.sign({ user }, secretKey, { expiresIn: '300s' }, (error, token) => {
        if (error) {
            return res.status(500).json({ message: 'Error generating JWT', error });
        }

        res.json({
            token
        });
    });
});

// Public Route
app.get('/', (req, res) => {
    res.json({
        message: 'Test API with JWT'
    });
});

// Protected Profile Route
app.get('/profile', verifyToken, (req, res) => {
    res.json({
        message: 'Welcome to your profile!',
        user: req.user
    });
});