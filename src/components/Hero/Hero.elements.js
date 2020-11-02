import styled from 'styled-components';


export const NavBar = styled.nav`
display: flex;
justify-content: space-between;
`;

export const NavBarDiv = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
flex: ${ props => props.links && '0 0 30%' };
`;

export const NavBarLogo = styled.div`
text-transform: uppercase;
letter-spacing: .4rem;
font-size: 2rem;
color: white;
font-weight: 1000;
`;

export const NavBarItem = styled.a`
font-size: 1.4rem;
color: white;
font-weight: 600;
text-decoration: none;
`;