import  { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { app } from '../config/Firebase';
import { getAuth,createUserWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom';
import { LuLogOut } from "react-icons/lu";


export const SignUp = () => {
  const [show,setShow] = useState(true);
  const firebaseAuth = getAuth(app);
  const [email,setEmail ] = useState('');
  const [password,setPassword] = useState('')
  const navigate = useNavigate();
  const submitHandler = () => {
    console.log(email,password)
    createUserWithEmailAndPassword(firebaseAuth,email,password);
    navigate('/');

  }
  return (
    <div id='website'>
      <div  className='flex items-center justify-center flex-col h-[100vh]'>
        <p className='text-5xl font-semibold my-8 text-[#f26422] flex items-center gap-2'>Signup<LuLogOut/></p>
        <div className=' p-12 flex-col gap-4 bg-[#c6c6c6] rounded-lg' id='drop-shadow'>
          <div className=''>
              <div className='flex flex-col items-center justify-center gap-4'>
                  <input className='pl-2 h-10 bg-transparent  w-60 border-black border-b-2 outline-none' onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter Email...'/>
                  <div className='flex items-center relative'>
                    <input className='pl-2 h-10 bg-transparent w-60 border-black border-b-2 outline-none' onChange={(e) => setPassword(e.target.value)} type={show ? `text` : 'password'} placeholder='Enter password'/>
                    <button className='cursor-pointer absolute right-1 text-[#1d3e51] text-2xl' onClick={() => setShow(!show)}>{show ? <FaRegEye /> : <FaRegEyeSlash />}</button>
                  </div>
              </div>
            <button className='bg-[#f26422] px-12 py-1 my-4 rounded-md text-white font-semibold'  onClick={submitHandler}>Signup</button>
            </div>
            <p>OR</p>
            <div>
              <p>Do have a Account : <Link className='text-[#f26422] font-bold' to='/'>Login</Link> </p>
            </div>
          </div>
      </div>
    </div>
  )
}
