import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from './Card'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
}));

export default function SpacingGrid() {

    return (
        <div style={{display:"flex", justifyContent:"center"}}>
            <Grid container spacing={3}
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Card />
               
            </Grid>
        </div>

    );
}
