
import { useNavigate } from 'react-router-dom'
import '../css/Categories.css'
function Categories() {
  const navigate=useNavigate()
  
  
  return (
    <div className="    categories   " >
     <li className='relative' id='electronic' onClick={()=>navigate("/electronic")}>Elektronik
     
    
     </li>
     <li onClick={()=>navigate("/mens")}>Erkek</li>
     <li onClick={()=>navigate("/jewelery")}>Takı/Aksesuar</li>
     <li onClick={()=>navigate("/womens")}>Kadın</li>
     <li onClick={()=>navigate("/womens")}>Kadın</li>
     <li onClick={()=>navigate("/womens")}>Kadın</li>
     <li onClick={()=>navigate("/womens")}>Kadın</li>
     <li onClick={()=>navigate("/womens")}>Kadın</li>
    
   
    
    </div>
  )
}

export default Categories