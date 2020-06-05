import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import Modal from './Modal'
import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
import { getEmployee, } from "../../../redux/actions/userActions";
import Grid from '@material-ui/core/Grid';
import Modal from './Modal'



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
        color: "black",
        display: "flex",
        justifyContent: "center"
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
}));

export default function CardList() {
    const classes = useStyles();
    
    const userList = useSelector((state) => state.employeeList)
    // console.log(userList.employee, "ini log employee list");
    // const todoList = useSelector((state)=>  state.listTodo)
    // console.log(todoList,"ini todoList");
    
    

    const dispatch = useDispatch()
    // const UserIDLocalStore = localStorage.getItem("userid")
    // const {id} = useParams()

    useEffect(() => {
        dispatch(getEmployee())
        // dispatch(fetchListToDoById())
        // dispatch(deleteUser())
    }, [dispatch,])

    if(!userList) {
        return ''
    }

    return (
        <div className={classes.paper} >
            <Grid container spacing={3} style={{ display: "flex", justifyContent: "center" }}>
            {userList.employee !== undefined &&
                userList.employee.map((item) => {
                    // console.log(item,"ini item");

                    return (
                        <Grid
                            item xs={3}
                            md={4}
                            lg={5}
                            key={item.id}
                        >
                            {/* <Grid container spacing={3}
                                    direction="row"
                                    justify="center"
                                    alignItems="center"
                                    key={item.id}
                                > */}
                            <div className={classes.paper}>
                                <Card className={classes.root} variant="outlined">
                                    <CardContent >
                                        {/* <Typography variant="h5" component="h2">
                                                    Judul Aktifitas
                                                    </Typography> */}
                                        <Typography className={classes.date} color="textSecondary" >
                                            {item.todo}
                                        </Typography>
                                    </CardContent>
                                    <Typography variant="body2" component="p" className={classes.description}>
                                        ID: {item.id}
                                    </Typography>
                                    <Typography variant="body2" component="p" className={classes.description}>
                                        Nama Karyawan: {item.first_name} {item.last_name}
                                    </Typography>
                                    <Typography variant="body2" component="p" className={classes.description}>
                                        Role: {item.role}
                                    </Typography>
                                    {/* <CardActions style={{ display: "flex", justifyContent: "center" }}>
                                        <Modal />

                                    </CardActions> */}
                                    {/* <Button color="primary"  style={{ margin: "10px" }} onClick={}>
                                        Tambah Todo
                                    </Button> */}
                                    <Modal id= {item.id}/>
                                    {/* <ModalView /> */}
                                    {/* <Button color="primary"  style={{ margin: "10px" }}>
                                        Hapus
                                    </Button> */}
                                </Card>
                            </div>
                            {/* </Grid> */}
                        </Grid>
                    );
                })}
                </Grid>
        </div>
    );
}
