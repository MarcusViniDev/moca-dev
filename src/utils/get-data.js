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

// modal video home

export const getModalMovie = async (movieId) => {
    const {
        data: { results }
    } = await api.get(`/movie/${movieId}/videos`)
    return results[0]
}


