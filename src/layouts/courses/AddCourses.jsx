import { Button } from "../../components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog"
  import {AiOutlinePlus} from 'react-icons/ai'
import { Input } from "../../components/ui/input"
import { DialogClose } from "@radix-ui/react-dialog"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addCourses } from "../../redux/courses/actions"
import { useToast } from "../../components/ui/use-toast"
import { daysOfWeekList, musicalInstruments } from "../../assets/data"

const AddCourses=()=> {
     const {toast}= useToast();
    const {courses} = useSelector(store=>store.coursesReducer);
    const init={
        id: (courses.length+1),
        name:"",
        desc: "",
        instructor: "",
        instrument: "",
        daysOfWeek: "",
        noOfStudents: Math.floor(Math.random()+1),
        price: null,
        status: "Active"
      }
    const dispatch= useDispatch();
    const [data,setData]= useState(init)
      const handleInput=(e)=>{
          setData({...data,[e.target.name]:e.target.value});
        }
        
        const handleSubmit=(e)=>{
            e.preventDefault();
            if(data.id&&data.daysOfWeek&&data.desc&&data.instructor&&data.instrument&&data.name&&data.noOfStudents&&data.price&&data.status){
                dispatch(addCourses(data));
                toast({
                    variant:"outline",
                    title: "Course Added !",
                    
                  })
                  setData(init)
            }else{
                toast({
                    variant: "destructive",
                    title: "All fields are Required !"
                  })
            }
      }
  return (
    <Dialog>
    <DialogTrigger className=" fixed right-12 bottom-12">
        <button className="bg-[#FEC0CA]  px-5 py-4 rounded-md"><span className="flex items-center gap-2">
            <span><AiOutlinePlus/></span>
            <span> Add Course</span>
            </span></button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Add Course</DialogTitle>
        <DialogDescription>
          
        </DialogDescription>
      </DialogHeader>
      <form onSubmit={handleSubmit} >
      <div className="flex flex-col gap-3">
        <Input placeholder={"Course Name"} name="name" onChange={handleInput} />
        <Input placeholder={"Description"} name="desc" onChange={handleInput} />
        <Input placeholder={"Instructor"} name="instructor" onChange={handleInput} />
        <select name="instrument" onChange={handleInput} className="text-gray-500 text-sm  w-full border-2 p-2 rounded-md border-gray-100">
            <option value="">Instrument</option>
            {
                musicalInstruments.map((el)=>{
                    return <option value={el} >{el}</option>
                })
            }
        </select>
        <select name="daysOfWeek" onChange={handleInput} className="text-gray-500 text-sm  w-full border-2 p-2 rounded-md border-gray-100">
            <option value="" >Day of the week</option>
            {
                daysOfWeekList.map((el)=>{
                    return <option value={el} >{el}</option>
                })
            }
        </select>
        <Input placeholder={"Price"} name="price" onChange={handleInput} />
        <div className="flex items-center gap-3 justify-end">
            <DialogClose>
        <Button type="reset" className=" hover:bg-gray-100 bg-transparent outline-none text-[#212529] font-sans ">Cancel</Button>
            </DialogClose>
        <Button type="submit" className="bg-[#FEC0CA] hover:bg-[#f3aab6] outline-none text-[#212529] font-nsans">Add Course</Button>
      </div>
      </div>
      
      </form>

    </DialogContent>
  </Dialog>
  

  )
}


export default AddCourses