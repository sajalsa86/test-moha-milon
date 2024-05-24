import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import validatePassword from "../PasswordValidation/PasswordValidation";

const Longin = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { longinUser, signInWithGoogle } = useContext(AuthContext);
  //sign in with google
  const handleSignWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        setSuccess("You have Successfully Login with google");
        //to go home page after longin
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  //to go home page after longin
  const navigate = useNavigate();

  const handleLongin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    // Password validation
    if (!validatePassword(password, !null, setRegisterError)) {
      return; // Stop execution if the password is not valid
    }
    //longin
    longinUser(email, password)
      .then((result) => {
        //reset data
        e.target.reset();
        console.log(result.user);
        setSuccess("You have Successfully Login with google");
        //to go home page after longin
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        setRegisterError(error.message);
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-start bg-lime-100">
      <main className="flex-grow flex items-center justify-start">
        <div className="ml-12 card w-96 bg-lime-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Login</h2>
            <form onSubmit={handleLongin}>
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
                    className="absolute top-3 right-2 text-2xl"
                  >
                    {showPassword ? (
                      <IoMdEye></IoMdEye>
                    ) : (
                      <IoMdEyeOff></IoMdEyeOff>
                    )}
                  </span>
                </div>
              </div>

              <div className="form-control mt-4">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p>
              <button onClick={handleSignWithGoogle} className="btn btn-ghost">
                GOOGLE
              </button>
            </p>
            <p>
              Are you new here? Please{" "}
              <Link className="text-yellow-500 underline" to={"/register"}>
                Register
              </Link>
            </p>
            {registerError && (
              <p className="text-secondary mt-2 bg-warning p-1 rounded">
                {registerError}
              </p>
            )}
            {success && (
              <p className="text-success mt-2 bg-cyan-200 p-1 rounded">
                {success}
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Longin;
