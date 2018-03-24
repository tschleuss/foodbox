const axios = require('axios')
const querystring = require('querystring')
const properties = require('../config/properties')

const api = axios.create({ baseURL: `${properties.BASE_URL}${properties.API_PATH}` })
const path = '/Customer'

export const register = ({ email, password, name, address }) =>
    api.post(`${path}`, querystring.stringify({ email, password, name, address }))

export const auth = ({ email, password }) =>
    api.post(`${path}/auth`, querystring.stringify({ email, password }))
