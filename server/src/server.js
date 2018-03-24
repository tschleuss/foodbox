const express = require('express')

const app = express()
const port = process.env.PORT || 5000

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express 3' })
})

const server = app.listen(port, () => console.log(`Listening on port ${port}`))

const shutDown = () => {
    console.log('Received kill signal, shutting down gracefully')
    server.close(() => {
        process.exit(0)
    })
}

process.on('SIGTERM', shutDown)
process.on('SIGINT', shutDown)
