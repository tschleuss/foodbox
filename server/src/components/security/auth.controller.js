/**
 * Authenticate user credentials.
 */
const authenticate = (req, res) => {
    const { email, password } = req.body
    if (email === 'user@email.com' && password === '123456') {
        res.json({ token: 'usqsne7fHxaxpdgryFyjuvcw6wFsyqhqrsvidnpspxsxicv2fjjucajvfk6gjhdh' })
    } else {
        res.status(401).json({ messages: ['Account information invalid.'] })
    }
}

module.exports = {
    authenticate
}
