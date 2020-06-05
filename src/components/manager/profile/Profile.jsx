import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from '../header/Header'
import { TableBody, TableCell, Table, } from '@material-ui/core';
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from "react-redux";
import { getUser, updateDataUser } from '../../../redux/actions/userActions';
import { Link } from "react-router-dom"
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import { Formik } from 'formik';
// import {updateUser} from '../../../redux/actions/userActions'

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: "flex",
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    paperModal: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    textField: {
        margin: "10px"
    },
    button: {
        margin: theme.spacing(3, 1, 2),
    },
}));

export default function Profile() {
    const classes = useStyles();
    const profile = useSelector((state) => {
        // console.log(state, "ini state");

        return state.userList.user;
    });
    // console.log(profile, "log profile");
    
    const dispatch = useDispatch();

    const getProfile = localStorage.getItem("userid");
    useEffect(() => {
        dispatch(getUser(getProfile))
    }, [dispatch, getProfile]);
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const handleSave = (item) => {
        const userid = localStorage.getItem('userid')
        // console.log(userid);
        

        localStorage.getItem('userid', JSON.stringify(userid))

        const userProfile = {
            id: userid,
            first_name : item.first_name,
            last_name : item.last_name,
            password : item.password,
            email : item.email,
        };

        // console.log(userProfile, "log user profile");
        
        // console.log(updateDataUser, "log updateuser");
        
        dispatch(updateDataUser(userProfile));
        dispatch(getUser(userProfile.id))
        alert("Data telah tersimpan")
        setOpen(false)
    };


    if(!profile) {
        return ''
    }

    const body = (
        <div style={modalStyle} className={classes.paperModal}>
            <h2 id="simple-modal-title">Ubah Profil</h2>
            <Formik
                initialValues={{ 
                    email: profile.email, 
                    password: profile.password, 
                    first_name: profile.first_name, 
                    last_name: profile.last_name, 
                }}
                validate={values => {
                    const errors = {};
                    // if (!values.first_name) {
                    //     errors.first_name = "Required";
                    // }
                    // if (!values.last_name) {
                    //     errors.last_name = "Required";
                    // }
                    // if (!values.password) {
                    //     errors.password = 'Required';
                    // }
                    // if (!values.email) {
                    //     errors.email = 'Required';
                    // } 
                    if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    // setTimeout(() => {
                        // console.log(values)
                        
                        // alert(JSON.stringify(values));
                    //     setSubmitting(false);
                    // }, 400);
                    handleSave(values)
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                        <form
                            className={classes.form}
                            noValidate
                            onSubmit={handleSubmit}>
                            <TextField
                                className={classes.textField}
                                required id="standard-required"
                                label="Nama Depan"
                                defaultValue=""
                                autoComplete="first_name"
                                name="first_name"
                                onChange={handleChange}
                                value={values.first_name}
                                onBlur={handleBlur}
                            />
                            <p
                                style={{
                                    color: "red",
                                    fontStyle: "italic",
                                }}
                            >
                                {errors.first_name &&
                                    touched.first_name &&
                                    errors.first_name}
                            </p>
                            <TextField
                                className={classes.textField}
                                required id="standard-required"
                                label="Nama Belakang"
                                defaultValue=""
                                name="last_name"
                                autoComplete="last_name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.last_name}
                            />
                            <p
                                style={{
                                    color: "red",
                                    fontStyle: "italic",
                                }}
                            >
                                {errors.last_name &&
                                    touched.last_name &&
                                    errors.last_name}
                            </p>
                            <TextField
                                className={classes.textField}
                                required id="standard-required"
                                label="Email"
                                defaultValue=""
                                name="email"
                                autoComplete="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            <p
                                style={{
                                    color: "red",
                                    fontStyle: "italic",
                                }}
                            >
                                {errors.email &&
                                    touched.email &&
                                    errors.email}
                            </p>
                            <TextField
                                className={classes.textField}
                                required id="standard-required"
                                label="Password"
                                defaultValue=""
                                name="password"
                                type="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                            <p
                                style={{
                                    color: "red",
                                    fontStyle: "italic",
                                }}
                            >
                                {errors.password &&
                                    touched.password &&
                                    errors.password}
                            </p>
                            {/* <br /> */}
                            <div style={{ margin: "20px", display: "flex", justifyContent: "center", }}>
                                <Button type="submit" variant="outlined" color="primary" className={classes.button} disabled={isSubmitting}>
                                    Simpan
                                </Button>
                                <Button variant="outlined" color="primary" className={classes.button} onClick={handleClose}>
                                    Batal
                                </Button>
                            </div>
                        </form>
                    )}
            </Formik>
        </div>
    );

   
    return (
        <div>
            <Header />
            <div className={classes.root} >
                <Grid container spacing={3} style={{ display: "flex", justifyContent: "center" }} >
                    <Grid item xs={6} >
                        <Paper className={classes.paper} style={{ marginTop: "30px" }}>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>
                                        <h1>Profil Anda</h1>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            {/* <li style={{textDecoration:"none"}}> */}
                                            <Typography className={classes.font}>
                                                Nama Depan : {profile.first_name}
                                            </Typography>
                                            {/* </li> */}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            {/* <li style={{textDecoration:"none"}}> */}
                                            <Typography className={classes.font}>
                                                Nama Belakang : {profile.last_name}
                                            </Typography>
                                            {/* </li> */}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            {/* <li style={{textDecoration:"none"}}> */}
                                            <Typography className={classes.font}>
                                                Email : {profile.email}
                                            </Typography>
                                            {/* </li> */}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            {/* <li style={{textDecoration:"none"}}> */}
                                            <Typography className={classes.font}>
                                                Password : {profile.password}
                                            </Typography>
                                            {/* </li> */}
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                            <Button variant="outlined" color="primary" onClick={handleOpen} style={{ margin: "20px" }}>
                                Ubah
                            </Button>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="simple-modal-title"
                                aria-describedby="simple-modal-description"
                            >
                                {body}
                            </Modal>
                            <Button variant="outlined" color="primary" style={{ margin: "20px" }}>
                                <Link
                                    variant="button"
                                    color="textPrimary"
                                    to="/main-page/manager"
                                    className={classes.link}
                                    style={{ textDecoration: "none" }}
                                >
                                    Kembali ke Menu Utama
                                </Link>
                            </Button>
                        </Paper>
                    </Grid>

                </Grid>
            </div>
        </div>
    );
}
