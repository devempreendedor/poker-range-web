import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const API_SERVER_URL = "http://localhost:8001/api/v1"

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MmI5YjFiYTI1MzYyNjI5MTkzOGNhODkiLCJpYXQiOjE2NTkwNTU4OTMsImV4cCI6MTY1OTE0MjI5MywiaXNzdWVyIjoiRXhwcmVzcyBCb2lsZXJwbGF0ZSJ9.YEUdK98HZ0x3imqbR_pb97ztpqGiEId7lAuKPr5e_G0" 

// const token = localStorage.getItem('token')

const config: AxiosRequestConfig = {
    baseURL: API_SERVER_URL,
};

const api: AxiosInstance = axios.create(config)

api.defaults.headers.common['Authorization'] = `Bearer ${token}`

export default api