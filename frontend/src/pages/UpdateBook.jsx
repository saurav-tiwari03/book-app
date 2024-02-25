import { useEffect, useState } from 'react'
import axios from 'axios'
import { Spinner } from '../components/Spinner'
import { BackButton} from '../components/BackButton';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';


export const UpdateBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:3001/books/${id}`)
    .then((response) => {
        setAuthor(response.data.author);
        setPublishYear(response.data.publishYear)
        setTitle(response.data.title)
        setLoading(false);
      }).catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, [id])
  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Edited successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };
  return (
    <div className='h-[100vh] ' id='website'>
      <BackButton />
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col gap-4 items-center justify-center h-[100vh]'>
      <h3 className='text-5xl text-[#f26422]'>Edit Book</h3>
        <div className='p-12 flex-col gap-4 bg-[#c6c6c6] rounded-lg' id='drop-shadow'>
          <div className='flex flex-col items-center justify-center gap-4'>
            <input className='pl-2 h-10 bg-transparent w-60 border-black border-b-2 outline-none'  onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Update Title'/>
            <input className='pl-2 h-10 bg-transparent w-60 border-black border-b-2 outline-none'  onChange={(e) => setAuthor(e.target.value)} type="text" placeholder='Upate Author'/>
            <input className='pl-2 h-10 bg-transparent w-60 border-black border-b-2 outline-none'  onChange={(e) => setPublishYear(e.target.value)} type="text" placeholder='Update Publish Year'/>
          </div>
          <button className='bg-[#f26422] px-12 py-1 my-4 rounded-md text-white font-semibold' onClick={handleEditBook}>Update</button>
        </div>
      </div>
    </div>
  )
}
