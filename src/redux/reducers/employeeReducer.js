// import { UPDATE_USER, GET_USER } from "../actions/types";

const initialState = {
    user: [],
}

const employeeReducer = (state = initialState, action) => {

    switch (action.type) {
        case "GET_ALL_EMPLOYEE":
            // console.log(action.payload,"log action");
            // console.log(action.payload,"ini log action payload"); 
            return {
                employee: action.payload
            };
        default:
            return state;
    }
};

export default employeeReducer;
