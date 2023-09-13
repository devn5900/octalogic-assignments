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
import { addCourses, editCourses } from "../../redux/courses/actions"
import { useToast } from "../../components/ui/use-toast"
import { daysOfWeekList, musicalInstruments } from "../../assets/data"

const EditCourses=({id})=> {
     const {toast}= useToast();
    const {courses} = useSelector(store=>store.coursesReducer);
    const findData= courses.find((el)=>el.id==id);
    const dispatch= useDispatch();
    const [data,setData]= useState(findData)
      const handleInput=(e)=>{
          setData({...data,[e.target.name]:e.target.value});
        }
        
        const handleSubmit=(e)=>{
            e.preventDefault();
            if(data.id&&data.daysOfWeek&&data.desc&&data.instructor&&data.instrument&&data.name&&data.noOfStudents&&data.price&&data.status){
                dispatch(editCourses(data));
                toast({
                    variant:"outline",
                    title: "Course Updated !",
                    
                  })
            }else{
                toast({
                    variant: "destructive",
                    title: "All fields are Required !"
                  })
            }
      }
  return (
    <Dialog>
    <DialogTrigger className="text-sm font-normal m-0 py-2">
    <span className='py-2 cursor-pointer pl-2 pr-8 hover:bg-gray-100 rounded-md'>Edit Course</span>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Update Course</DialogTitle>
        <DialogDescription>
          
        </DialogDescription>
      </DialogHeader>
      <form onSubmit={handleSubmit} className="text-gray-500" >
      <div className="flex flex-col gap-3">
        <Input placeholder={"Course Name"} value={data.name} name="name" onChange={handleInput} />
        <Input placeholder={"Description"} value={data.desc} name="desc" onChange={handleInput} />
        <Input placeholder={"Instructor"} value={data.instructor} name="instructor" onChange={handleInput} />
        <select name="instrument" onChange={handleInput} className="text-gray-500 text-sm  w-full border-2 p-2 rounded-md border-gray-100">
            <option value="">Instrument</option> 
            {
                musicalInstruments.map((el)=>{
                    return <option selected={data.instrument==el} value={el} >{el}</option>
                })
            }
            
        </select>
        <select name="daysOfWeek" onChange={handleInput} className="text-gray-500 text-sm  w-full border-2 p-2 rounded-md border-gray-100">
            <option value="" >Day of the week</option>
            {
                daysOfWeekList.map((el)=>{
                    return <option selected={data.daysOfWeek==el} value={el} >{el}</option>
                })
            }
            
        </select>
        <Input placeholder={"Price"} value={data.price} name="price" onChange={handleInput} />
        <div className="flex items-center gap-3 justify-end">
            <DialogClose>
        <Button type="reset" className=" hover:bg-gray-100 bg-transparent outline-none text-[#212529] font-sans ">Cancel</Button>
            </DialogClose>
        <Button type="submit" className="bg-[#FEC0CA] hover:bg-[#f3aab6] outline-none text-[#212529] font-nsans">Update Course</Button>
      </div>
      </div>
      
      </form>

    </DialogContent>
  </Dialog>
  

  )
}


export default EditCourses