import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const API_SERVER_URL = "http://localhost:8001/api/v1"

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MmI5YjFiYTI1MzYyNjI5MTkzOGNhODkiLCJpYXQiOjE2NTg4ODQyNDcsImV4cCI6MTY1ODk3MDY0NywiaXNzdWVyIjoiRXhwcmVzcyBCb2lsZXJwbGF0ZSJ9.Z5LauwowUqtqOfI-O1ltBcSOBqGLt0cnvkBAS4Kp5hU" 

// const token = localStorage.getItem('token')

const config: AxiosRequestConfig = {
    baseURL: API_SERVER_URL,
};

const api: AxiosInstance = axios.create(config)

api.defaults.headers.common['Authorization'] = `Bearer ${token}`

export default api