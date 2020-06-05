import axios from "axios";

const apiUrl = "https://jadwalku-app.herokuapp.com/todos";

export const fetchListByDate = (data) => {
    // console.log(data, "ini data");
    
    return (dispatch) => {   
        return axios
            .get(`${apiUrl}/${2}/${data.createdAt}`, {})
            .then((response) => {
                console.log(response,"ini response");
                
                dispatch(fetchListByDateSukses(response.data.data)); 
            })
            .catch((error) => {
                throw error;
            });
    };
};

export const fetchListByDateSukses = (data) => {
    return {
        type: "SET_SEARCH",
        payload: {
            data,
        },
    };
};