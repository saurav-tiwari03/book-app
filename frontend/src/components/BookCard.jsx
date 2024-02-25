import React from 'react'
import { BiShow } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';


export const BookCard = ({data}) => {
  const index = data.index
  const title = data.title
  const author = data.author
  const publishYear = data.publishYear
  const id = data.id;
  console.log(id);
  return (
    <div className=''>
      <div class="card ">
        <div class="card-border-top">
          <p className='text-white text-xl text-center p-2'>{index+1}</p>
        </div>
        <div class="img flex items-center justify-center">
          <p className='text-white text-sm font-semibold'>{title}</p>
        </div>
        <span> {author}</span>
        <p class="job"> {publishYear}</p>
        <div className='btn flex items-center justify-center gap-4'>
        <Link to={`/books/details/${id}`}><button className='p-2'> <BiShow /></button></Link>
        <Link to={`/books/edit/${id}`}><button className='p-2'> <FaEdit /></button></Link>
        <Link to={`/books/delete/${id}`}><button className='p-2'> <MdDelete /></button></Link>
        </div>
      </div>
    </div>
  )
}
