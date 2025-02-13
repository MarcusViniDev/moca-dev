import { useState } from "react"
import { useEffect } from "react"
import api from "../../Services/api"
import { Background, Container, ContainerButtons, Info, Poster } from "../../styles/styles"
import Button from "../../components/Button"
const Home = () => {
    const [movie, setMovie] = useState()

    useEffect(() => {
        const getMovies = async () => {
            const {
                data: { results }
            } = await api.get('/movie/popular')
            setMovie(results[0])

            
        }
        getMovies()

    }, [])






    return (
        <>
            {movie && (
                <Background img={`https://image.tmdb.org/t/p/original${movie.
                    backdrop_path}`}>
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
                            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="Poster-image" />
                        </Poster>
                    </Container>
                </Background>
            )}
        </>


    )
}
export default Home