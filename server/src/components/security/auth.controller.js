/**
 * Authenticate user credentials.
 */
const authenticate = (req, res) => {
    // Timeout on pourpose, to mock database access, password hash, and so on
    setTimeout(() => {
        const { email, password } = req.body
        if (email === 'user@email.com' && password === '123456') {
            res.json({ token: 'usqsne7fHxaxpdgryFyjuvcw6wFsyqhqrsvidnpspxsxicv2fjjucajvfk6gjhdh' })
        } else {
            res.status(401).json({ messages: ['Account information invalid.'] })
        }
    }, 1500)
}

module.exports = {
    authenticate
}
