import { combineReducers } from "redux";
import listTodoReducer from "./listTodoReducer";
import loginReducer from "./loginReducer"
import userReducer from "./userReducer"
import searchReducer from './searchReducer'
import profileReducer from './profileReducer'
import employeeReducer from './employeeReducer'

const allReducers = combineReducers({
    listTodo: listTodoReducer,
    loginUser: loginReducer,
    userList: userReducer,
    searchList: searchReducer,
    userProfile: profileReducer,
    employeeList: employeeReducer
});

export default allReducers;
