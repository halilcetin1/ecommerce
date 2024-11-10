import { useState } from 'react'
import '../css/Banner.css'
import banner1 from '../source/banner1.webp'
import banner2 from '../source/banner2.webp'
import banner3 from '../source/banner3.webp'
import { FcNext, FcPrevious } from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'
function Banner() {
  const foto=[banner1,banner2,banner3]
  const [index ,setIndex]=useState(0)
  const [src,setSrc]=useState(foto[index])
  setInterval(() => {
 if(index<=3){
  setIndex(index+1)
 
  setSrc(foto[index])
  if(index==foto.length-1){
    setIndex(0)
    setSrc(foto[index])
  }
 }
 
    
  }, 3000);
  function nexSlider(){
    if(index<3){
      setIndex(index+1)
      setSrc(foto[index])
      if(index==foto.length-1){
        setIndex(0)
        setSrc(foto[index])
      }
    }
  }
  function prevSlider(){
    if(index>0)
    {setIndex(index-1)
    setSrc(foto[index])}
    else if(index==0){
      setIndex(foto.length-1)
      setSrc(foto[index])
    }
  }
 
  const navigate=useNavigate(
 
  )
  return (
    <div className='flex justify-center items-center banner w-full' >
      <FcPrevious onClick={prevSlider} className='prevBtn' />
      <a href='' >
      <img className='img w-full ' src={src} alt=""  />
 
      </a>
      <FcNext onClick ={nexSlider}className='nextBtn' />
    </div>
  )
}

export default Banner