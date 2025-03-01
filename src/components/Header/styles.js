import styled from "styled-components";

export const Container = styled.div`
width: 100vw;
position: fixed;
top: 0;
z-index: 3;
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px 50px 20px 50px;
background-color: rgba(0,0,0,0.5);
background-color: ${ props => props.$changeBackground ? 'rgba(0,0,0,0.65)' : 'transparent' };
transition: background-color 1s ease-in-out;

img {
width: 80px;

}
`
export const Menu = styled.ul`
display: flex;
flex-flow: row nowrap;
list-style: none;
gap: 50px;

`
export const Li = styled.li`

font-size: 1.6rem;
font-weight: bold;
position: relative;

&::after {
    content: '';
    height: 3px;
    border-radius: 50px;
    width: ${(props)=>(props.$isActive?'90%':0)};
    background-color: #189b20;
    box-shadow:${(props)=>(props.$isActive?'0px 0px 2px 2px rgba(24,155,32,1)':'none')};
    position: absolute;
    bottom: -10px;
    transform: translateX(-50%);
    left: 50%;
    transition: width 0.3s ease-in-out;
}
&:hover::after {
    width: 125%;
    box-shadow: 0px 0px 3px 3px rgba(24,155,32,1);
    transition: box-shadow 0,3s ease-in-out;
}

`