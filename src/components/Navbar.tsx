import { Link } from "react-router-dom"
import {useTranslation} from "react-i18next";


function Navbar() {
const { i18n : {language , changeLanguage} } = useTranslation()

function selectLanguage(lang : string){
  changeLanguage(lang);
  localStorage.setItem("language" , lang)
}

  return (
    <nav className="p-4 bg-teal-400 bg-opacity-70 shadow-2xl">
        <Link to="/">
        <div className="flex justify-center items-center gap-5 ">
        <img src="./logo.png" alt="logo" height={70} width={70} className="" />
        <h1 className="text-3xl font-bold text-center">{language==="fa" ? "کدوم" : "Which"}<br/> {language==="fa" ? "یکی؟" : "One?"}</h1>
        </div>
        </Link>
        <div className="fixed top-0 left-6 flex gap-2" dir="rtl">
          <button className={`p-3 rounded-b-full ${language==="en" ? "bg-white" : "bg-yellow-500"} text-black hover:bg-yellow-300 hover:text-black`} onClick={()=>selectLanguage("en")}>EN</button>
          <button className={`p-3 rounded-b-full ${language==="fa" ? "bg-white" : "bg-yellow-500"} text-black hover:bg-yellow-300 hover:text-black`} onClick={()=>selectLanguage("fa")}>FA</button>
        </div>
    </nav>
  )
}

export default Navbar