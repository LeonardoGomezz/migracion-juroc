import http from './http-common'
import httpBook from './http-common-booking'
import {createBooking, credentials, PostData} from './types'
import config from './infraestructure/config'
import axios from 'axios'
import moment from 'moment'

const apiVersion = '/api/v2/lead'
const pathBooking='/api/v1/booking'
const pathGoogle='/api/v1/integration/google'

const formService = (data:PostData) => {
  return http.post<PostData>(apiVersion, data)
}

const getRegister = (form:string) => {
  const configuration = {
    method: 'get',
    url: `${config.API_URL}${apiVersion}?form=${form}`,
    headers: {
      'Authorization': 'Bearer ' + config.ACCESS_TOKEN,
      xsrfCookie: `tenant=${config.TENANT}`,
    },
    withCredentials: true
  }
  return axios.request(configuration)
}

/* S3 SERVICE */
const configAxiosS3 = {
  headers: {
    'xsrfCookie': `tenant=${config.TENANT as string}`,
    'maxBodyLength': Infinity,
    'Content-Type': 'multipart/form-data'
  }
}

const s3Service = (fileKey:any) => {
  return axios.post(`${config.API_URL as string}/api/v2/file/upload`, fileKey, configAxiosS3)
}

const deleteFileS3 = (fileKey:any) => {
  return axios.delete(`${config.API_URL as string}/api/v2/file/${fileKey}`, configAxiosS3)
}

const getCities = () => {
  return axios.get(config.API_CITIES)
}

// Booking Module //
const getAllBooking = () => {
  return httpBook.get<createBooking>(`${pathBooking}/2023-01-01T00:00:00.000Z/2023-01-01T00:00:00.000Z`)
}

const postBooking = (data: createBooking) => {
  return httpBook.post<createBooking>(pathBooking, data)
}

const getBooking = (code: string, startDate: string, dni: string) => {
  return httpBook.get<createBooking>(`${pathBooking}?booking_code=${code}&start_date=${startDate}&dni=${dni}`)
}

const Services = {
  formService,
  s3Service,
  deleteFileS3,
  getCities,
  getRegister,
  getAllBooking,
  postBooking,
  getBooking
}

export default Services

/* Get token or verify if token exits */
export function googleAuthToken(){
  return httpBook.get<any>(`${pathGoogle}/token`)
}

export function googleAuthConfig(){
  return httpBook.get<any>(`${pathGoogle}/config`)
}

/* GET ACCESS AND REFRESH TOKEN */
export function getTokens(data:any, code:string){
  const dataToken = {
    code: code,
    client_id: data.clientId as string,
    client_secret: data.clientSecret as string,
    grant_type: 'authorization_code',
    redirect_uri: data.redirectUri as string,
  }
  return axios.post('https://accounts.google.com/o/oauth2/token', dataToken)
}

/* SAVE CREDENTIAL ACCESS */
export function saveCredentialsAccess(data:any, code:string){
  const initSave = {
    code: code,
    accessToken: data.access_token,
    refreshToken: data.refresh_token,
    expiryDate: data.expires_in,
    tokenType: data.token_type
  }
  return httpBook.post<credentials>(`${pathGoogle}/token?code=${code}`, initSave)
}

//GOOGLE CALENDAR//
export function getCalendarEvents(accessToken:string, timeMax:string){
  const minTime = `${moment(timeMax).format('YYYY-MM-DD')}T08:00:00-05:00`
  const maxTime = `${moment(timeMax).format('YYYY-MM-DD')}T20:00:00-05:00`
  const settings = {
    method: 'get',
    url: `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_REACT_APP_CALENDAR_ID as string}/events?&timeMin=${minTime}&timeMax=${maxTime}&key=${process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_API_KEY as string}`,
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Accept': 'application/json',
    },
  }
  return axios(settings)
}

export function getAccessToken(){
  return httpBook.get<any>(`${pathGoogle}/token`)
}
