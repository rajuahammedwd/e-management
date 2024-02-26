import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Service = ({service}) => {
    const {id,img, name, description} = service;
  return (
    <div className="flex flex-col justify-center items-center text-center  shadow-lg px-5 py-10 mb-20">
      <div className="flex justify-center items-center bg-[#FD7800] rounded-full w-[220px] h-[220px]">
        <img
          className="mx-auto w-[200px] h-[200px] rounded-full"
          src={img}
          alt=""
        />
      </div>
      <h2 className="text-3xl font-bold mt-5">{name}</h2>
      <p>{description}</p>
      <Link to={`/service/${id}`} className="text-white bg-[#A2A2A2] hover:bg-[#FD7800] px-5 py-4 mt-10 flex items-center gap-3">
        View More{" "}
        <span>
          <FaArrowRight />
        </span>
      </Link>
    </div>
  );
};

export default Service;
