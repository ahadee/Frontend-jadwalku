const initialState = [];
 
const profileReducers = (state = initialState, actions) => {
    switch (actions.type) {
        case "SET_PROFILE":
            return actions.payload;
        default:
            return state;
    }
};

export default profileReducers