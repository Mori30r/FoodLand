import styled from "styled-components";
import PlansBackground from '../../assets/images/plans-background.jpg'

export const PlansSection = styled.section`
position: relative;
display: flex;
flex-direction: column;
background-image: linear-gradient(to bottom right, #83B78C,  rgba(100, 130, 100, .2)) ,url(${PlansBackground});
z-index: 1;
background-size: cover;
`;

export const PlansSectionPath = styled.div`
background-color: ${ props => props.theme["orange"]};
z-index: -1;
position: absolute;
height: 100vh;
width: 50vw;
clip-path: polygon(0 100%, 100% 0, 0 0);
`;

export const PlansSectionHeading = styled.div`
align-self: end;
h1{
width: 50rem;
padding: 5rem 0;
line-height: 5rem;
}
`;

export const PlansSectionCards = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
padding: 5rem;
`;

export const PlansCard = styled.div`
border-radius: 2rem;
height: 35rem;
margin: 1rem 5rem;
display: flex;
flex-direction: column;
justify-content: space-around;
position: relative;
background-image: linear-gradient(
to right bottom,
 #DFCBA1 0%,
 #DFCBA1 20%,
 #bfdaa1 20%,
 #bfdaa1 100%
 );
`;

export const PlansCardImage = styled.div`
display: flex;
position: relative;
justify-content: center;
`;

export const PlansCardImageBox = styled.img.attrs( props => ({
    src: props.src
}))`
width: 30rem;
height: 25rem;
z-index: 1;
`;

export const PlansCardImagePizza = styled.img.attrs( props => ({
    src: props.src
}))`
width: 17rem;
height: 17rem;
z-index: 2;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`;

export const PlansCardDetail = styled.div`
display: flex;
justify-content: space-around;
`;

export const PlansCardDetailName = styled.div`
color: #575757;
font-weight: 1000;
font-size: 1.6rem;
`;

export const PlansCardDetailRate = styled.div`
color: ${ props => props.theme["red"] };
font-size: 1.6rem;
`;