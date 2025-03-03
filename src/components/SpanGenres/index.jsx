import { Container, Generos } from "./styles"

function SpanGenres ({ genres }) {
    
    return(
        <Container>
            {genres.map( genre =>(
                <Generos key={genre.id}>{genre.name}</Generos>
            ))}
        </Container>
    ) 
    
}
export default SpanGenres