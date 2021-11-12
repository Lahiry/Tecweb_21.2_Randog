import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://glacial-savannah-41879.herokuapp.com/api',
})