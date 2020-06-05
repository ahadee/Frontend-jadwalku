const loginReducer = (state = [], action) => {
    switch (action.type) {
        case "LOGIN":
            return [...state, action.payload];
        default :
            return state
    }
}

export default loginReducer