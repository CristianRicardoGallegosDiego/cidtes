import React from "react";
import { Link } from "react-router-dom";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListDrawerHeader from "../../ListDrawerHeader/ListDrawerHeader";
import ListTwo from "../../../muicore/lists/ListTwo/ListTwo";
import "./ItemDrawerThree.css";

const ItemDrawerThree = (props) => {
    const {
        icon,
        title,
        simpleItems,
        complexItems,
        isOpen,
        setIsOpen,
        isThereSimplexItems
    } = props;
    return (
        <>
            <ListDrawerHeader 
                icon={icon}
                alt={title}
                title={title}
            />
            {
                isThereSimplexItems &&
                simpleItems.map((item, index) => {
                    return (
                        <Link 
                            key={index}
                            to={item.link}
                            onClick={() => setIsOpen(!isOpen)}
                            className="my-link-container"
                        >
                            <ListItemButton>
                                <ListItemText primary={item.title} />
                            </ListItemButton>
                        </Link>
                    );
                })
            }
            {
                <ListTwo 
                    cards={complexItems}
                />
            }
        </>
    );
};

export default ItemDrawerThree;