import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ListOne from "../../lists/ListOne/ListOne";

const AccordionTwo = (props) => {
    const {
        id,
        icon,
        alt,
        title,
        cards,
        isDefaultExpanded
    } = props;
    return (
        <>
            <Accordion 
                defaultExpanded={isDefaultExpanded}
            >
                <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls={`${id}-panel1-content`}
                    id={`${id}-panel1-header`}
                >
                    <div className="header-accordion-mine">
                        <FontAwesomeIcon icon={icon} alt={alt} />
                        <h3>{title}</h3>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <ListOne 
                        cards={cards}
                    />
                </AccordionDetails>
            </Accordion>
        </>
    );
};

export default AccordionTwo;