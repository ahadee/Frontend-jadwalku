import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function Search() {
    const classes = useStyles();

    return (
        <div style={{ display: "flexbox", justifyContent: "center", textAlign: "center", padding:"30px" }}>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-secondary" label="Cari Nama Aktifitas Anda" color="primary" />
            </form>
        </div>
    );
}
