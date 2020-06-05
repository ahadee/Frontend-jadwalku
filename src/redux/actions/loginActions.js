import axios from "axios";

const apiUrl = "https://jadwalku-app.herokuapp.com/users";

export const loginUser = (values, history) => {
    return (dispatch) => {
        return axios
            .post(`${apiUrl}/login`, values)
            .then((response) => {
                // console.log(response, "ini response");
                
                if (response.status === 200 && response.data.data[0].role === 'employee') {
                    dispatch(dispatch(loginSuccess(response.data)));
                    alert("login is succsessfuly");
                    history.push("/main-page");
                    localStorage.setItem("isLogin", true);
                    localStorage.setItem("userid", response.data.data[0].id);
                }
                else {
                    dispatch(dispatch(loginSuccess(response.data)));
                    alert("login is succsessfuly");
                    history.push("/main-page/manager");
                    localStorage.setItem("isLogin", true);
                    localStorage.setItem("userid", response.data.data[0].id);
                }
            })
            .catch((error) => {
                alert(error.message);
                throw error;
            });
    };
};

export const loginSuccess = (data) => {
    return {
        type: "LOGIN",
        payload: {
            data,
        },
    };
};
