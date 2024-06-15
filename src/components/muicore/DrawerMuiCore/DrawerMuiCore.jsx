import React from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from "@mui/material/ListSubheader";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./DrawerMuiCore.css";


const DrawerMuiCore = (props) => {
    const {
        isOpen,
        setIsOpen
    } = props;

    const DrawerList = (
        <Box 
            sx={{ width: 275 }} 
            role="presentation"
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                <ListItem key={text} disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                    </ListItemButton>
                </ListItem>
                ))}
            </List>
            <Divider />
            <ListSubheader>Other</ListSubheader>
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItem key={text} disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                    </ListItemButton>
                </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <Drawer 
                open={isOpen} 
            >
                <button
                    className="drawer-close-button-mine"
                    onClick={() => setIsOpen(!setIsOpen)}
                >
                    <FontAwesomeIcon 
                        icon="fa-solid fa-circle-xmark"
                        alt="Cerrar visualizador"
                    />
                    <h2>Cerrar</h2>
                </button>
                {DrawerList}
            </Drawer>
        </div>
    );
};

export default DrawerMuiCore;