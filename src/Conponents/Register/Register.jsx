import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import validatePassword from "../PasswordValidation/PasswordValidation";

const Register = () => {
  const { user } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState("");
  const [registerError, setRegisterError] = useState(null);
  const { createUser } = useContext(AuthContext);

  //redirect in profile
  const navigate = useNavigate();
  //toast

  const registerToast = () => {
    toast.success("Registration successful!", {
      position: "top-right",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    console.log(name, email, password);

    // Password validation
    if (!validatePassword(password, accepted, setRegisterError)) {
      return; // Stop execution if the password is not valid
    }
    //create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        //reset data
        e.target.reset();
        //redirect in profile
        navigate("/profile");
        //Update a user's profile
        updateProfile(result.user, {
          displayName: name,
          photoURL: "https://example.com/jane-q-user/profile.jpg",
        }).then(() => {
          console.log("Profile Updated");
        });
        // Show success toast
      })
      .catch((error) => {
        console.log(error.message);
        // Show error toast
        toast.error(error.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-100">
      <main className="flex-grow flex flex-col items-center justify-center">
        <div className="card w-96 bg-pink-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Register/Sign up</h2>
            <form onSubmit={handleRegister}>
              <div className="form-control">
                <label htmlFor="name" className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                  name="name"
                  id="name"
                  required
                />
              </div>
              <div className="form-control">
                <label htmlFor="email" className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered"
                  name="email"
                  id="email"
                  required
                />
              </div>
              <div className="form-control">
                <label htmlFor="password" className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="input input-bordered w-full"
                    name="password"
                    id="password"
                    required
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="cursor-pointer text-2xl absolute top-3 right-2"
                  >
                    {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
                  </span>
                </div>
              </div>
              <div className="my-3">
                <input
                  className="mr-2"
                  type="checkbox"
                  name="terms"
                  id="terms"
                />
                <label htmlFor="terms">Accept Terms and Condition</label>
              </div>
              <div className="form-control mt-4">
                <button
                  onClick={user && registerToast()}
                  className="btn btn-primary"
                >
                  Sign up
                </button>
              </div>
            </form>
            <p>
              Already have an account? Please{" "}
              <Link className="text-yellow-500 underline" to={"/login"}>
                Login
              </Link>
            </p>

            {registerError && (
              <p className="text-secondary mt-2 bg-warning p-1 rounded">
                {registerError}
              </p>
            )}
          </div>
        </div>
      </main>
      <ToastContainer />
    </div>
  );
};

export default Register;
