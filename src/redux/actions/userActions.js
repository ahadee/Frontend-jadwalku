import axios from "axios";
import { UPDATE_USER, GET_USER, GET_ALL_EMPLOYEE, } from "./types"
const apiUrl = "https://jadwalku-app.herokuapp.com/users"
// const url = `${apiUrl}/users`

export const updateDataUser = (user) =>  {
    // console.log(user,"ini user");
    return (dispatch) => {
        // console.log(dispatch, "ini disptach");
        
        const url = `${apiUrl}/${user.id}`;
        
        axios
            .put(url, user)
            .then((response) => {
                dispatch({
                    type: UPDATE_USER,
                    payload: user,
                })
            })
            .catch((error) => {
                throw error;
            })
    }
};

// Post new user data to API
export const addUser = (values, history) => {
    return (dispatch) => {
        return axios
            .post(`${apiUrl}`, values)
            .then((response) => {
                dispatch(addUserSuccess(response.data));
                history.push(`/`);
            })
            .catch((error) => {
                throw error;
            });
    };
};

// Update userList state in redux store with new user data
// This function will automatically executed if addUser function is called
export const addUserSuccess = (data) => {
    return {
        type: "POST_USER",
        payload: {
            data,
        },
    };
};

export const getUser = (id) => {
    return (dispatch) => {
        // const url = `https://5e9407d7c7393c0016de4cfc.mockapi.io/users/${id}`;
        const url = `${apiUrl}/${id}`;

        axios
            .get(url)
            .then((response) => {
                dispatch({
                    type: GET_USER,
                    payload: response.data,
                });
            })
            .catch((error) => {
                throw error;
            });
    };
};

// Assign user data from API to userList state in redux store
// This function will automatically executed if getUser function is called

export const getUserSuccess = (users) => {
    return {
        type: "GET_USER",
        users,
    };
};

export const getEmployee = () => {
    return (dispatch) => {
        // const url = `https://5e9407d7c7393c0016de4cfc.mockapi.io/users/${id}`;
        const url = `${apiUrl}/allemployee`;

        axios
            .get(url)
            .then((response) => {
                // console.log(response, "ini response");
                
                dispatch({
                    type: GET_ALL_EMPLOYEE,
                    payload: response.data.data,
                });
            })
            .catch((error) => {
                throw error;
            });
    };
};

// Assign user data from API to userList state in redux store
// This function will automatically executed if getUser function is called

export const deleteUser = (id) => {
    const url = `${apiUrl}/${id}`
    const request = axios.delete(url)

    return {
        type: "DELETE_USER",
        payload: request
    };
        
};


