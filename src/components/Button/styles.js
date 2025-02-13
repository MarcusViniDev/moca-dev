import styled, { css } from "styled-components";

const buttonStyles = css`
background-color: transparent;
border: 3px solid white;
border-radius: 23px;
padding: 15px 40px;
margin: 0 10px;
transition: 0.2s ease-in-out;

font-size: 1.5rem;
font-weight: 900;
color: white;
&:hover {
    background-color: white;
    color: red;
    cursor: pointer;
    
}`


export const ButtonWhite = styled.button`
${buttonStyles}

`

export const ButtonRed = styled.button`
${buttonStyles}
background-color: rgba(199,0,0,1);
border: 4px solid transparent;
box-shadow: 0px 0px 13px 1px rgba(199,0,0,1) ;

&:hover {
    background-color: red;
    color: white;
    cursor: pointer;
    box-shadow: 0px 0px 15px 5px rgba(255,0,0,1);
    
}
`