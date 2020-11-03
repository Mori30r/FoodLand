import React from 'react';
import {PlansCard, PlansSection, PlansSectionCards, PlansSectionHeading, PlansSectionPath} from "./Plans.elements";

export const Plans = () => {
    return (
        <>
            <PlansSection>
                <PlansSectionPath/>
                <PlansSectionHeading><h1>Our Most Popular Pizzas.</h1></PlansSectionHeading>
                <PlansSectionCards>
                    <PlansCard>s</PlansCard>
                    <PlansCard>s</PlansCard>
                    <PlansCard>s</PlansCard>
                </PlansSectionCards>
            </PlansSection>
        </>
    );
};
