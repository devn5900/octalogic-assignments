import axios from "axios"


export const fetchData=async()=>{
    try {
        const res= await axios("/data.json");
        const isSaved=JSON.parse(localStorage.getItem("course"))
        if(!isSaved){
            localStorage.setItem("courses",JSON.stringify(res.data.courses));
            localStorage.setItem("students",JSON.stringify(res.data.students));
        }
    } catch (error) {
        console.log(error)
    }
}