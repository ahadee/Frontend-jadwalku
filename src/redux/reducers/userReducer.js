// import { UPDATE_USER, GET_USER } from "../actions/types";

const initialState = {
    user: null,
};

const userReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case "GET_USER":
            // console.log(action.payload,"log action");
            // console.log(action.payload,"ini log action payload"); 
            return {
                user: action.payload.data[0]
            };
        case "POST_USER":
            return {
                user: action.payload.data[0]
            };
        case "UPDATE_USER":
            return {
                user: action.payload,
            };
        case "DELETE_USER":
            return "";
        default:
            return state;
    }
};

export default userReducer;
