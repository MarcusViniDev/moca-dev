import axios from "axios";

const api = axios.create ({
    baseURL: 'https://api.themoviedb.org/3/',
    params : {
        api_key: '9ec3abea25bbb90dd3f5f04cde2fab9c',
        language: 'pt-BR',
        page: 1
    }
    
})
// https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'

export default api