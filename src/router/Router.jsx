import { createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/Home/Home";
import Services from "../page/Home/Services";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element:<Home></Home>
      }, {
        path: "/service",
        element:<Services></Services>
      }
    ]
  },
]);