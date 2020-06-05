import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { addList } from "../../../redux/actions/todoActions";
import { useDispatch,  } from "react-redux";
import { Formik } from 'formik';
import {deleteUser} from "../../../redux/actions/userActions"


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
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    description: {
        padding: "10px"
    },
}));


export default function SimpleModal(props) {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    // const [option, setOption] = React.useState('');
    // console.log(props, "ini props");

    // const userListTodo = useSelector((state) => {
    //     // console.log(state, "ini state card");
    //     return state.listTodo
    //     // return state.listTodo
    // })

    const dispatch = useDispatch();

    const handleSave = (item) => {
        const userid = props.id
        // console.log(item, 'ini item');

        // localStorage.getItem('userid', JSON.stringify(userid))

        const dataTodo = {
            todo: item.todo,
            status: item.status,
            userID: userid
        };

        dispatch(addList(dataTodo, userid))
        // // console.log(userProfile, "log user profile");

        // // console.log(updateDataUser, "log updateuser");

        // dispatch(updateDataTodo(dataTodo));
        // dispatch(fetchListToDoById(dataTodo.id))
        alert("Data berhasil ditambahkan")
        setOpen(false)
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = () => {
        const userid = props.id

        dispatch(deleteUser(userid))
    };

    // const id = props.id

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <Formik
                initialValues={{ todo: '', status: '', userID: props.id }}
                // const userid={props.id}
                validate={values => {
                    const errors = {};
                    if (!values.todo) {
                        errors.todo = 'Tidak Boleh Kosong';
                    }
                    if (!values.status) {
                        errors.status = 'Tidak Boleh Kosong'
                    }
                    if (!values.userID) {
                        errors.userID = 'Tidak Boleh Kosong'
                    }
                    return errors;
                }}
                onSubmit={(values, id) => {
                    handleSave(values, id)
                    // console.log(values);

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
                        <form onSubmit={handleSubmit}>
                            <TextField
                                id="todo"
                                label="Tambah Todo Di sini"
                                autoComplete="todo"
                                name="todo"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.todo}
                            />
                            <p
                                style={{
                                    color: "red",
                                    fontStyle: "italic",
                                }}
                            >
                                {errors.todo &&
                                    touched.todo &&
                                    errors.todo}
                            </p>
                            <TextField
                                id="status"
                                label="Tambah Status"
                                autoComplete="status"
                                name="status"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.status}
                            />
                            <p
                                style={{
                                    color: "red",
                                    fontStyle: "italic",
                                }}
                            >
                                {errors.status &&
                                    touched.status &&
                                    errors.status}
                            </p>
                            <TextField
                                id="userID"
                                autoComplete="userID"
                                name="userID"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.userID}
                            />
                            <p
                                style={{
                                    color: "red",
                                    fontStyle: "italic",
                                }}
                            >
                                {errors.userID &&
                                    touched.userID &&
                                    errors.userID}
                            </p>
                            <br />
                            <Button type="submit" color="primary" style={{ margin: "20px" }} disabled={isSubmitting}>
                                Simpan
                            </Button>
                            <Button color="primary" onClick={handleClose} style={{ margin: "20px" }}>
                                Batal
                            </Button>
                        </form>
                    )}
            </Formik>
        </div>
    );

    return (
        <div>
            {/* <button type="button" onClick={handleOpen}>
        Detail
      </button> */}
            {/* <Button size="small" onClick={handleOpen}>Detail</Button> */}
            <Button color="primary" onClick={handleOpen} style={{ margin: "10px" }}>
                Tambah Todo
             </Button>
            <Button color="primary" onClick={handleDelete} style={{ margin: "10px" }}>
                Hapus
            </Button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}
