import React from "react";
import { Link } from "react-router-dom";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListDrawerHeader from "../../ListDrawerHeader/ListDrawerHeader";
import "./ItemDrawerOne.css";

const ItemDrawerOne = (props) => {
    const {
        icon,
        title,
        link,
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
            <Link 
                to={link}
                onClick={() => setIsOpen(!isOpen)}
                className="my-link-container"
            >
                <ListItemButton
                    
                >
                    <ListItemText primary={title} 
                        
                    />
                </ListItemButton>
            </Link>
        </>
    );
};

export default ItemDrawerOne;