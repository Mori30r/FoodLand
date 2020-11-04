import React from 'react';
import {Hero} from "../Hero/Hero";
import {FullPage} from "./Layout.elements";
import {Plans} from "../Plans/Plans";
import {Footer} from "../Footer/Footer";

export const Layout = () => {
    return (
        <FullPage>
            <Hero/>
            <Plans/>
            <Footer/>
        </FullPage>
    );
};
