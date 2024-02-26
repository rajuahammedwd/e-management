import {
  FaEnvelope,
  FaFacebook,
  FaInfoCircle,
  FaLinkedin,
  FaRegClock,
  FaRegUser,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const MiniNav = () => {
  return (
    <div className="hidden md:flex lg:flex justify-between px-10 mt-2">
      <div className="lg:flex gap-5">
        <div>
          <a className="flex items-center hover:text-[#FD7800]">
            <FaEnvelope className="mr-2"></FaEnvelope>to@example.com
          </a>
        </div>
        <div>
          <a className="flex items-center">
            <FaRegClock className="mr-2"></FaRegClock>Mon – Sat 8:00 – 18:00,
            Sunday-CLOSED
          </a>
        </div>
      </div>
      <div>
        <div className="flex gap-5">
          <li className="flex items-center border-r-2 pr-2 hover:text-[#FD7800]">
            <FaInfoCircle className="mr-2"></FaInfoCircle>Need Help
          </li>
          <li className="flex items-center border-r-2 pr-2">
            <FaRegUser className="mr-2"></FaRegUser>
            <Link to="/login" className="hover:text-[#FD7800]">
              Sign In
            </Link>{" "}
            /{" "}
            <Link to="/register" className="hover:text-[#FD7800]">
              Register
            </Link>
          </li>

          <li className="flex items-center border-r-2 pr-2 hover:text-[#FD7800]">
            <FaFacebook className="mr-2"></FaFacebook>
          </li>
          <li className="flex items-center border-r-2 pr-2 hover:text-[#FD7800]">
            <FaTwitter className="mr-2"></FaTwitter>
          </li>
          <li className="flex items-center hover:text-[#FD7800]">
            <FaLinkedin className="mr-2"></FaLinkedin>
          </li>
        </div>
      </div>
    </div>
  );
};

export default MiniNav;
