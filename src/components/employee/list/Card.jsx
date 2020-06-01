import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from './Modal'

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    date: {
        fontSize: 12,
        margin: "5px",
        display: "flex",
        justifyContent: "center"
    },
    description: {
        color: "red",
        display: "flex",
        justifyContent:"center"
    }
});

export default function CardList() {
    const classes = useStyles();


    return (
        <div style={{ padding: "20px" }}>

            <Card className={classes.root} variant="outlined">
                <CardContent >
                    {/* <Typography variant="h5" component="h2">
                        Judul Aktifitas
                    </Typography> */}
                    <Typography className={classes.pos,classes.date} color="textSecondary" >
                        01/06/2020
                    </Typography>
                    
                </CardContent>
                <Typography variant="body2" component="p" className={classes.description}>
                        Deadline: 20/06/2020
                    </Typography>
                <CardActions style={{display:"flex",justifyContent:"center"}}>
                    <Modal />

                </CardActions>
            </Card>
        </div>
    );
}
