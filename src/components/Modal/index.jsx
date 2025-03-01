import { useEffect, useState } from "react"
import { Container, Background, ExitModal } from "./styles"
import api from "../../Services/api"

function Modal({ movieId, setShowModal }) {
    const [movie, setMovie] = useState()

    useEffect(() => {
        const getMovies = async () => {
            const {
                data: { results }
            } = await api.get(`/movie/${movieId}/videos`)
            setMovie(results[0])
            console.log("modal")
            console.log(results[0])

        }
        getMovies()
    }, [])

    return (

        <Container>
            {movie && (
                <Background onClick={()=> setShowModal (false)}>

                    <Container>
                        <ExitModal><h1>x</h1></ExitModal>
                        <iframe
                            src={`https://www.youtube.com/embed/${movie.key}`}
                            title="Youtube Video Player"
                            height="500px"
                            width="100%"

                        >{movieId}</iframe>
                    </Container>
                </Background>
            )}
        </Container>
    )
}

export default Modal