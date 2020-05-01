const bcrypt = require('bcryptjs')

function encrypt(password) {
    return bcrypt.hash(password, 8)
}

function compare(password, hash) {
    return bcrypt.compare(password, hash)
}

module.exports = {
    encrypt, compare
}