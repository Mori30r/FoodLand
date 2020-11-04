import React from 'react';
import Pizza from './../../assets/images/pizza.png';

import {
    MainHero,
    MainHeroLeft, MainHeroLeftHeader,
    MainHeroLeftParagraph,
    MainHeroRight, MainHeroRightImage, MainHeroRightPath,
    NavBar,
    NavBarDiv,
    NavBarItem,
    NavBarLogo
} from "./Hero.elements";
import {Button} from "../../global/Button";

export const Hero = () => {
    return (
        <>
            <NavBar>
                <MainHeroRightPath/>
                <NavBarDiv>
                    <NavBarLogo>Logo.</NavBarLogo>
                </NavBarDiv>
                <NavBarDiv links>
                    <NavBarItem>Contact Us</NavBarItem>
                    <NavBarItem>Discounts</NavBarItem>
                    <NavBarItem>Foods</NavBarItem>
                    <Button secondary>Order Now</Button>
                </NavBarDiv>
            </NavBar>
            <MainHero>
                <MainHeroLeft>
                    <MainHeroLeftHeader>Online Pizza Ordering.</MainHeroLeftHeader>
                    <MainHeroLeftParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</MainHeroLeftParagraph>
                    <Button animation width='17rem' height='6rem' shadow>Order Now</Button>
                </MainHeroLeft>
                <MainHeroRight>
                    <MainHeroRightImage src={Pizza}/>
                </MainHeroRight>
            </MainHero>
        </>
    );
};
