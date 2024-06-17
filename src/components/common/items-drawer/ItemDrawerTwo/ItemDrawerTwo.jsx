import React from "react";
import { Link } from "react-router-dom";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListDrawerHeader from "../../ListDrawerHeader/ListDrawerHeader";
import "./ItemDrawerTwo.css";

const ItemDrawerTwo = (props) => {
    const {
        icon,
        title,
        items,
        isOpen,
        setIsOpen
    } = props;
    return (
        <>
            <ListDrawerHeader 
                icon={icon}
                alt={title}
                title={title}
            />
            {
                items.map((item, index) => {
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
        </>
    );
};

export default ItemDrawerTwo;