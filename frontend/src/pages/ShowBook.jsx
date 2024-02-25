import { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { BackButton } from '../components/BackButton';
import { Spinner } from '../components/Spinner';

export const ShowBook = () => {
  const [book,setBook] = useState({});
  const [loading,setLoading] = useState(false);
  const {id} = useParams();
  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:3001/books/${id}`)
    .then((response) => {
      setBook(response.data);
      console.log(response.data);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error)
      setLoading(false);
    })
  },[id])
  return (
    <div className='h-[100vh]'>
      <BackButton />
      {
        loading ? (<Spinner />) : (
          <div className='h-[100vh] flex flex-col justify-center items-center' >
            <h2 className='text-5xl font-semibold my-8 text-[#f26422] flex items-center gap-2'>Show Book</h2>
            <div className=' p-12 flex-col gap-4 bg-[#c6c6c6] rounded-lg' id='drop-shadow'>
              <div className='flex items-center gap-1'>
                <span className='text-xl font-bold text-[#f26422]'>Id : </span>
                <span className='text-black'>{book._id}</span>
              </div>
              <div className='flex items-center gap-1'>
                <span className='text-xl font-bold text-[#f26422]'>Book Title : </span>
                <span>{book.title}</span>
              </div>
              <div className='flex items-center gap-1'>
                <span className='text-xl font-bold text-[#f26422]'>Book Author : </span>
                <span>{book.author}</span>
              </div>
              <div className='flex items-center gap-1'>
                <span className='text-xl font-bold text-[#f26422]'>Book Publish Year : </span>
                <span>{book.publishYear}</span>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}
