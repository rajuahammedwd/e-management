import { useContext } from "react";
import SocialMediaLogin from "../../components/SocialMediaLogin";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const {signInUser}=useContext(AuthContext)
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    
      signInUser(email, password)
      .then((res) => {
          const loggedUser = res.user;
        if (loggedUser) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Login Successful",
            showConfirmButton: false,
            timer: 1500,
          });
         }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="hero rounded-none mt-20">
      <div className="card shrink-0 w-full max-w-md  shadow-2xl bg-base-100 rounded-none mb-20">
        <form onSubmit={handleLogin} className="card-body">
          <h2 className="text-center text-3xl font-bold">Please Login</h2>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Your Password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#FD7800] text-white">Sign In</button>
          </div>
        </form>
        <SocialMediaLogin></SocialMediaLogin>
      </div>
    </div>
  );
};

export default Login;
