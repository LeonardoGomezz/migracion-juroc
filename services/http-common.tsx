import axios from 'axios'
import config from './infraestructure/config'

export default axios.create({
  baseURL: config.API_URL as string,
  headers: {
    'Accept': 'application/json',
    'Content-Type':'application/json',
    xsrfCookie: `tenant=${config.TENANT_MC as string}`,
  },
  withCredentials: true
})
