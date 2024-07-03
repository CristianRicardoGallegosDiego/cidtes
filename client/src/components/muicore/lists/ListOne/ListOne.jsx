import React from 'react';
import List from '@mui/material/List';
import ListItem from './ListItem';

const ListOne = (props) => {
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
                            description={card.description}
                        />
                    );
                })
            }
        </List>
    );
};

export default ListOne;