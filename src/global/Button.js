import styled from "styled-components";


export const Button = styled.button`
outline: none;
border: none;
border-radius: 4rem;
padding: 1rem 2rem;
color: white;
font-weight: 600;
background-color: ${ props => props.secondary && 'rgba(171, 209, 178, .5)'};
cursor: pointer;
`;
