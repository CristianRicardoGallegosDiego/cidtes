import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cards from "./cards.json";
import "./OurCommitment.css";

const OurCommitment = () => {
    return (
        <section className="our-commitment-container">
            <h1>Nuestro Compromiso</h1>
            <div className="cards-container">
                {
                    Cards.map((card) => {
                        return (
                            <div key={card.id}>
                                <FontAwesomeIcon icon={card.icon} alt={card.alt}/>
                                <h2>{card.title}</h2>
                                <p>{card.body}</p>
                            </div>
                        );
                    })
                }
            </div>
        </section>
    );
};

export default OurCommitment;