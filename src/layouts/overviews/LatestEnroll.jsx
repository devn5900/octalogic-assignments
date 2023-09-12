import React from 'react'
import {
    TableCell,
    TableRow,
  } from "../../components/ui/table";
  
const LatestEnroll = ({enrollno,firstName,musicCourses,lastName,enrollDate}) => {
    let price=0;
    musicCourses.map((el)=>el.fee).forEach(el => {
        price+=el;    
    });
  return (
    <TableRow>
    <TableCell className="text-[#212529] text-sm py-3 px-0" >{enrollno}</TableCell>
    <TableCell className="text-[#212529] text-sm py-3 px-0" >{firstName+" "+lastName}</TableCell>
    <TableCell className="text-[#212529] text-sm py-3 px-0" >{musicCourses.map((el)=>el.courseName).join(", ")}</TableCell>
    <TableCell className="text-[#212529] text-sm py-3 px-0" >{price}</TableCell>
    <TableCell className="text-[#212529] text-sm py-3 px-0 text-right" >{enrollDate}</TableCell>
  </TableRow>
  )
}

export default LatestEnroll