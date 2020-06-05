import axios from "axios";
const apiUrl = "https://jadwalku-app.herokuapp.com/users";
 
export const fetchProfile = (id) => {
    return (dispatch) => {
        return axios
            .get(`${apiUrl}/${id}`)
            .then((response) => {
                dispatch(fetchingSukses(response.data));
                console.log(response,"response");
                
            })

            .catch((error) => {
                throw error;
            });
    };
};

export const fetchingSukses = (data) => {
    return {
        type: "SET_PROFILE",
        payload: {
            data,
        },
    };
};
