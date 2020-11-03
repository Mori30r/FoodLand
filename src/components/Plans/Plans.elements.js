import styled from "styled-components";

export const PlansSection = styled.section`
position: relative;
display: flex;
flex-direction: column;
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
justify-content: space-around;
padding: 5rem;
`;

export const PlansCard = styled.div`
height: 35rem;
flex: 1;
margin: 2rem;
background-color: navajowhite;
`;
