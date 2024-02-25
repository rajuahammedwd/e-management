import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="bg-[url('https://i.ibb.co/CQpXLyS/image.png')] bg-cover h-screen">
      <div className="bg-black/50 w-full h-full flex items-center">
        <div className="ml-40">
          <p className="uppercase text-white text-xl"> welcome to emanage</p>
          <h1 className="text-7xl font-bold text-white">
            Join over <span className="text-[#FD7800] text-8xl">50K+</span>
            <br />
            Customers who Love It!
          </h1>
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
