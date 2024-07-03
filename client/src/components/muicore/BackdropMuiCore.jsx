import React from "react";
import {
    Backdrop,
    CircularProgress
} from "@mui/material";

const BackdropMuiCore = (props) => {
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={props.isOpen}
        >
            <CircularProgress color="primary" />
        </Backdrop>
    );
};

export default BackdropMuiCore;