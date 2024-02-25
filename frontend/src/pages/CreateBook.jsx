import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {BackButton } from './../components/BackButton';
import { Spinner } from '../components/Spinner';

export const CreateBook = () => {
  const [title,setTitle] = useState('');
  const [author,setAuthor] = useState('');
  const [publishYear,setPublishYear] = useState('');
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate()
  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear
    };
    setLoading(true);
    axios.post(`http://localhost:3001/books`,data)
    .then(() => { 
      setLoading(false);
      navigate('/');
    })
    .catch((error) => {
      setLoading(false);
      console.log(error)
    })
  }
  return (
    <div className='h-[100vh]'>
      <BackButton />
      {
        loading ? <Spinner /> : ''
      }
      <div className='flex flex-col gap-4 items-center justify-center h-[100vh]'>
        <h1 className='text-5xl text-[#f26422]'> Create Book</h1>
        <div className='p-12 flex-col gap-4 bg-[#c6c6c6] rounded-lg' id='drop-shadow'>
          <div className='flex flex-col items-center justify-center gap-4'>
            <input className='pl-2 h-10 bg-transparent w-60 border-black border-b-2 outline-none' onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Enter book title' />
            <input className='pl-2 h-10 bg-transparent w-60 border-black border-b-2 outline-none' onChange={(e) => setAuthor(e.target.value)} type="text" placeholder='Enter book Author'/>
            <input className='pl-2 h-10 bg-transparent w-60 border-black border-b-2 outline-none' onChange={(e) => setPublishYear(e.target.value)} type="text" placeholder='Enter book Publish Year'/>
          </div>
          <button className='bg-[#f26422] px-12 py-1 my-4 rounded-md text-white font-semibold' onClick={handleSaveBook}>
            Add Book
          </button>
        </div>
      </div>
    </div>
  )
}
