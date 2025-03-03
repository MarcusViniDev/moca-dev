import { useEffect, useState } from "react"
import { Container, Background, ExitModal } from "./styles"
import { getMovieVideo } from "../../utils/get-data"

function Modal({ movieId, setShowModal }) {
    const [movie, setMovie] = useState()

    useEffect(() => {
        const getModal = async () => {
            setMovie(await getMovieVideo(movieId))
        }
        getModal()
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