import axios from "axios";
import {UPDATE_LIST} from './types'

const apiUrl = "https://jadwalku-app.herokuapp.com/todos"

export const fetchListToDoById = (id) => {
    return (dispatch) => {
        const url = `${apiUrl}/${id}`
        axios
            .get(url)
            .then((response) => {
                dispatch(fetchSuccess(response.data));
                // console.log(response);

            })
            .catch((error) => {
                throw error;
            });
    };
};

export const fetchSuccess = (data) => {
    return {
        type: "GET_LIST",
        payload: {
            data,
        },
    };
};

export const updateDataTodo = (data,id) => {
    // console.log(data,"ini data");
    return (dispatch) => {
        // console.log(dispatch, "ini disptach");

        const url = `${apiUrl}/${data.id}/${id}`;

        axios
            .put(url, data)
            .then((response) => {
                dispatch({
                    type: UPDATE_LIST,
                    payload: data,
                })
            })
            .catch((error) => {
                throw error;
            })
    }
};


export const addList = (values, id) => {
    // console.log(values,"ini log values");
    
    return (dispatch) => {
        return axios
            .post(`${apiUrl}/${id}`, values)
            .then((response) => {
                dispatch(addListSuccess(response.data));
            })
            .catch((error) => {
                throw error;
            });
    };
};

export const addListSuccess = (data) => {
    return {
        type: "POST_LIST",
        payload: {
            data,
        },
    };
};