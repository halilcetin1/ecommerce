
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik';
import { SigInShemas } from './Shemas';
import { auth } from '../firebase/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { openedLoading, stopedLoading } from '../redux/productsSlice';
import { Input } from '@mui/material';
function LoginAndSign() {






const [name ,setName]=useState("")
 const dispatch=useDispatch()
const navigate=useNavigate()

const submit= (event)=>{

//! firebase 
// setEmail(e.email);
// setpassword(e.password);
// if(!emailDb || !passwordDB){

// return;
// }
 createUserWithEmailAndPassword(auth ,event.email,event.password).then((e)=>{
  dispatch(openedLoading())
 setTimeout(() => {
  toast.success("Başarıyla kayıt olundu.")
  // navigate("/login")
  signInWithEmailAndPassword(auth,event.email,event.password).then(e=>{
    updateProfile(e.user,{displayName:event.name})
    
    navigate("/")
    
  })
  dispatch(stopedLoading())
 }, 1000);
  
}).catch(e=>console.log(e)
)


}



  const {handleChange,errors,handleSubmit,values,touched} = useFormik({
    initialValues: {
      email: "",
     password: "",
     checkPassword:"",
        check:"",
   name:""
    

    },
    validationSchema:SigInShemas,

   onSubmit:submit
  });




  return (

 
 <form id='form' action="" className='flex flex-col items-center justify-center  p-6  w-1/4' onSubmit={handleSubmit} >
<h2 className='text-3xl text-orange-400 text-center mb-4'>Kayıt Ol</h2>
<div className='flex flex-col items-center justify-center w-4/5 relative gap-3  '>
<Input type='text' onChange={handleChange} placeholder='İsim' required className='w-96 mt-3' name='name' value={values.name}/>
<p className='text-red-600'>
{touched.name && errors && errors.name}

</p>
<Input type="text" onChange={handleChange} name='email' placeholder='e-posta'  className='   w-96 m-3  rounded-lg ' value={values.email}/>
<p className='text-red-600'>{touched.email &&errors&& errors.email}</p>


<Input onChange={handleChange} type="text"  placeholder='Şifre' name='password'  className='   w-96 m-3  rounded-lg ' value={values.password}/>
<p className='text-red-600'>{touched.password && errors &&errors.password}</p>
<Input onChange={handleChange} type="text" name='checkPassword' placeholder='Şifre tekrarı'  className='   w-96 m-3  rounded-lg ' value={values.checkPassword} />
<p className='text-red-600'>{touched.checkPassword && errors && errors.checkPassword}</p>
<span className='text-center w-96'><input onChange={handleChange} type="checkbox" name="check" id="" value={values.check}/> <a href="" className='underline' >Kullanım koşullarını kabul ediyorum.</a></span>
<p className='text-red-600'>{touched.check  &&errors && errors.check}</p>
<button id='submitBtn' type='submit' className='bg-orange-400 w-96 h-10 text-2xl font-bold text-white mt-5'disabled={errors.email || errors.checkPassword || errors.check} >Kayıt Ol</button>
</div>
<p className='mt-1'>Hesabın varsa <Link to="/login" className='text-blue-500'>GirişYap</Link></p>
 </form>
 
 
 
 

  )
}
export default LoginAndSign



// <Input  color='secondary' onChange={(e)=>setEmail(e.currentTarget.value)} placeholder='E-posta'/>