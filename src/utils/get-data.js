import api from "../Services/api";

// menu header

export const getMovies = async () => {
    const {
        data: { results }
    } = await api.get('/movie/popular')
    return (results[0])
}

// card filmes populares

export const getPopularMovies = async () => {
    const {
        data: { results }
    } = await api.get('/movie/popular')
    return results
}

// card filmes top

export const getTopMovies = async () => {
    const {
        data: { results }
    } = await api.get('/movie/top_rated')
    return results
}

// card series top

export const getTopSeries = async () => {
    const {
        data: { results }
    } = await api.get('/tv/top_rated')
    return results
}

// card séries populares

export const getPopularSeries = async () => {
    const {
        data: { results }
    } = await api.get('/tv/popular')
    return results
}

// card artistas

export const getBestArtist = async () => {
    const {
        data: { results }
    } = await api.get('/person/popular')
    return results
}

// tela detail

// modal video home

export const getMovieVideo = async (movieId) => {
    const {
        data: { results }
    } = await api.get(`/movie/${movieId}/videos`)
    return results[0]
}


export const getMovieDetail = async (movieId) => {
    const {data} = await api.get(`/movie/${movieId}`)
    return data
}

export const getMovieCredits = async (movieId) => {
    const {
        data:{ cast }
    } = await api.get(`/movie/${movieId}/credits`)
    return cast
}
export const getMovieSimilar = async (movieId) => {
    const {
        data: { results }
    } = await api.get(`/movie/${movieId}/similar`)
    return results
}



