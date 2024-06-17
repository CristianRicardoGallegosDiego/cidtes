import React from "react";
import Divider from '@mui/material/Divider';
import ListSubheader from "@mui/material/ListSubheader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ListDrawerHeader.css";

const ListDrawerHeader = (props) => {
    const {
        icon,
        alt,
        title
    } = props;
    return (
        <>
            <Divider />
            <ListSubheader>
                <div className="list-drawer-header-container">
                    <FontAwesomeIcon icon={icon} alt={alt}/>
                    {title}
                </div>
            </ListSubheader>
        </>
    );
};

export default ListDrawerHeader;