const axios = require('axios')
const properties = require('../config/properties')

const api = axios.create({ baseURL: `${properties.BASE_URL}${properties.API_PATH}` })
const path = '/Product'

export const list = () =>
    api.get(`${path}`)

export const search = searchText =>
    api.get(`${path}/search/${searchText}`)

export const detail = productId =>
    api.get(`${path}/${productId}`)
