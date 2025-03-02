import styled from "styled-components";

export const Background = styled.div`
 position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7); 
  z-index: 3; 
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
@media screen and (max-width: 1200px){
  width: 90%;
  
}
height: auto;
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