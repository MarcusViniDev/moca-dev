import styled from "styled-components";
export const Background = styled.div`
    background: url(${props => props.img}) no-repeat center / cover;
    height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    gap: 5%;

    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.3);
    }
`
export const Container = styled.main`
display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;

`
export const Info = styled.div`
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: center;
z-index: 2;
width: 40%;
h1 {
    font-size: 5rem;
    font-weight: 700;
    color: white;
}
p{
    font-size: 1.7rem;
    margin: 5% 0;
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