import React from 'react';
import {
    PlansCard,
    PlansCardDetail,
    PlansCardDetailName, PlansCardDetailRate,
    PlansCardImage,
    PlansCardImageBox,
    PlansCardImagePizza
} from "./Plans.elements";
import PizzaBox from "../../assets/images/pizza-box.png";
import VegPizza from "../../assets/images/veg-pizza.png";
import {Button} from "../../global/Button";



export const PlansCardItem = ({card}) => {
    return (
        <>
            <PlansCard>
                <PlansCardImage>
                    <PlansCardImageBox src={PizzaBox} />
                    <PlansCardImagePizza src={card.image} />
                </PlansCardImage>
                <PlansCardDetail>
                    <PlansCardDetailName>{card.name}</PlansCardDetailName>
                    <PlansCardDetailRate>{ `(${card.rate}/5)` }</PlansCardDetailRate>
                </PlansCardDetail>
                <Button center>Order Now</Button>
            </PlansCard>
        </>
    );
};
