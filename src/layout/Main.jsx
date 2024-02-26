import { Outlet } from "react-router-dom";
import Navbar from "../page/shared/Navbar";
import MiniNav from "../page/shared/MiniNav";

const Main = () => {
  return (
    <div>
      <MiniNav />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Main;
