const initialState = [];

const mainReducers = (state = initialState, actions) => {
    switch (actions.type) {
        case "SET_SEARCH":
            return actions.payload;
        default:
            return state;
    }
};

export default mainReducers;
