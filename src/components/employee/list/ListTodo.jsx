import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    tableCell: {
        borderBottom: "0px",
    }
}));

export default function CenteredGrid() {
    const classes = useStyles();

    return (
        <div className={classes.paper} style={{ display: "flex" }} >
            <div className={classes.root}>
                <Grid
                    container spacing={3}
                    md={4}
                    lg={12}
                >
                    <Grid item xs={12}>
                        {/* <Paper className={classes.paper}>xs=12</Paper> */}
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <h1>Daftar Pekerjaan Anda: </h1>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className={classes.tableCell}>
                                        {/* <li style={{textDecoration:"none"}}> */}
                                        <Typography className={classes.font}>
                                            ID
                                        </Typography>
                                        {/* </li> */}
                                    </TableCell>
                                    <TableCell className={classes.tableCell}>
                                        {/* <li style={{textDecoration:"none"}}> */}
                                        <Typography className={classes.font}>
                                            ID
                                        </Typography>
                                        {/* </li> */}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className={classes.tableCell}>
                                        {/* <li style={{textDecoration:"none"}}> */}
                                        <Typography className={classes.font}>
                                            {/* Nama Belakang : {profile.last_name} */}
                                        </Typography>
                                        {/* </li> */}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className={classes.tableCell}>
                                        {/* <li style={{textDecoration:"none"}}> */}
                                        <Typography className={classes.font}>
                                            {/* Email : {profile.email} */}
                                        </Typography>
                                        {/* </li> */}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className={classes.tableCell}>
                                        {/* <li style={{textDecoration:"none"}}> */}
                                        <Typography className={classes.font}>
                                            {/* Password : {profile.password} */}
                                        </Typography>
                                        {/* </li> */}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
