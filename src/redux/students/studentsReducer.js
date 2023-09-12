import { SET_STUDENTS } from "./actionTypes";

const init={
    students:JSON.parse(localStorage.getItem("students"))||[]
}
const studentsReducer = (state=init,{type,payload}) => {
    switch(type){

        case SET_STUDENTS:
            return {...state,students:payload}
        default:
            return state;
    }
}

export default studentsReducer