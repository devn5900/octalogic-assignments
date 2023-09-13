import React, { useEffect, useState } from 'react'
import CourseLinks from '../layouts/courses/CourseLinks'
import Tables from '../layouts/overviews/Tables'
import { tableHeadings } from '../assets/data'
import { useDispatch, useSelector } from 'react-redux/es'
import { setCourse } from '../redux/courses/actions'
import AddCourses from '../layouts/courses/AddCourses'
import { useNavigate } from 'react-router-dom'


const Courses = () => {
  const {courses}= useSelector(store=>store.coursesReducer);
  const {isAuth,token}= useSelector(store=>store.userReducer);
  const navigate= useNavigate();
  const [coursesList,setCoursesList]= useState(courses);
  const dispatch= useDispatch()
  useEffect(()=>{
    dispatch(setCourse());
  },[])
  useEffect(()=>{
    if(!isAuth){
        navigate("/login");
    }
},[isAuth,token])
  useEffect(()=>{
      setCoursesList(courses);
      localStorage.setItem("courses",JSON.stringify(courses));
  },[courses])

  const searchData=(value)=>{
      if(value){
        const filteredData = courses.filter((item) => {
          return Object.values(item).some((val) =>
            val.toString().toLowerCase().includes(value.toLowerCase())
          );
        });
        setCoursesList(filteredData)
      }else{
        setCoursesList(courses);
      }
  }
  return (
    <div className='bg-[#E5E7EB] font-nsans flex flex-col gap-7 w-full py-10 px-8'>
     <div>
            <h1 className='text-3xl font-nsans font-bold text-[#83858B]'>Courses</h1>
        </div>
      <CourseLinks title={'course list'} action={searchData}  />
      <div>
        <Tables headings={tableHeadings.courses} iden={'courses'} items={coursesList} />
      </div>
     <div>
        <AddCourses/>
     </div>
    </div>
  )
}

export default Courses