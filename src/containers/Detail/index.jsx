import { useEffect, useState } from 'react'
import { Container, Background, Cover, Info, ContainerVideos } from './styles'
import { getMovieCredits, getMovieDetail, getMovieSimilar, getMovieVideo } from '../../utils/get-data'
import { useParams } from 'react-router-dom'
import { getImages } from '../../utils/get-images'
import SpanGenres from '../../components/SpanGenres'
import Credits from '../../components/Credits'
import Slider from '../../components/Sliders'


function Detail() {
    const [detail, setDetail] = useState()
    const [video, setVideo] = useState()
    const [credits, setCredits] = useState()
    const [similar, setSimilar] = useState()
    const { id } = useParams()

    useEffect(() => {

        const getAllData = async () => {
            console.time('time')

            Promise.all([
                getMovieDetail(id),
                getMovieVideo(id),
                getMovieCredits(id),
                getMovieSimilar(id)
            ])
                .then(([detail, video, credits, similar]) => {
                    setDetail(detail),
                        setVideo(video),
                        setCredits(credits),
                        setSimilar(similar)

                })
                .catch(error => console.error(error))


        }


        getAllData()
    }, [])

    return (
        <>
            {detail && (
                <>
                    <Background image={getImages(detail.backdrop_path)} />
                    <Container>
                        <Cover>
                            <img src={getImages(detail.poster_path)} alt="" />
                        </Cover>
                        <Info>
                            <h2>{detail.title}</h2>
                            <SpanGenres genres={detail.genres}>Generos</SpanGenres>
                            <p>{detail.overview}</p>
                            <Credits credits={credits}></Credits>
                        </Info>

                    </Container>
                    <ContainerVideos >

                        <iframe
                            src={`https://www.youtube.com/embed/${video.key}`}
                            title="Youtube Video Player"
                            height="auto"
                            width="auto"

                        ></iframe>

                    </ContainerVideos>
                    {similar && <Slider info={similar} title={'Filmes Similares'} />}
                </>
            )}

        </>

    )
}

export default Detail