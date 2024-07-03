import React from "react";
import {
    Button,
    Dialog, 
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material";

const DialogMuiCore = (props) => {
    const {
        id,
        title,
        description,
        textCancelButton,
        textConfirmButton,
        openDialog,
        setOpenDialog,
        setIsSubmitClicked,
        submitFunction
    } = props;

    return (
        <Dialog
            open={openDialog}
            aria-labelledby={`${id}-title`}
            aria-describedby={`${id}-description`}
        >
            <DialogTitle id={`${id}-title`}>
                {title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id={`${id}-description`}>
                    {description}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button 
                    onClick={() => {
                        setOpenDialog(false);
                    }}
                    color="error"
                >
                    {textCancelButton}
                </Button>
                <Button 
                    onClick={() => {
                        setOpenDialog(false);
                        setIsSubmitClicked(true);
                        submitFunction();
                    }} 
                    variant="contained"
                    color="success"
                    autoFocus
                >
                    {textConfirmButton}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default DialogMuiCore;