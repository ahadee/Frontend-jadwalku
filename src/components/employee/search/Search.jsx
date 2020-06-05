import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { fetchListByDate, } from "../../../redux/actions/searchActions";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";


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
    const dispatch = useDispatch();
    return (
        <div style={{ display: "flexbox", justifyContent: "center", textAlign: "center", padding: "30px" }}>
            <Formik
                initialValues={{ createdAt: "" }}
                onSubmit={(values) => {
                    dispatch(fetchListByDate(values));
                    console.log(values, "values");
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
                        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                            <TextField
                                id="createdAt"
                                name="createdAt"
                                label="Cari Tanggal Dibuat"
                                type="date"
                                color="primary"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.createdAt}
                                InputLabelProps={{
                                    shrink: true,
                                  }}
                            />

                            <Button
                                // variant="contained"
                                color="primary"
                                type="submit"
                                disabled={isSubmitting}
                                style={{ marginLeft: 16, width: "1ch", marginTop: "20px" }}
                            >
                                <SearchIcon />
                            </Button>
                            <p style={{ color: "red", fontStyle: "italic" }}>
                                {errors.createdAt &&
                                    touched.createdAt &&
                                    errors.createdAt}
                            </p>
                        </form>
                    )}
            </Formik>
        </div>
    );
}
