import React from 'react';
import {Hero} from "../Hero/Hero";
import {FullPage} from "./Layout.elements";
import {Plans} from "../Plans/Plans";

export const Layout = () => {
    return (
        <FullPage>
            <Hero/>
            <Plans/>
        </FullPage>
    );
};
