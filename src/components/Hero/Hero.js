import React from 'react';
import {NavBar, NavBarDiv, NavBarItem, NavBarLogo} from "./Hero.elements";
import {Button} from "../../global/Button";

export const Hero = () => {
    return (
        <NavBar>
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
    );
};
