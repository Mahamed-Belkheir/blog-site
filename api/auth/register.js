const hash = require('../../api_src/hash');
const auth = require('../../api_src/auth');
const { query, client } = require('../../api_src/db');

module.exports = async (req, res) => {
    if (req.body) 
        var { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.send('incomplete input!')
        return;
    }
    password = await hash.encrypt(password)
    


    try {
        await client.query(
            query.Create(
                query.Collection('users'),
                { data : { username, email, password } }
            )
        )
        let token = auth.generate(username)
        res.send({token})

    }
    catch(e) {
       res.status(401).send({error: 'user already exists'})
    }
}