import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { fetchListToDoById, updateDataTodo, } from "../../../redux/actions/todoActions";
import { useDispatch, } from "react-redux";


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
}));

const options = [
  {
    value: 'On Progess',
    label: 'On Progess',
  },
  {
    value: 'Pending',
    label: 'Pending',
  },
  {
    value: 'Done',
    label: 'Done',
  },
];

export default function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [option, setOption] = React.useState('');
  const [status, setStatus] = React.useState('')


  const dispatch = useDispatch();

  const handleSave = (item) => {
    const userid = localStorage.getItem('userid')
    console.log(item, "ini item")


    localStorage.getItem('userid', JSON.stringify(userid))

    const dataTodo = {
      id: userid,
      status: status
    };

    // console.log(userProfile, "log user profile");

    // console.log(updateDataUser, "log updateuser");

    dispatch(updateDataTodo(dataTodo,props.id));
    dispatch(fetchListToDoById(dataTodo.id))
    // alert("Data telah tersimpan")
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
    setStatus(event.target.value)
    
  };


  const body = (
    <div style={modalStyle} className={classes.paper}>
      <TextField
        id="standard-select-currency"
        select
        label="Pilih Status"
        value={option}
        onChange={handleChange}
        helperText="Update Status Todo"
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}  >
            {option.label} 
          </MenuItem>
        ))}
      </TextField>
      {/* <br /> */}
      <Button color="primary" onClick={handleSave} style={{ margin: "20px" }}>
        Simpan
      </Button>
      <Button color="primary" onClick={handleClose} style={{ margin: "20px" }}>
        Batal
      </Button>
    </div>
  );

  return (
    <div>
      {/* <button type="button" onClick={handleOpen}>
        Detail
      </button> */}
      {/* <Button size="small" onClick={handleOpen}>Detail</Button> */}
      <Button variant="outlined" color="primary" onClick={handleOpen} style={{ margin: "20px" }}>
        Update Status
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
