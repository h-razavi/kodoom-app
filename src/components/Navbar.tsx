import { Link } from "react-router-dom"


function Navbar() {
  return (
    <nav className="p-4 bg-teal-400 bg-opacity-70 shadow-2xl">
        <Link to="/">
        <div className="flex justify-center items-center gap-5 ">
        <img src="./logo.png" alt="logo" height={70} width={70} className="" />
        <h1 className="text-3xl font-bold text-center">کدوم<br/> یکی؟</h1>
        </div>
        </Link>
    </nav>
  )
}

export default Navbar