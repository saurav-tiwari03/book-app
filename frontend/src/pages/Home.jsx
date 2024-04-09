import { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner } from './../components/Spinner';
import { Link, useNavigate } from 'react-router-dom';
import { app } from '../config/Firebase';
import { signOut,getAuth } from 'firebase/auth';
import { BookCard } from './../components/BookCard';
import { FaRegPlusSquare } from "react-icons/fa";


export const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const API_KEY = "https://book-app-ghj6.onrender.com"

  const singOutHandler = () => {
    signOut(getAuth(app)).then((val) => {
      console.log(val);
      navigate('/');
    })
  }

  useEffect(() => {
    setLoading(true);
    axios.get(`${API_KEY}/books`)
      .then((response) => {
        setBooks(response.data.data);
        console.log(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='h-[100vh]'>
      <div className='flex flex-col items-center gap-4 py-4'>
        <h1 className='text-[#f26422] font-semibold text-5xl'>Books List</h1>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex items-center justify-start gap-10 my-10' id='container'>
            {books.map((book, index) => {
              return (
                  <BookCard data={{title:book.title,id : book._id, author:book.author, publishYear:book.publishYear,index:index}}/>
              )
            })}
              <Link className='text-[#f26422]  rounded-md  font-semibold text-5xl ' to='/books/create'><FaRegPlusSquare /></Link>
        </div>
      )}
      
      <div>
        <button className='bg-[#f26422] px-12 py-1 rounded-md text-white font-semibold' onClick={singOutHandler}>Signout</button>
      </div>
    </div>
  );
};
