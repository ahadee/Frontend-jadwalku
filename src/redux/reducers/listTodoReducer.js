const initialState = []

const listTodoReducer = (state = initialState, action) => {
    // console.log(action, "ini action");

    switch (action.type) {
        case "GET_LIST":
            return action.payload;
        case "UPDATE_LIST":
            return action.payload;
        case "POST_LIST":
            return action.payload;
        default:
            return state;
    }
};

export default listTodoReducer;
