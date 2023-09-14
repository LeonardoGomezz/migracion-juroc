import axios from 'axios'

export default axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL as string,
  headers: {
    'Accept': 'application/json',
    'Content-Type':'application/json',
    xsrfCookie: `tenant=${process.env.NEXT_PUBLIC_TENANT as string}`,
  },
  withCredentials: true
})
