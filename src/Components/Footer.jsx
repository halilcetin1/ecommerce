import { FaFacebook,  FaInstagram,  FaX } from "react-icons/fa6"
import '../css/footer.css'

function Footer() {
  return (

    <div id="footer" className="   relative w-full 
  flex flex-row justify-center p-3 mt-40 gap-6 min-h-96 items-start max-sm:flex-col  ">

<div className=" w-1/3 max-sm:w-full "><h1>İletişim</h1>
<hr />
<h2 className="mt-4">Sosyal Medya</h2>
<div className=" max-sm:w-full  flex p-3 gap-2">
<a href="#" className="insta  "><FaInstagram className=" "/></a>
<a href="#" className="x" ><FaX /></a>
<a href="#" className="face"><FaFacebook  /></a>
</div>
</div>
<div className="w-1/3   flex flex-col gap-2 max-sm:w-full"><h1 className="">Hakkında</h1>
<hr />
<a href="">Satıcı</a>
<a href="">Mağazalar</a>
<a href="">Üyelik</a>


</div>
<div className="w-1/3 max-sm:w-full
 ">
<h1>Yardım</h1>
<hr />
<div className="flex flex-col gap-2">
  <a href="">Sıkça Sorulan Sorular</a>
  <a href="">Şikayetler/Talepler</a>
  <a href="">Canlı Yardım</a>
</div>

</div>



<div className=" absolute  bottom-0 p-3 w-full  bg-black">
<h1 className="font-extrabold text-white"><a href="mailto:halilc3618@gmail.com">Halil ÇETİN</a></h1>
  <p className="w-full text-white text-center text-xl mb-3">
  © 2024 Tüm hakkları saklıdır.
  </p>
</div>
{/* w-full bg-black text-xl absolute bottom-1 text-white text-center font-bold */}
    </div>
  )
}

export default Footer