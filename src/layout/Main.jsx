import { Outlet } from "react-router-dom";
import Navbar from "../page/shared/Navbar";
import MiniNav from "../page/shared/MiniNav";
import Footer from "../page/Footer/Footer";

const Main = () => {
  return (
    <div className="px-2">
      <MiniNav />
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Main;
