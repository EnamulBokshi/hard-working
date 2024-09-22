
import {Facebook,Linkedin,Instagram} from 'lucide-react'
export default function Footer(){
    const socialStyle = " text-gray-700 duration-300 rounded hover:bg-gray-500 hover:text-neutral-100 cursor-pointer bg-white"
    return (
        <>  
            <footer className="bg-black px-5 py-3 flex-col  md:flex items-center justify-center  md:justify-between">
                <ul className=" flex space-x-3 items-center justify-center md:justify-start">
                    <Facebook className={socialStyle}/>
                    <Linkedin className = {socialStyle} />
                    <Instagram className = {socialStyle}/>
                </ul> 
                <h2 className='text-gray-700 text-ceter'>
                    &copy; All right reserved by @EnamulBokshi 2024
                </h2>
            </footer>
        </>

    );
}