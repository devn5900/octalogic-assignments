import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "../../components/ui/dropdown-menu"
  
  import {BsThreeDotsVertical} from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { setArchived } from '../../redux/courses/actions'
import EditCourses from './EditCourses'
  
const Actions = ({id,status}) => {
    const dispatch= useDispatch();
    const handleArchived=(id,status)=>{
        dispatch(setArchived(id,status));
    }


  return (
    <DropdownMenu>
  <DropdownMenuTrigger className='flex w-full justify-end outline-none'>
  <BsThreeDotsVertical  />
  </DropdownMenuTrigger>
  <DropdownMenuContent>
       <EditCourses id={id}>
    <DropdownMenuItem >
    
     </DropdownMenuItem>
       </EditCourses>
    <DropdownMenuItem onClick={()=>handleArchived(id,"Closed")} className="m-0 p-0">
        <span className='py-2 cursor-pointer pl-2 pr-8 hover:bg-gray-100 rounded-md'>Close Course</span>
    </DropdownMenuItem>
   { status!=="Archived"&&<DropdownMenuItem className="m-0 p-0">
        <span onClick={()=>handleArchived(id,"Archived")} className='py-2 cursor-pointer pl-2 pr-8 hover:bg-gray-100 rounded-md'>Archive Course</span>
    </DropdownMenuItem>}
   {status=="Archived" &&<DropdownMenuItem className="m-0 p-0">
        <span onClick={()=>handleArchived(id,"Active")}  className='py-2 cursor-pointer pl-2 pr-8 hover:bg-gray-100 rounded-md'>Unarchive Course</span>
    </DropdownMenuItem>}
  </DropdownMenuContent>
</DropdownMenu>

  

  )
}

export default Actions