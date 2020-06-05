import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { addList } from "../../../redux/actions/todoActions";
import { useDispatch, useSelector } from "react-redux";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


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


export default function ModalView(props) {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [option, setOption] = React.useState('');
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

    const handleChange = (event) => {
        setOption(event.target.value);
    };

    const id = props.id

    const body = (
        <div style={modalStyle} className={classes.paper}>
                <ol>
                    <li>fsdflj | status: Done</li>
                </ol>

        </div>
    );

    return (
        <div>
            {/* <button type="button" onClick={handleOpen}>
        Detail
      </button> */}
            {/* <Button size="small" onClick={handleOpen}>Detail</Button> */}
            <Button color="primary" onClick={handleOpen} style={{ margin: "10px" }}>
                Lihat Todo
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
