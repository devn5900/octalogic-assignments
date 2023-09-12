import React from 'react'
import Cards from '../layouts/overviews/Cards'
import Links from '../layouts/overviews/Links'
import { useSelector } from 'react-redux/es'

const Home = () => {
    const {courses}= useSelector(store=>store.coursesReducer);
  return (
    <div className='bg-[#E5E7EB] w-full py-5 px-8'>
        <div>
            <h1 className='text-3xl font-bold text-[#83858B]'>Overview</h1>
        </div>
        <div className='grid grid-cols-5 gap-3 py-8'>
            <Cards title={"165"} desc={"total number of students"} />
            <Cards title={courses.length} desc={"total number of courses"} />
            <Cards title={"$2000"} desc={"total amount earned"} />
            <Cards title={"Guitar"} desc={"best performing course"} />
            <Cards title={"Flute"} desc={"wrost performing course"} />
        </div>
        <Links title="Latest enrolments" linkText="View All Course" />
    </div>
  )
}

export default Home