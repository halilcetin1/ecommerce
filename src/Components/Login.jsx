import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useRef, useState } from 'react'
import { auth } from '../firebase/firebase'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { Icon, Input, TextField } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { FaLowVision } from "react-icons/fa";
import { MdVisibility } from "react-icons/md";
import { setUserData,  } from '../redux/login'
import { openedLoading, stopedLoading } from '../redux/productsSlice'




export default function Login() {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [showIcon,setShowIcon]=useState(false)
    const [error,setError]=useState("")
    const inputref=useRef()
    const handleSubmit=(e)=>{
        e.preventDefault()
if(!email || !password) return;
signInWithEmailAndPassword(auth,email,password).then(()=>{
dispatch(openedLoading())
setTimeout(() => {
  dispatch(stopedLoading())
  navigate("/")
}, 500);
 
  
}).catch(()=>{
  setError("E-mail veya şifre hatalı.")
})

    }
  return (

    <div className=' m-32  flex items-center justify-center flex-col'>
<h1 className='text-center text-2xl mb-10'>Girş yap</h1>

      
<form action="" onSubmit={handleSubmit} className='flex flex-col gap-11 p-3'>


<Input  color='secondary' onChange={(e)=>setEmail(e.currentTarget.value)} placeholder='E-posta'/> 
  

<Input  color='secondary' sx={
  {
    width:"400px",
    height:"48px",borderRadius:"10px",borderBottom:"none"
  }
} placeholder='Şifre'  type='password' ref={inputref} endAdornment={showIcon ?<FaLowVision className='text-3xl  cursor-pointer' onClick={()=>{setShowIcon(false)
      inputref.current.children[0].type='password'


}}/> :
  <MdVisibility className='text-3xl cursor-pointer' onClick={()=>{
    setShowIcon(true)
      
  inputref.current.children[0].type='text'
  }
    
  }/>
} onChange={(e)=>setPassword(e.currentTarget.value)} />
{error&& <p className='text-red-500'>{error}</p>}
<div className='flex' ><input type="checkbox" name="" id="remember" className='text-white'  /> <span id='remember'>Beni hatırla</span> <Link to='/forget-password' className='ml-auto text-blue-500'>Şifreni mi unuttun ?</Link></div>
    <button id='submit-loginBtn' disabled={!email || !password} type="submit" className='bg-orange-400 h-12 rounded-md text-white text-xl'>Giriş yap</button>
    
</form>
<p>Hesabın yok mu?<Link to="/sig-in" className='text-blue-600'>Kayıt Ol</Link></p>

    </div>
  )
}
//  <input type='password' onChange={(e)=>setPassword(e.currentTarget.value)} className='bg-gray-200 p-3 rounded-sm text-xl' placeholder='Şifre' />