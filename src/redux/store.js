import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import coursesReducer from "./courses/coursesReducer";
import studentsReducer from "./students/studentsReducer";
import userReducer from "./login/userReducer";



const rootReducer= combineReducers({
    coursesReducer,
    studentsReducer,
    userReducer
})

export const store= legacy_createStore(rootReducer,applyMiddleware(thunk));