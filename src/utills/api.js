import axios from "axios"


export const fetchData=async()=>{
    try {
        const res= await axios("/data.json");
        const isSaved=JSON.parse(localStorage.getItem("courses"))
        if(!isSaved){
            console.log('data set into localStorage');
            localStorage.setItem("courses",JSON.stringify(res.data.courses));
            localStorage.setItem("students",JSON.stringify(res.data.students));
        }
    } catch (error) {
        console.log(error)
    }
}