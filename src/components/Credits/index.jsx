import { getImages } from "../../utils/get-images"
import { ArtistFoto, CardArtist, Container, Name } from "./styles"

function Credits({ credits }) {

    return (
        <>
            <title>Créditos</title>
            {credits && (
                <Container>
                    {credits.slice(0, 5).map( artist =>(
                        <CardArtist key={artist.id}>
                            <ArtistFoto src={getImages(artist.profile_path)} alt="imagem-artista" />
                            <Name>{artist.name}</Name>
                        </CardArtist>
                    ))}
                    
                </Container>
            )}
        </>

    )

}
export default Credits