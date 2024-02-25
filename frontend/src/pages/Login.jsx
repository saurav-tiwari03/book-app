import { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { app } from '../config/Firebase';
import { getAuth,signInWithEmailAndPassword } from 'firebase/auth'
import { Link,useNavigate } from 'react-router-dom';
import { LuLogIn } from "react-icons/lu";



export const Login = () => {
  const [show,setShow] = useState(true);
  const firebaseAuth = getAuth(app);
  const [email,setEmail ] = useState('');
  const [password,setPassword] = useState('')
  const navigate = useNavigate();
  const submitHandler = () => {
    console.log(email,password)
    signInWithEmailAndPassword(firebaseAuth,email,password);
    navigate('/');
  }
  return (
    <div id='website'>
    <div className='flex items-center justify-center flex-col h-[100vh]' >
      <p className='text-5xl font-semibold my-8 text-[#f26422] flex items-center gap-2'>Login<LuLogIn/></p>
      <div className=' p-12 flex-col gap-4 bg-[#c6c6c6] rounded-lg' id='drop-shadow'>
      <div className=''>
        <div className='flex flex-col items-center justify-center gap-4'>
            <input className='pl-2 h-10 bg-transparent w-60 border-black border-b-2 outline-none' onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter Email...'/>
            <div className='flex relative items-center '>
              <input className='pl-2 h-10 w-60 bg-transparent border-b-2 border-black outline-none' onChange={(e) => setPassword(e.target.value)} type={show ? `text` : 'password'} placeholder='Enter password'/>
              <button className='cursor-pointer absolute right-1 text-[#1d3e51] text-2xl' onClick={() => setShow(!show)}>{show ? <FaRegEye /> : <FaRegEyeSlash />}</button>
            </div>
        </div>
        <button className='bg-[#f26422] px-12 py-1 my-4 rounded-md text-white font-semibold' onClick={submitHandler}>Login</button>
      </div>
      <p>OR</p>
      {/*Continue with Google */}
      <div>
        <p>Dont have a Account : <Link className='text-[#f26422] font-bold ' to='/signup'>SignUp</Link> </p>
      </div>
      </div>
    </div>
    </div>
  )
}
