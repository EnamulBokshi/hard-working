import OurActivities from "./acitivities";
import { MetaData, datasStored } from "./constants";

export default function Body() {
    const h1Style = "text-4xl capitalize text-center font-semibold text-sky-800"
    const pra = "py-8 text-gray-500 px-8 text-3xl font-mono  mb-5 hover:text-gray-700 delay-200 duration-200 text-justify"
  const card =
    "p-4 rounded-md  border-8 shadow-md shadow-neutral-300  hover:ring-8 hover:shadow-lg hover:shadow-sky-400 bg-transparent duration-200 hover:border-0";
  const oddCard =
    "p-4 rounded-md  border-8 shadow-md shadow-neutral-300 bg-gray-300 hover:ring-4 hover:shadow-lg  duration-75";
  return (
    <>
      <section className="w-100 bg-neutral-300 py-6">
        <div className=" py-5 px-16 container mx-auto">
          <h1 className={h1Style}>
            Who we are?
          </h1>
          <h1 className={pra}>
            <span>Hard Works</span> is known for our experience for desposal of
            scrap and dismantling and delition work and client satisfaction. Our
            consultative, specialized and specified execution practices enable
            us in speeding up the disposal process as per our client requirement
          </h1>
          <div className=" grid grid-cols-2  gap-12 bg-[url('./assets/images/thumb1.jpg')] bg-cover bg-fixed ">
            {/* <div className="p-3 rounded-md  border-8 shadow-md shadow-neutral-300 bg-gray-300 hover:ring-4 hover:shadow-lg  duration-75 ">
                        <h1 className="font-serif font-semibold py-3 text-3xl text-center text-gray-700">Our Services</h1>
                        <ul className="px-3">
                           {
                            MetaData.services.map((item,index) => <li key={index} className="list-disc list-">{item.label}</li>)
                           }
                        </ul>
                    </div> */}
            {datasStored.map((item, k) => (
              <div className="OverLey">
                <div key={k} className={card}>
                  <h1 className="font-serif font-semibold py-3 text-3xl text-center text-white">
                    {item.title}
                  </h1>
                  <ul className="px-5 py-5 ">
                    {item.items.map((item, index) => (
                      <li key={index} className="list-disc py-2 text-neutral-50 font-bold">
                        {item.label}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        <OurActivities h1 = {h1Style} pra = {pra}/>

        </div>
      </section>
    </>
  );
}
