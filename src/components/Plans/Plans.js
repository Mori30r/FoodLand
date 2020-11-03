import React from 'react';
import {
    PlansSection,
    PlansSectionCards,
    PlansSectionHeading,
    PlansSectionPath
} from "./Plans.elements";
import { data } from '../../dummyData'
import {PlansCardItem} from "./PlansCardItem";

export const Plans = () => {
    return (
        <>
            <PlansSection>
                <PlansSectionPath/>
                <PlansSectionHeading><h1>Our Most Popular Pizzas.</h1></PlansSectionHeading>
                <PlansSectionCards>
                    { data.map((card)=> <PlansCardItem key={card.name} card={card}/>) }
                </PlansSectionCards>
            </PlansSection>
        </>
    );
};
