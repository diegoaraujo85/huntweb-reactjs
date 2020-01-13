import axios from 'axios';

const api = axios.create({baseURL: 'http://localhost:3001/api'});
//para o localhost funciona o projeto node-api deve estar rodando

export default api;
