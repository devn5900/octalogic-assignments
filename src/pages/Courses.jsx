import React, { useEffect } from 'react'
import CourseLinks from '../layouts/courses/CourseLinks'
import Tables from '../layouts/overviews/Tables'
import { tableHeadings } from '../assets/data'
import { useDispatch, useSelector } from 'react-redux/es'
import { setCourse } from '../redux/courses/actions'


const Courses = () => {
  const {courses}= useSelector(store=>store.coursesReducer);
  
  const dispatch= useDispatch()
  useEffect(()=>{
    dispatch(setCourse());
  },[])
  return (
    <div className='bg-[#E5E7EB] font-nsans flex flex-col gap-7 w-full py-10 px-8'>
     <div>
            <h1 className='text-3xl font-nsans font-bold text-[#83858B]'>Courses</h1>
        </div>
      <CourseLinks title={'course list'}  />
      <div>
        <Tables headings={tableHeadings.courses} iden={'courses'} items={courses} />
      </div>
    </div>
  )
}

export default Courses