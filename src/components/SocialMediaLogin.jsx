import { useContext } from "react";
import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";


const SocialMediaLogin = () => {
  const {googleLogin}=useContext(AuthContext)
  const handleGoogleLogin = () => {
    googleLogin()
      .then(res => {
        const loggedUser = res.user;
        if(loggedUser){
           Swal.fire({
             position: "center",
             icon: "success",
             title: "Login Successful",
             showConfirmButton: false,
             timer: 1500,
           });
        }
      })
    .catch(err=>console.error(err))
  }
    return (
      <div className="text-center my-5">
        <h3 className="mb-2">Sign in with social account</h3>
        <div className="flex justify-center gap-2">
          <button
            onClick={handleGoogleLogin}
            className="btn rounded-full bg-[#f24951] text-white"
          >
            <FaGoogle />
          </button>
          <button className="btn rounded-full bg-[#1f1516] text-white">
            <FaGithub />
          </button>
          <button className="btn rounded-full bg-[#49baf2] text-white">
            <FaTwitter />
          </button>
        </div>
      </div>
    );
};

export default SocialMediaLogin;