import axios from 'axios'

const CORSProxy = 'https://torrentcors.herokuapp.com/'

const api = axios.create({
    baseURL: `${CORSProxy}https://flask-uni9.herokuapp.com`,
    headers: { 'Content-Type': 'application/json' },
})

export default api
