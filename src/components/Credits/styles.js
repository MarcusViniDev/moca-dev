import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: flex;
justify-content: space-evenly;
align-items: center;
gap: 20px;

`

export const CardArtist = styled.div`
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: center;
gap: 20px;

`

export const ArtistFoto = styled.img`
max-height: 200px;
border-radius: 20px;

`

export const Name = styled.h3`
text-align: center;
font-size: 1.4rem;
font-weight: 700;
`