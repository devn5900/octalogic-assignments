import React from 'react'
import {
    TableCell,
    TableRow,
  } from "../../components/ui/table";
  
const BestStudents = ({regno,firstName,musicCourses,lastName,enrollDate}) => {
    let price=0;
    musicCourses.map((el)=>el.fee).forEach(el => {
        price+=el;    
    });
  return (
    <TableRow>
    <TableCell className="text-[#212529] text-sm py-3 px-0" >{regno}</TableCell>
    <TableCell className="text-[#212529] text-sm py-3 px-0" >{firstName}</TableCell>
    <TableCell className="text-[#212529] text-sm py-3 px-0" >{lastName}</TableCell>
    <TableCell className="text-[#212529] text-sm py-3 px-0" >{musicCourses.map((el)=>el.courseName).join(", ")}</TableCell>
    <TableCell className="text-[#212529] text-sm py-3 px-0" >${price}</TableCell>
    <TableCell className="text-[#212529] text-sm py-3 px-0 text-right" >{enrollDate}</TableCell>
  </TableRow>
  )
}

export default BestStudents