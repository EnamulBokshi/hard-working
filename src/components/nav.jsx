// import{Menu,X,Locate} from 'lucide-react'
import { MenuItems } from "./constants";
import logo from "../assets/logo.jpg";
import { useState } from "react";

export default function Nav() {
    const [MenuToggler,setMenuToggler] = useState(true);
    const toggler = ()=>{
        setMenuToggler(!MenuToggler)
    }
    return (
  <>
     <nav className=" flex justify-between items-center py-5 px-8 bg-gray-800">
      <div className="flex space-x-3 items-center">
        <img
          src={logo}
          alt="Hardwarking Logo"
          className="h-10 w-10  rounded-full ring-2 ring-amber-300 cursor-pointer"
        />
        <h2 className="tracking-tight text-sky-100 font-semibol.
        d font-sans cursor-pointer">
          Hardworking
        </h2>
        </div>
        <ul className="hidden lg:flex space-x-6 justify-center items-center">
          {MenuItems.map((item, index) => (
            <li key={index} className="text-neutral-50 font-serif cursor-pointer hover:text-sky-400">
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
           {/* <Locate  className="inline text-green-400"/> <Menu className='text-neutral-50'/> <X className='text-neutral-50'/>*/}
        </ul>
        <div className="hidden lg:flex justify-center items-center spapce-x-6">
          <button className="py-2 px-3 rounded flex justify-center space-x-1 items-center bg-slate-200 text-gray-700 hover:ring-2 ring-yellow-400">
          <span className='text-xl text-green-400'> Our Location</span>
          </button>
        </div>
        <div className="lg:hidden md:flex flex-col justify-end">
            <button className='' onClick={toggler}>
                {
                    MenuToggler ? "M" :" &times;"
                }
            </button>
        </div>
    </nav>
    {
       ! MenuToggler && (
            <div className='flex flex-col py-11 bg-gray-800 border-b lg:hidden fixed w-full border-sky-500 justify-center items-center'>
            {MenuItems.map((item, index) => (
                <li key={index} className="text-neutral-50 font-serif cursor-pointer list-none py-3 px-5 hover:text-sky-400">
                <a href={item.href}>{item.label}</a>
                </li>
            ))}
            </div>
        )
    }
  </>
  );
}
