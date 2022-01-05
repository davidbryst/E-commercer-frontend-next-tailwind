import axios from 'axios';

const httpClient = axios.create({
    baseURL: 'http://localhost:8080/v1/service/',
    withCredentials: true,
});

export default httpClient;
