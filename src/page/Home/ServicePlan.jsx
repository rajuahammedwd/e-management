import { FaArrowRight } from "react-icons/fa";

const ServicePlan = () => {
  return (
    <div className="my-20 bg-[#F2F3F5] py-20 text-center">
      <div className="mb-20">
        <h5 className="uppercase mb-3 text-xl text-[#515050]">
          PREDICTABLE PRICING
        </h5>
        <h2 className="text-5xl font-bold">
          Choose the right plan for
          <br /> your business
        </h2>
      </div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="rounded-xl shadow-2xl">
          <div className=" text-center bg-[#323334] rounded-tl-xl rounded-tr-xl text-white items-center justify-center flex py-10">
            <h2>
              <span className="text-7xl font-bold">$30</span>monthly
            </h2>
          </div>
          <div className="tex-center flex flex-col justify-center items-center space-y-2 py-7">
            <a className="text-[#FD7800]">Basic Plan</a>
            <a className="text-2xl font-bold">Starter Design</a>
            <a className="text-[#A2A2A2]">5 Product</a>
            <a className="text-[#A2A2A2]">5GB Storage</a>
            <a className="text-[#A2A2A2]">Free Support</a>
            <a className="text-[#A2A2A2]">Unlimited Users</a>
            <a className="text-[#A2A2A2]">10GB Bandwith</a>
            <button className="font-bold text-[#515050] flex items-center gap-2">
              Purchase Now
              <span className="">
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>
        <div className="rounded-xl shadow-2xl">
          <div className=" text-center bg-[#FD7800] rounded-tl-xl rounded-tr-xl text-white items-center justify-center flex py-10">
            <h2>
              <span className="text-7xl font-bold">$45</span>monthly
            </h2>
          </div>
          <div className="tex-center flex flex-col justify-center items-center space-y-2 py-7">
            <a className="text-[#FD7800]">Basic Plan</a>
            <a className="text-2xl font-bold">Starter Design</a>
            <a className="text-[#A2A2A2]">5 Product</a>
            <a className="text-[#A2A2A2]">5GB Storage</a>
            <a className="text-[#A2A2A2]">Free Support</a>
            <a className="text-[#A2A2A2]">Unlimited Users</a>
            <a className="text-[#A2A2A2]">10GB Bandwith</a>
            <button className="font-bold text-[#515050] flex items-center gap-2">
              Purchase Now
              <span className="">
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>
        <div className="rounded-xl shadow-2xl">
          <div className=" text-center bg-[#323334] rounded-tl-xl rounded-tr-xl text-white items-center justify-center flex py-10">
            <h2>
              <span className="text-7xl font-bold">$60</span>monthly
            </h2>
          </div>
          <div className="tex-center flex flex-col justify-center items-center space-y-2 py-7">
            <a className="text-[#FD7800]">Basic Plan</a>
            <a className="text-2xl font-bold">Starter Design</a>
            <a className="text-[#A2A2A2]">5 Product</a>
            <a className="text-[#A2A2A2]">5GB Storage</a>
            <a className="text-[#A2A2A2]">Free Support</a>
            <a className="text-[#A2A2A2]">Unlimited Users</a>
            <a className="text-[#A2A2A2]">10GB Bandwith</a>
            <button className="font-bold text-[#515050] flex items-center gap-2">
              Purchase Now
              <span className="">
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePlan;
