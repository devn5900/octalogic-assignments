import React from 'react'

const Links = ({title,linkText}) => {
  return (
    <div className='flex items-center justify-between'>
        <span className=' tracking-wide  text-[#83858B] font-semibold  text-[1rem] uppercase font-nsans'>{title}</span>
            <span className='text-[#901E75] text-sm cursor-pointer'>{linkText}</span>
    </div>
  )
}

export default Links