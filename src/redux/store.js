import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import coursesReducer from "./courses/coursesReducer";



const rootReducer= combineReducers({
    coursesReducer
})

export const store= legacy_createStore(rootReducer,applyMiddleware(thunk));