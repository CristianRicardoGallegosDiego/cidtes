import React from "react";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { Fade } from "@mui/material";

const SnackbarMuiCore = (props) => {
    const {
        open,
        setOpen,
        severity,
        title,
        message
    } = props;

    return (
        <Snackbar
            open={open}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            TransitionComponent={Fade}
        >
            <Alert 
                severity={severity}
                onClose={() => setOpen(false)}
            >
                <AlertTitle>{title}</AlertTitle>
                {message}
            </Alert>
        </Snackbar>
    );
};

export default SnackbarMuiCore;