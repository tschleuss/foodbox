import api from './Api'
const path = '/security'

const register = async ({ email, password, name, address }) =>
    api.post(`${path}`, { email, password, name, address })

const auth = async ({ email, password }) =>
    api.post(`${path}/auth`, { email, password })

export default { register, auth }
