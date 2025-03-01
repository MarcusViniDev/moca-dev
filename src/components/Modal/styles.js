import styled from "styled-components";

export const Background = styled.div`
height: 100vh;
width: 100vw;
z-index: 3;
background-color: rgba(0, 0, 0, 0.4);
position: absolute;
display: flex;
justify-content: center;
align-items: center;

`
export const ExitModal = styled.button`
background-color: transparent;
border: none;
`
export const Container = styled.div`
background-color: #000;
width: 50%;
display: flex;
flex-flow: column nowrap;
justify-content: center;
gap: 20px;
align-items: center;
position: fixed;
padding: 50px;
max-width: 1500px;
z-index: 3;
 button {
    position: relative;
    left: 50%;
    &:hover {
        cursor: pointer;
    }
 }

`