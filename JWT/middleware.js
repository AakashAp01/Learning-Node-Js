// middleware.js
const jwt = require('jsonwebtoken');
const secretKey = 'secretKey';

function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    console.log('Authorization Header:', bearerHeader); // Debug log

    if (!bearerHeader) {
        return res.status(401).json({ message: 'Unauthorized: No Token Provided' });
    }

    const tokenParts = bearerHeader.split(' ');

    if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
        return res.status(400).json({ message: 'Bad Request: Invalid Token Format' });
    }

    const token = tokenParts[1];
    console.log('Extracted Token:', token); // Debug log

    jwt.verify(token, secretKey, (err, authData) => {
        if (err) {
            console.error('JWT Verification Error:', err);
            return res.status(403).json({ message: 'Forbidden: Invalid Token', err });
        }
        req.user = authData.user;
        next();
    });
}


module.exports = verifyToken;

