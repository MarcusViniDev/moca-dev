import { useState } from "react"
import { useEffect } from "react"
import { Background, Container, ContainerButtons, Info, Poster } from "../../styles/styles"
import Button from "../../components/Button"
import Slider from "../../components/Sliders"
import { getImages } from "../../utils/get-images"
import Modal from "../../components/Modal"
import { getBestArtist, getMovies, getPopularMovies, getPopularSeries, getTopMovies, getTopSeries } from "../../utils/get-data"
import { useNavigate } from 'react-router-dom'


const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const [movie, setMovie] = useState();
    const [popularMovie, setPopularMovie] = useState();
    const [topMovies, setTopMovies] = useState();
    const [topSeries, setTopSeries] = useState();
    const [popularSeries, setPopularSeries] = useState();
    const [bestArtist, setBestArtist] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        const getAllData = async () => {
            console.time('time')

            Promise.all([
                getMovies(),
                getPopularMovies(),
                getTopMovies(),
                getTopSeries(),
                getPopularSeries(),
                getBestArtist()
            ])
                .then(([movies, popularMovie, topMovie, topSeries, popularSeries, bestArtists]) => {
                    setMovie(movies)
                    setPopularMovie(popularMovie)
                    setTopMovies(topMovie)
                    setTopSeries(topSeries)
                    setPopularSeries(popularSeries)
                    setBestArtist(bestArtists)
                })
                .catch(error => console.error(error))

                console.timeEnd('time')


        }


        getAllData()
    }, [])






    return (
        <>
            {movie && (
                <Background $img={getImages(movie.backdrop_path)}>
                    {showModal && (
                        <Modal movieId={movie.id} setShowModal={setShowModal} />
                    )}
                    <Container>
                        <Info>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                            <ContainerButtons>
                                <Button red onClick ={()=>navigate(`/detail/${movie.id}`)}>Assistir Agora</Button>
                                <Button onClick={() => setShowModal(true)} red={false}>Assistir o Trailer</Button>
                            </ContainerButtons>
                        </Info>
                        <Poster>
                            <img src={getImages(movie.poster_path)} alt="Poster-image" />
                        </Poster>
                    </Container>
                </Background>
            )}
            {popularMovie && <Slider info={popularMovie} title={'Filmes Populares'} />}
            {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
            {topSeries && <Slider info={topSeries} title={'Top Series'} />}
            {popularSeries && <Slider info={popularSeries} title={'Séries Populares'} />}
            {bestArtist && <Slider info={bestArtist} title={'Melhores Artistas'} />}
        </>


    )
}
export default Home