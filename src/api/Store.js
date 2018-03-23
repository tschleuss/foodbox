const axios = require('axios')
const properties = require('../config/properties')

const api = axios.create({ baseURL: `${properties.BASE_URL}${properties.API_PATH}` })
const path = '/Store'

export const list = () =>
    api.get(`${path}`)

export const search = searchText =>
    api.get(`${path}/search/${searchText}`)

export const detail = storeId =>
    api.get(`${path}/${storeId}`)

export const products = storeId =>
    api.get(`${path}/${storeId}/products`)
