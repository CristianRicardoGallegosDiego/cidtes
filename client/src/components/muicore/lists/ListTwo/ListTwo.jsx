import React, {
    useState
} from 'react';
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import "./ListTwo.css";

const ListItem = (props) => {
    const {
        headerTitle,
        options,
        setOpenDrawer
    } = props;
    const [open, setOpen] = useState(true);

    return (
        <>
            <ListItemButton onClick={() => setOpen(!open)}>
                <ListItemText
                    className='list-item-header-title-mine-drawer-two'
                    primary={headerTitle} 
                />
                {open ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
            </ListItemButton>
            <Collapse in={!open} timeout="auto">
                <List component="div" disablePadding>
                {
                    options.map((option, index) => {
                        return (
                            <Link
                                key={index}
                                to={option.link}
                                className="list-item-item-button-drawer-two"
                            >
                                <ListItemButton 
                                    sx={{ pl: 4 }}
                                    onClick={() => setOpenDrawer(false)}
                                >
                                    <ListItemText
                                        primary={option.title}
                                    />
                                </ListItemButton>
                            </Link>
                        );
                    })
                }
                </List>
            </Collapse>
        </>
    );
};

const ListTwo = (props) => {
    return (
        <List
            sx={{ width: '100%',bgcolor: 'background.paper'}}
            component="nav"
            aria-labelledby="nested-list-subheader"
        >
            {
                props.cards.map((card, index) => {
                    return (
                        <ListItem 
                            key={index}
                            headerTitle={card.title}
                            options={card.options}
                            className="my-drawer-header-list-mine"
                            setOpenDrawer={props.setIsOpen}
                        />
                    );
                })
            }
        </List>
    );
};

export default ListTwo;