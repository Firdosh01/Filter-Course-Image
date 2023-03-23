import React from 'react'
import {FcLike} from "react-icons/fc"
import { toast } from 'react-toastify';

const Card = (props) => {
  let course = props.course;
  return (
    <div  className='w-[300px] bg-bgDark bg-slate-900 bg-opacity-80 rounded-md overflow-hidden'>

      <div className='relative'>
        <img src={course.image.url} />
      </div>

      <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
            grid place-items-center'>
        <button>
          {
              (<FcLike fontSize="1.75rem" />)
          }
        </button>
      </div>

      <div className='p-4'>
        <p  className="text-lg font-semibold leading-6 text-white">{course.title}</p>
        <p className='mt-2 text-white'>{course.description}</p>
      </div>

    </div>
  )
}

export default Card
