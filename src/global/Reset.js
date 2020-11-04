import {createGlobalStyle} from "styled-components";
import Itim from './../assets/fonts/Itim/Itim.ttf';

export const GlobalStyle = createGlobalStyle`
*::before,
*,
*::after{
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html{
  font-size:62.5%;
  @media screen and (max-width: 1085px){
    font-size: 60%;
  }
  @media screen and (max-width: 980px){
  font-size: 58%;
  }
  @media screen and (max-width: 850px){
  font-size: 55%;
  }
  @media screen and (max-width: 800px){
  font-size: 53%;
  }
  @media screen and (max-width: 750px){
  font-size: 50%;
  }
  @media screen and (max-width: 325px){
  font-size: 45%;
  }
}

body{
  font-family: "Open Sans", sans-serif;
  box-sizing: border-box;
  background-color: ${ props => props.theme.green};
}

@font-face {
  font-family: "Itim";
  src: local("Itim"),
  url(${ Itim }) format("truetype");
  font-weight: normal;
}

h1{
font-family: Itim, sans-serif;
font-size: 7rem;
color: white;
@media screen and (max-width: 1085px){
font-size: 6rem;
}
@media screen and (max-width: 380px){
font-size: 5rem;
}
}
`