import React from 'react';
import {
    FooterContainer,
    FooterContainerLegalSection, FooterContainerLegalText,
    FooterContainerLogoSection,
    FooterContainerLogoWrapper
} from "./Footer.elements";
import {AiFillGithub, AiFillTwitterCircle} from "react-icons/all";

export const Footer = () => {
    return (
        <FooterContainer>
            <FooterContainerLogoSection>
                <FooterContainerLogoWrapper href='https://github.com/mori30r'>
                    <AiFillGithub/>
                </FooterContainerLogoWrapper>
                <FooterContainerLogoWrapper href='https://twitter.com/mori30r'>
                    <AiFillTwitterCircle/>
                </FooterContainerLogoWrapper>
            </FooterContainerLogoSection>
            <FooterContainerLegalSection>
                <FooterContainerLogoWrapper>
                </FooterContainerLogoWrapper>
                <FooterContainerLegalText>&copy; 2020. Mori 30R All Right Reserved</FooterContainerLegalText>
            </FooterContainerLegalSection>
        </FooterContainer>
    );
};
