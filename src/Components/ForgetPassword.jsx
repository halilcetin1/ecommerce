import { sendPasswordResetEmail } from "firebase/auth"
import { auth } from "../firebase/firebase"
import { useState } from "react"
import { Input, TextField } from "@mui/material"
import { toast } from "react-toastify"
import { Link, useNavigate } from "react-router-dom"


function ForgetPassword() {
    const navigate=useNavigate()
    const [email,setEmail]=useState("")
    const handleSubmit=(e)=>{
      
        e.preventDefault()
        if(!email){ return;}
        sendPasswordResetEmail(auth,email).then((e)=>{
          
            
            toast.success("E-posta adresinize mail gönderildi. Gelen kutunuzu kontrol ediniz. Giriş sayfasına yönlendiriliyorsunuz...")
            setTimeout(()=>{
                navigate("/login")
            },1000)
        }).catch((e)=>{
    
            
            toast.warning(e)
        })
    }
  return (
    <div className="mt-16" >
<form action=""
onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-10 ">
<h1 className="mb-3 text-center text-2xl">Şifreyi sıfırla</h1>
<TextField color="secondary" label="E-posta " onChange={(e)=>{setEmail(e.currentTarget.value)

}} className="w-64"/>
<button type="submit" className="text-white text-center text-2xl bg-orange-400 w-64 h-12 rounded-full">Sıfırla</button>
<Link to='/login' className="text-blue-500">Giriş sayfasına dön</Link>
</form>



    </div>
  )
}

export default ForgetPassword