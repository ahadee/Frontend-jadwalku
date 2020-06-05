import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Formik } from "formik";
import { Link, useHistory } from "react-router-dom";
import MaterialLink from "@material-ui/core/Link";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/actions/userActions";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <MaterialLink color="inherit" href="https://material-ui.com/">
                SEARAH
            </MaterialLink>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUp() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography
                    component="h1"
                    variant="h5"
                // className={classes.font2}
                >
                    Daftar
                </Typography>
                <Formik
                    initialValues={{
                        first_name: "",
                        last_name: "",
                        email: "",
                        password: "",
                    }}
                    validate={(values) => {
                        const errors = {};
                        if (!values.first_name) {
                            errors.first_name = "Required";
                        }
                        if (!values.last_name) {
                            errors.last_name = "Required";
                        }
                        if (!values.password) {
                            errors.password = "Required";
                        }
                        if (!values.email) {
                            errors.email = "Required";
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                values.email
                            )
                        ) {
                            errors.email = "Invalid email address";
                        }
 
                        return errors;
                    }}
                    onSubmit={async (values, ) => {
                        await dispatch(addUser(values, history));
                    }}
                >
                    {({
                        handleChange,
                        handleSubmit,
                        values,
                        isSubmitting,
                        handleBlur,
                        errors,
                        touched,
                    }) => {
                        return (
                            <div>
                                <form
                                    className={classes.form}
                                    noValidate
                                    onSubmit={handleSubmit}
                                >
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                autoComplete="first_name"
                                                name="first_name"
                                                variant="outlined"
                                                // required
                                                fullWidth
                                                id="first_name"
                                                label="Nama Depan"
                                                onChange={handleChange}
                                                value={values.first_name}
                                                onBlur={handleBlur}
                                                // className={classes.font}
                                                InputLabelProps={{
                                                    className:
                                                        classes.floatingLabelFocusStyle,
                                                }}
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
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                variant="outlined"
                                                required
                                                fullWidth
                                                id="last_name"
                                                label="Last Name"
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
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                variant="outlined"
                                                required
                                                fullWidth
                                                id="email"
                                                label="Email Address"
                                                name="email"
                                                autoComplete="email"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email}
                                                // className={classes.font}
                                                InputLabelProps={{
                                                    className:
                                                        classes.floatingLabelFocusStyle,
                                                }}
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
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                variant="outlined"
                                                required
                                                fullWidth
                                                name="password"
                                                label="Password"
                                                type="password"
                                                id="password"
                                                autoComplete="current-password"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.password}
                                                // className={classes.font}
                                                InputLabelProps={{
                                                    className:
                                                        classes.floatingLabelFocusStyle,
                                                }}
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
                                        </Grid>
                                    </Grid>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className={classes.submit}
                                        disabled={isSubmitting}
                                    >
                                        Sign Up
                                    </Button>
                                </form>
                            </div>
                        );
                    }}
                </Formik>
                <Grid container justify="flex-end">
                    <Grid item>
                        <Link
                            to="/"
                            style={{ textDecoration: "none" }}
                        // className={classes.font3}
                        >
                            Already have an account? Sign in
                        </Link>
                    </Grid>
                </Grid>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </div>
        </Container>
    );
}
