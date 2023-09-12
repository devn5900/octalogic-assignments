import React, { useEffect } from 'react'
import Cards from '../layouts/overviews/Cards'
import Links from '../layouts/overviews/Links'
import { useDispatch, useSelector } from 'react-redux/es'
import Tables from '../layouts/overviews/Tables'
import { tableHeadings } from '../assets/data'
import { setStudents } from '../redux/students/actions'

const Home = () => {
    const {courses}= useSelector(store=>store.coursesReducer);
    const {students}= useSelector(store=>store.studentsReducer);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(setStudents());
    },[])

  return (
    <div className='bg-[#E5E7EB] flex flex-col gap-7 w-full py-5 px-8'>
        <div>
            <h1 className='text-3xl font-bold text-[#83858B]'>Overview</h1>
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
    </div>
  )
}

export default Home