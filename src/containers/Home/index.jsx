import { useState } from "react"
import { useEffect } from "react"
import api from "../../Services/api"
import { Background, Container, ContainerButtons, Info, Poster } from "../../styles/styles"
import Button from "../../components/Button"
import Slider from "../../components/Sliders"
import { getImages } from "../../utils/get-images"
const Home = () => {
    const [movie, setMovie] = useState()
    const [topMovies, setTopMovies] = useState()
    const [topSeries, setTopSeries] = useState()
    const [popularSeries, setPopularSeries] = useState()
    const [bestArtist, setBestArtist] = useState()

    useEffect(() => {
        const getMovies = async () => {
            const {
                data: { results }
            } = await api.get('/movie/popular')
            setMovie(results[0])
          
        }
        getMovies()

        const getTopMovies = async () => {
            const {
                data: { results }
            } = await api.get('/movie/top_rated')
            
            setTopMovies(results)
          
        }
        getTopMovies()

        const getTopSeries = async () => {
            const {
                data: { results }
            } = await api.get('/tv/top_rated')
            
            setTopSeries(results)
          
        }
        getTopSeries()

        const getPopularSeries = async () => {
            const {
                data: { results }
            } = await api.get('/tv/popular')
            
            setPopularSeries(results)
          
        }
        getPopularSeries()

        getTopSeries()

        const getBestArtist = async () => {
            const {
                data: { results }
            } = await api.get('/person/popular')
            
            setBestArtist(results)
          
        }
        getBestArtist()

    }, [])






    return (
        <>
            {movie && (
                <Background $img={getImages(movie.
                    backdrop_path)}>
                    <Container>
                        <Info>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                            <ContainerButtons>
                                <Button red={true}>Assistir Agora</Button>
                                <Button red={false}>Assistir o Trailer</Button>
                            </ContainerButtons>
                        </Info>
                        <Poster>
                            <img src={getImages(movie.poster_path)} alt="Poster-image" />
                        </Poster>
                    </Container>
                </Background>
            )}
            {topMovies && <Slider info={topMovies} title={'Top Filmes'}/>} 
            {topSeries && <Slider info={topSeries} title={'Top Series'}/>} 
            {popularSeries && <Slider info={popularSeries} title={'Séries Populares'}/>}
            {bestArtist && <Slider info={bestArtist} title={'Melhores Artistas'}/>}
        </>


    )
}
export default Home