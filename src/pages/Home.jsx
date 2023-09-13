import React, { useEffect } from 'react'
import Cards from '../layouts/overviews/Cards'
import Links from '../layouts/overviews/Links'
import { useDispatch, useSelector } from 'react-redux/es'
import Tables from '../layouts/overviews/Tables'
import { tableHeadings } from '../assets/data'
import { setStudents } from '../redux/students/actions'
import { useNavigate } from 'react-router-dom'
import { setCourse } from '../redux/courses/actions'

const Home = () => {
    const {isAuth,token}= useSelector(store=>store.userReducer);
    const {courses}= useSelector(store=>store.coursesReducer);
    const {students}= useSelector(store=>store.studentsReducer);
    const dispatch=useDispatch();
    const navigate= useNavigate();
    useEffect(()=>{
        dispatch(setStudents());
        dispatch(setCourse());
    },[])
        if(!isAuth||!token){
            navigate("/login");
        }
  return (
    <div className='bg-[#E5E7EB] font-nsans flex flex-col gap-7 w-full py-10 px-8'>
        <div>
            <h1 className='text-3xl font-nsans font-bold text-[#83858B]'>Overview</h1>
        </div>
        <div className='grid grid-cols-5 gap-3'>
            <Cards title={students.length} desc={"total number of students"} />
            <Cards title={courses.length} desc={"total number of courses"} />
            <Cards title={"$2000"} desc={"total amount earned"} />
            <Cards title={"Guitar"} desc={"best performing course"} />
            <Cards title={"Flute"} desc={"wrost performing course"} />
        </div>
        <Links title="Latest enrolments" linkText="View All Course" />
        <div>
            <Tables headings={tableHeadings.enroll} iden={"enroll"} items={students} />
        </div>
        <Links title="best students" linkText="View All Course" />
        <div>
            <Tables headings={tableHeadings.students} iden={"student"} items={students} />
        </div>
    </div>
  )
}

export default Home