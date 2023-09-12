
const init={
    courses:JSON.parse(localStorage.getItem("courses"))||[]
}
const coursesReducer = (state=init,{type,payload}) => {
    switch(type){
        default:
            return state;
    }
}

export default coursesReducer