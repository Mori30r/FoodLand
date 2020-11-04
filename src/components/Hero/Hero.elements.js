import styled from 'styled-components';

export const NavBar = styled.nav`
display: flex;
justify-content: space-between;
padding: 2rem;
`;

export const NavBarDiv = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex: ${ props => props.links && '0 0 30%' };
`;

export const NavBarLogo = styled.div`
text-transform: uppercase;
letter-spacing: .4rem;
font-size: 2rem;
color: white;
font-weight: 1000;
padding-left: 8rem;
@media screen and (max-width: 1085px){
padding-left: 3rem;
}
@media screen and (max-width: 520px){
display: none;
}
`;

export const NavBarItem = styled.a`
font-size: 1.4rem;
color: white;
font-weight: 600;
text-decoration: none;
padding: 0 1rem;
width: 10rem;
`;

export const MainHero = styled.div`
z-index: 0;
display: flex;
justify-content: space-between;
align-items: center;
height: 87vh;
@media screen and (max-width: 850px){
justify-content: space-around;
}
@media screen and (max-width: 680px){
height: 50vh;
}
`;

export const MainHeroRight = styled.div`
position: relative;
`;

export const MainHeroRightPath = styled.div`
position: absolute;
top: 50%;
left: 100%;
transform: translate(-100%, -50%);
z-index: -1;
background-color: ${ props => props.theme["orange"]};
height: 100vh;
width: 50vw;
clip-path: polygon(100% 100%, 100% 0%, 0% 100%);
`;

export const MainHeroLeft = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
padding-left: 10rem;
@media screen and (max-width: 1085px){
padding-left: 5rem;
}
@media screen and (max-width: 750px){
padding-left: 10rem;
}
@media screen and (max-width: 680px){
padding-left: 15rem;
}
`;

export const MainHeroLeftHeader = styled.h1`
width: 40rem;
line-height: 5rem;
`;

export const MainHeroLeftParagraph = styled.p`
color: white;
opacity: .8;
font-size: 2rem;
width: 35rem;
padding: 2rem .2rem;
`;

export const MainHeroRightImage = styled.img.attrs( props => ({
    src: props.src
}))`
z-index: 2;
width: 65rem;
height: 45rem;
transition: all .5s;
&:hover{
transform: translateX(-5rem);
}
@media screen and (max-width: 850px){
width: 55rem;
height: 35rem;
}
@media screen and (max-width: 680px){
display: none;
}
`;
