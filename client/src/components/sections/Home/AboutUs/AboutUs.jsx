import React from "react";
import AccordionOne from "../../../muicore/accordions/AccordionOne/AccordionOne";
import AccordionTwo from "../../../muicore/accordions/AccordionTwo/AccordionTwo";
import Cards from "./cards.json";
import CardsWithCards from "./cards-with-cards.json";
import "./AboutUs.css";

const AboutUs = () => {
    return (
        <section className="about-us-container">
            <h1>Nosotros</h1>
            <div>
                {
                    Cards.map((card) => {
                        return (
                            <AccordionOne 
                                key={card.id}
                                id={card.id}
                                icon={card.icon}
                                alt={card.alt}
                                title={card.title}
                                description={card.description}
                                isDefaultExpanded
                            />
                        );
                    })
                }
                {
                    CardsWithCards.map((card) => {
                        return (
                            <AccordionTwo 
                                key={card.id}
                                id={card.id}
                                icon={card.icon}
                                alt={card.alt}
                                title={card.title}
                                cards={card.values}
                            />
                        );
                    })
                }
            </div>
        </section>
    );
};

export default AboutUs;