import styled, {keyframes} from "styled-components";
const scale = keyframes`
from {
  transform: scale(0);
}
to {
  transform: scale(1);
}
`
export const Background = styled.div`
  position: relative;
  background: url(${(props) => props.$img}) no-repeat center / cover;
  height: 100vh;
  width: 100vw; /* Garante que cobre toda a largura */
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 5%;
  overflow: hidden; /* Garante que o pseudo-elemento não ultrapasse */

  /* Máscara preta cobrindo toda a tela */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1; /* Garante que a máscara fique acima do fundo */
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

  @media screen and (max-width: 1200px) {
    height: 150vh;
  }
`;
export const Container = styled.main`
  position: relative; /* Mantém os conteúdos acima da máscara */
  z-index: 2;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;

  @media screen and (max-width: 1200px) {
    flex-flow: column-reverse nowrap;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }
`;
export const Info = styled.div`
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: center;
z-index: 2;
width: 50%;
@media screen and (max-width:1200px) {
        width: 100%;
    }
h1 {
    font-size: 5rem;
    font-weight: 700;
    color: white;
    @media screen and (max-width:1200px) {
        margin-top: 10%;
    }
}
p{
    font-size: 1.7rem;
    margin: 5% 3%;

    @media screen and (max-width:1200px) {
        text-align:center;
    }
}
`
export const Poster = styled.div`
z-index: 2;
width: 25rem;
height: auto;
border-radius: 10px;
 img {
    width: 100%;
    border-radius: 30px;
    animation: ${scale} 0.19s linear;
 }
`
export const ContainerButtons = styled.div`
@media screen and (max-width: 1200px){
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: stretch;
    gap: 30px;

}
`