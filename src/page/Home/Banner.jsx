import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="bg-[url('https://i.ibb.co/CQpXLyS/image.png')] bg-cover h-screen mb-20">
      <div className="bg-black/50 w-full h-full flex items-center">
        <div className="lg:ml-40 px-5 space-y-5">
          <p className="uppercase text-[#d8d6d6] text-xl ">
            {" "}
            welcome to emanage
          </p>
          <h1 className="text-7xl font-bold text-white">
            Join over <span className="text-[#FD7800] text-8xl">50K+</span>
            <br />
            Customers who Love It!
          </h1>
          <p className="text-[#A2A2A2] text-xl">
            Offering web solutions since June 04. 2011
          </p>
          <button className="text-white bg-[#FD7800] px-5 py-4 mt-10 flex items-center gap-3">
            View More{" "}
            <span>
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
