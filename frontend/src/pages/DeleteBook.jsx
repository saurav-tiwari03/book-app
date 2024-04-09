import { useState } from 'react'
import { Spinner } from '../components/Spinner'
import { BackButton } from '../components/BackButton';
import { useNavigate,useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import axios from 'axios';

export const DeleteBook = () => {
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const API_KEY = "https://book-app-ghj6.onrender.com"
  const handleDeleteBook = () => {
    setLoading(true);
    axios.delete(`${API_KEY}/${id}`)
    .then(() => {
      setLoading(false);
      enqueueSnackbar('Book Deleted successfully', { variant: 'success' });
      navigate('/')
    })
    .catch((error) => {
      setLoading(false);
      enqueueSnackbar('Error', { variant: 'error' });
      console.log(error)
    })
  }
  return (
    <div className='h-[100vh]'>
      <BackButton />
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col h-[100vh] items-center justify-center gap-4'>
        <h1 className='text-5xl text-[#f26422]'>Delete Book</h1>
        <h3 className='text-white text-3xl'>Are,you sure you want to delete it!</h3>
        <button className='bg-[#f26422] px-12 py-1 my-4 rounded-md text-white font-semibold' onClick={handleDeleteBook}>Delete Button</button>
      </div>
    </div>
  )
}
