import { SET_COURSES } from "./actionTypes";

const init={
    courses:JSON.parse(localStorage.getItem("courses"))||[]
}
const coursesReducer = (state=init,{type,payload}) => {
    switch(type){
        case SET_COURSES:
            return {...state,courses:payload}
        default:
            return state;
    }
}

export default coursesReducer