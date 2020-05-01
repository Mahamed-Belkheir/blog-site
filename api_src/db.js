const fauna = require('faunadb'); 
const fauna_secret = process.env['FAUNA_SECRET']

const client = new fauna.Client({
    secret: fauna_secret
})

const query = fauna.query

module.exports = { client, query }