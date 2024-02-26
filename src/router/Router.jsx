import { createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/Home/Home";
import Services from "../page/Home/Services";
import Register from "../page/SignIn/Register";
import Login from "../page/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Error from "../page/Error/Error";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element:<Home></Home>
      }, {
        path: "/service",
        element:<PrivateRoute><Services/></PrivateRoute>
      }, {
        path: "/register",
        element:<Register/>
      },{
        path: "/login",
        element:<Login/>
      }
    ]
  },
]);