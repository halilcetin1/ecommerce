
import { useNavigate } from 'react-router-dom'
import '../css/Categories.css'
function Categories() {
  const navigate=useNavigate()
  
  
  return (
    <div className="    categories  justify-between text-3xl max-sm:text-2xl  " >
     <li className='relative' id='electronic' onClick={()=>navigate("/electronic")}>Elektronik
     
    
     </li>
     <li onClick={()=>navigate("/mens")}>Erkek</li>
     <li onClick={()=>navigate("/jewelery")}>Takı/Aksesuar</li>
     <li onClick={()=>navigate("/womens")}>Kadın</li>
     
    
   
    
    </div>
  )
}

export default Categories