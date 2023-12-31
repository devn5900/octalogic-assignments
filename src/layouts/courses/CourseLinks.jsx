import React, { useEffect, useState } from 'react'
import { Input } from "../../components/ui/input"

const CourseLinks = ({title,linkText,action}) => {
     const handleInput=(e)=>{
        action(e.target.value);
     }
    
  return (
    <div className='flex items-center justify-between'>
        <span className=' tracking-wide  text-[#83858B] font-semibold  text-[1rem] uppercase font-nsans'>{title}</span>
          <div className=' relative'>
          <Input type="text" onChange={handleInput} className=" w-56 pl-8 outline-none border-none placeholder:text-[#83858B]" placeholder="Search" />
          <span className=' flex items-center justify-center absolute top-0 bottom-0 left-3'>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
  <path d="M4.33333 0C5.4826 0 6.58481 0.456546 7.39746 1.2692C8.21012 2.08186 8.66667 3.18406 8.66667 4.33333C8.66667 5.40667 8.27333 6.39333 7.62667 7.15333L7.80667 7.33333H8.33333L11.6667 10.6667L10.6667 11.6667L7.33333 8.33333V7.80667L7.15333 7.62667C6.36703 8.29785 5.36714 8.6666 4.33333 8.66667C3.18406 8.66667 2.08186 8.21012 1.2692 7.39746C0.456546 6.58481 0 5.4826 0 4.33333C0 3.18406 0.456546 2.08186 1.2692 1.2692C2.08186 0.456546 3.18406 0 4.33333 0ZM4.33333 1.33333C2.66667 1.33333 1.33333 2.66667 1.33333 4.33333C1.33333 6 2.66667 7.33333 4.33333 7.33333C6 7.33333 7.33333 6 7.33333 4.33333C7.33333 2.66667 6 1.33333 4.33333 1.33333Z" fill="#83858B"/>
</svg></span>
          </div>
    </div>
  )
}

export default CourseLinks