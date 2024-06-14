import React, {
    useState
} from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import "./ListItem.css";

const ListItem = (props) => {
    const {
        headerTitle,
        description
    } = props;
    const [open, setOpen] = useState(true);
    return (
        <>
            <ListItemButton onClick={(e) => setOpen(!open)}>
                <ListItemText
                    className='list-item-header-title-mine'
                    primary={headerTitle} 
                />
                {open ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText
                        primary={description}
                    />
                </ListItemButton>
                </List>
            </Collapse>
        </>
    );
};

export default ListItem;