import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import coursesReducer from "./courses/coursesReducer";
import studentsReducer from "./students/studentsReducer";



const rootReducer= combineReducers({
    coursesReducer,
    studentsReducer
})

export const store= legacy_createStore(rootReducer,applyMiddleware(thunk));