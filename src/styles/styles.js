import styled from "styled-components";
export const Background = styled.div`
position: relative;
    background: url(${props => props.$img}) no-repeat center / cover;
    height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    gap: 5%;

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
    }
    @media screen and (max-width:1200px) {
        height: 150vh;
    }
`
export const Container = styled.main`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    height: 100vh;

    @media screen and (max-width: 1200px){
    display: flex;
    flex-flow: column-reverse nowrap;
    justify-content: center;
    align-items: center;
    gap: 30px;
    

}


`
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