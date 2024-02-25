import React from 'react'
import { Link } from 'react-router-dom'
import { IoArrowBackCircleOutline } from "react-icons/io5";


export const BackButton = ({destination = '/'}) => {
  return (
    <div className='relative'>
      <Link className='text-4xl text-[#f26422] absolute left-4 top-4' to={destination} ><IoArrowBackCircleOutline/></Link>
    </div>
  )
}