const jwt = require('jsonwebtoken')
const jwt_secret = process.env['JWT_SECRET'] || 'jwt_secret';

async function verify(token) {
    try {
        return await jwt.verify(token, jwt_secret);
    }
    catch(err) {
        return false;
    }
}

function generate(user) {
    return jwt.sign({ user }, jwt_secret, { expiresIn: '15m' })
}

module.exports = {
    verify, generate
}