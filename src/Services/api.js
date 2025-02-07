import axios from "axios";
const api = axios.create ({
    baseURL: 'https://api.themoviedb.org/3/',
    api_key: '9ec3abea25bbb90dd3f5f04cde2fab9c',
    language: 'pt-BR',
    page: 1
})