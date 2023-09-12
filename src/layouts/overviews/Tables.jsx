import React from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import LatestEnroll from "./LatestEnroll";
import BestStudents from "./BestStudents";
import CoursesList from "../courses/CoursesList";

const Tables = ({ headings,iden, items,action }) => {
  return (
    <div className="bg-white py-4 px-5 rounded-md ">
    <Table  className=" flex-1" >
      <TableHeader >
        <TableRow>
          {headings &&
            headings.length > 0 &&
            headings.map((el,i) => {
              return <TableHead className={`text-[#212529] px-0 font-bold py-4 ${headings.length==(i+1)?"text-right":""}`} >{el}</TableHead>;
            })}
        </TableRow>
      </TableHeader>
      <TableBody>
              {
                iden=="enroll"&&items&&items.length>0&&items.splice(0,5).map((el)=>{
                        return <LatestEnroll {...el}  />
                })
              }
               {
                iden=="student"&&items&&items.length>0&&items.splice(0,5).map((el)=>{
                        return <BestStudents {...el}  />
                })
              }
               {
                iden=="courses"&&items&&items.length>0&&items.map((el)=>{
                        return <CoursesList {...el}  />
                })
              }
      </TableBody>
    </Table>
    </div>

  );
};

export default Tables;
