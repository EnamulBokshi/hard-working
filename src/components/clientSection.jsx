import brand1 from '../assets/brands/down.png'
import { brands } from './constants';
const ClientSection = ()=>{
    return (
        <>
         <section className="py-16">
            <div className="container mx-auto  w-full bg-contain  ">
                <h1 className="font-semibold uppercase text-3xl font-mono text-green-600">Our valuable Clients</h1>
                <div className="py-6 px-5 ms-4 grid grid-cols-3 gap-8 md:grid-cols-4 bg-[url('./assets/background/bg_2.jpg')] bg-right-bottom bg-contain bg-fixed">
                    {
                        brands.map((src,index) => 
                            <div key={index} className="p-5 flex justify-center items-center bg-neutral-50 rounded-md h-20 overflow-hidden  shadow-sm shadow-gray-700 ">
                                <img src={src}  />
                            </div>
                        )
                    }
                </div>
            </div>
         </section>
        </>

    );
}
export default ClientSection;