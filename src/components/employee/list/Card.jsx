import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from './Modal'
import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
import { fetchListToDoById, } from "../../../redux/actions/todoActions";
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";

// import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
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
        justifyContent: "center"
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
    container: {
        // paddingTop: theme.spacing(4),
        // paddingBottom: theme.spacing(4),
        paddingLeft: 0,
        paddingRight: 0,
    },
}));

export default function CardList() {
    const classes = useStyles();

    const userListTodo = useSelector((state) => {
        // console.log(state, "ini state card");
        return state.listTodo
        // return state.listTodo
    })
    // console.log(userListTodo, "ini log userListTodo");

    const dispatch = useDispatch()
    const UserIDLocalStore = localStorage.getItem("userid")
    // const {id} = useParams()

    useEffect(() => {
        dispatch(fetchListToDoById(UserIDLocalStore))
    }, [dispatch, UserIDLocalStore])

    return (
        <div className={classes.paper} style={{ display: "flex" }} >
            <Grid container spacing={3}>
                {userListTodo.data !== undefined &&
                    userListTodo.data.data.map((item) => {
                        return (
                            <Grid
                                item xs={3}
                                md={4}
                                lg={3}
                                key={item.id}
                            >
                                <div className={classes.paper}>
                                    <Container maxWidth="0" className={classes.container}>
                                        <Card className={classes.root} variant="outlined">
                                            <CardContent >
                                                <Typography className={classes.date} color="textSecondary" >
                                                    {item.todo}
                                                </Typography>
                                            </CardContent>
                                            <Typography variant="body2" component="p" className={classes.description}>
                                                Status: {item.status}
                                            </Typography>
                                            <Modal id={item.id} />
                                        </Card>
                                    </Container>
                                </div>
                            </Grid>
                        );
                    })}
            </Grid>
        </div>
    );
}
