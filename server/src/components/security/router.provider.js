const { Router } = require('express')
const { json } = require('body-parser')

const router = Router()
const jsonParser = json()

// Setup all controllers
const authController = require('./auth.controller')

// Define all controllers endpoints
router.post('/auth', jsonParser, authController.authenticate)

module.exports = {
    getRouter: () => router
}
