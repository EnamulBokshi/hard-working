import { workWith } from "./constants";
// import {Check,CheckCheck} from 'lucide-react'
const OurActivities = ({h1,pra})=>{

        return(
            
            <>
                <div className="py-10">
                   <h1 className={h1}>
                        Our Widely Activites
                   </h1>
                   <p className={pra}>WE BUY & SELL ALL THE USED & UNUSED FERROUS & NON FERROUS METALS</p>
                   <div className="grid grid-cols-3 gap-y-2">
                        {
                            workWith.map((item,index) => 
                                <li className="list-none" key={index}>
                                    {/* <CheckCheck className="text-green-700 inline me-2"/>  */}
                                    <span className="text-gray-600 font-serif font-bold text-xl">{item}</span> 
                                </li>
                            )
                        }
                   </div>
                  
                </div>
            </>
        );
}

export default OurActivities;