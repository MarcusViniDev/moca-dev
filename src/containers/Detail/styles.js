import styled, {keyframes} from "styled-components";

const scale = keyframes`
    from {
        transform: scale(0)
    }
    to {
        transform: scale(1)
    }
`

export const Background = styled.div`
background: url(${props => props.image}) center / cover no-repeat;
height: 50vh;
position: relative;
z-index: -1;

&::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);

    }
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 5%;
        background-image: linear-gradient(to top, #000, rgba(0,0,0,0));
    }


`
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5%;
  height: auto; /* Alterado de 100vh para evitar cortes */
  width: 100vw;
  margin-top: -150px; /* Reduzido para melhorar o layout */
  

  @media screen and (max-width: 1200px) {
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
    margin-top: -100px;
    gap: 20px;
  }
`

export const Cover = styled.div`
padding: 20px;
display: flex;
justify-content: center;
align-items: flex-start;
img {
    width: 400px;
    border-radius: 20px;
    animation:${scale} 0.19s linear;
}

`
export const Info = styled.div`
padding: 20px;
width: 50%;
display: flex;
flex-flow: column nowrap;
justify-content: start;
align-items: center;
gap: 30px;

h2 {
    font-size: 3.2rem;
    font-weight: 700;
}
p {
    font-size: 1.45rem;
}
`
export const ContainerVideos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  width: 100%;
  position: relative;
  z-index: 10; /* Garante que o vídeo fique acima, mas sem sobreposição indevida */
  
  iframe {
    width: 100%;
    max-width: 800px;
    height: 400px;
    
    @media (max-width: 768px) {
      height: 300px;
    }
    
    @media (max-width: 480px) {
      height: 200px;
    }
  }
`;
