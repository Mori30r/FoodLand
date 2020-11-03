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
  font-size:62.5% ;
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
}
`