import { Link } from "react-router-dom";
import errorImg from "../../assets/404-1.png";
import { FaHome } from "react-icons/fa";

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black">
      <img src={errorImg} alt="" />
      <div className="text-center">
        <h2 className="text-5xl font-bold text-white mb-4">
          This page cannot be found
        </h2>
        <p className="text-[#A2A2A2] mb-10">
          Sorry, the page you are looking for is not available. Maybe you want
          to go home
        </p>
        <div className="flex items-center justify-center">
          <Link
            to="/"
            className="w-[200px] bg-[#FD7800] text-white px-8 py-4 flex items-center gap-5"
          >
            <span>
              <FaHome />
            </span>
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
