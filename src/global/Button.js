import styled from "styled-components";


export const Button = styled.button`
height: ${ props => props.height ? props.height : '4rem'};
width: ${ props => props.height ? props.width : '12rem'};
outline: none;
border: none;
border-radius: 4rem;
padding: 1rem 2rem;
color: white;
font-weight: 600;
background-color: ${ props => props.secondary ? 'rgba(171, 209, 178, .5)' : props.theme.red};
cursor: pointer;
box-shadow: ${ props => props.shadow && '0 .5rem 1rem rgba(0, 0, 0, .3)'};
`;
