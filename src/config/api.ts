import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const API_SERVER_URL = "http://localhost:8001/api/v1"

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MmI5YjFiYTI1MzYyNjI5MTkzOGNhODkiLCJpYXQiOjE2NTkxNDI1OTQsImV4cCI6MTY1OTIyODk5NCwiaXNzdWVyIjoiRXhwcmVzcyBCb2lsZXJwbGF0ZSJ9.1z3bWUAh7zKzJ4inaaqVShwKXaoGyiEMorWrQqKm8pY" 

// const token = localStorage.getItem('token')

const config: AxiosRequestConfig = {
    baseURL: API_SERVER_URL,
};

const api: AxiosInstance = axios.create(config)

api.defaults.headers.common['Authorization'] = `Bearer ${token}`

export default api