import React from 'react'
import {
    TableCell,
    TableRow,
  } from "../../components/ui/table";
import Actions from './Actions';
const CoursesList = ({id,name,desc,instructor,instrument,daysOfWeek,noOfStudents,price,status}) => {
  
  return (
    <TableRow>
    <TableCell className="text-[#212529] align-baseline p-0 text-sm py-3 px-0" >{name}</TableCell>
    <TableCell className="text-[#212529] align-baseline p-0 text-sm py-3 px-0 truncate" >{desc.split(" ").splice(0,4).join(" ")}...</TableCell>
    <TableCell className="text-[#212529] align-baseline p-0 text-sm py-3 px-0" >{instructor}</TableCell>
    <TableCell className="text-[#212529] align-baseline p-0 text-sm py-3 px-0" >{instrument}</TableCell>
    <TableCell className="text-[#212529] align-baseline p-0 text-sm py-3 px-0" >{daysOfWeek}</TableCell>
    <TableCell className="text-[#212529] align-baseline p-0 text-sm py-3 px-0 " >{noOfStudents}</TableCell>
    <TableCell className="text-[#212529] align-baseline p-0 text-sm py-3 px-0 " >${price}</TableCell>
    <TableCell className="text-[#212529] align-baseline p-0 text-sm py-3 px-0 " >
        <span className={`text-[#83858B] text-xs ${status=="Active"?"bg-[#CFF9DF]":status=="Closed"?"bg-[#FEC0CA]":"bg-[#E5E7EB]"} py-[0.4rem] px-4 rounded-md`}>
        {status}
        </span>
        </TableCell>
    <TableCell className="text-[#212529]  p-0 text-sm py-3 px-0 " >
        <Actions id={id} status={status} />
    </TableCell>

   
  </TableRow>
  )
}

export default CoursesList