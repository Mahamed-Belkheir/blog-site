const hash = require('../../api_src/hash');
const auth = require('../../api_src/auth');
const { query, client } = require('../../api_src/db');

module.exports = async (req, res) => {
    const { email, password } = req.body;
    if ( !email || !password ) {
        res.send('incomplete input!')
        return;        
    }
    try {
        let { data } = await client.query(
            query.Get(
                query.Match(
                    query.Index('user_emails'), email
                )
            )
        )
        let result =  await hash.compare(password, data.password)
        if (!result) {
            res.send({error: 'wrong password'})
            return
        }
        let token = auth.generate(data.username)
        res.send({ token })
    }
    catch (e) {
        res.send({error: 'user not found'})
    }
}