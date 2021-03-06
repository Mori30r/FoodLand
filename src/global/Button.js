import styled from "styled-components";


export const Button = styled.button`
height: ${ props => props.height ? props.height : '4rem'};
width: ${ props => props.width ? props.width : '12rem'};
outline: none;
border: none;
border-radius: 4rem;
padding: 1rem 2rem;
color: white;
font-weight: 600;
background-color: ${ props => props.secondary ? 'rgba(171, 209, 178, .5)' : props.theme.red};
cursor: pointer;
box-shadow: ${ props => props.shadow && '0 .5rem 1rem rgba(0, 0, 0, .3)'};
margin: ${ props => props.center && 'auto' };
transition: all .1s ease-in-out;
&:hover{
transform: ${ props=> props.animation && 'translateX(.5rem)' };
}
@media screen and (max-width: 850px){
height: ${ props => props.height ? `calc(${props.height} + 1)` : '5rem'};
width: ${ props => props.width ? `calc(${props.width} + 2)` : '14rem'};
}
`;
