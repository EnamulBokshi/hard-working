import Thumb from "../assets/images/thumb1.jpg";
const Hero = () => {
    const ImgUrl = `url(${Thumb})`
  return (
    <>
      <div className="bg-[url('assets/images/thumb_AI.jpg')] w-full bg-cover bg-center bg-fixed ">
        {/* <img src={Thumb} alt="Banner photo" className=' w-full h-full z-0 object-cover absolute'/> */}

        <div className="w-full h-full OverLey">
          <div className="md:p-24 flex justify-center items-center px-10 py-20">
            <div className=" text-3xl text-white ">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide font-bold">
                What we does?
              </h1>
              <p className="md:mt-10 mt-5 text-lg text-center text-neutral-200 max-w-4xl">
                We are the one of the exclusive metal scarap buyer,scrap
                dealer,scrap merchant,trade,yard owner,manufacturer,stockit of
                all kinds of metal scrap,Ore's(Minerals) & Scrap demolition
                Vessels in the Kingdom
              </p>
              <div className="flex justify-center my-10">
                <a
                  href="#"
                  className="bg-gradient-to-r from-sky-500 to-sky-800 md:py-3 md:px-6 mx-3 py-2 px-3 rounded-md hover:ring-2 hover:ring-red-200"
                >
                  Get a quote now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
