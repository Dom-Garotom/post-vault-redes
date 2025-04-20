import axios from 'axios'
import { baseUrl } from './apiConfig'

type Response = {
  data?: unknown
  error?: boolean
}

export const getAll = async (
  path: string,
  url: string = baseUrl
): Promise<Response> => {
  return await axios
    .get(`${url}${path}`)
    .then((response) => {
      return { data: response.data }
    })
    .catch((error) => {
      return { error }
    })
}

export const getOne = async (
  path: string,
  url: string = baseUrl
): Promise<Response> => {
  return await axios
    .get(`${url}${path}`)
    .then((response) => {
      return { data: response.data }
    })
    .catch((error) => {
      return { error }
    })
}

export const post = async <Type> (
  path: string,
  data: Type,
  url: string = baseUrl
): Promise<Response> => {
  return await axios
    .post(`${url}${path}`, data)
    .then((response) => {
      return { data: response.data }
    })
    .catch((error) => {
      return { error }
    })
}

export const put = async <Type> (
  path: string,
  data: Type,
  url: string = baseUrl
): Promise<Response> => {
  console.log(`${url}${path}`, data)
  return await axios
    .put(`${url}${path}`, data)
    .then((response) => {
      return { data: response.data }
    })
    .catch((error) => {
      return { error }
    })
}

export const remove = async (
  path: string,
  url: string = baseUrl
): Promise<Response> => {
  return await axios
    .delete(`${url}${path}`)
    .then((response) => {
      return { data: response }
    })
    .catch((error) => {
      return { error }
    })
}
