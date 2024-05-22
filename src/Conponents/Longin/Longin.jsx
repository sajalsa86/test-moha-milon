import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Longin = () => {
  const { longinUser, signInWithGoogle } = useContext(AuthContext);
  //sign in with google
  const handleSignWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
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
    //longin
    longinUser(email, password)
      .then((result) => {
        console.log(result.user);
        //reset data
        e.target.reset();
        //to go home page after longin
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-start bg-lime-100">
      <main className="flex-grow flex items-center justify-start">
        <div className="ml-12 card w-96 bg-lime-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Longin</h2>
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
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered"
                  name="password"
                  id="password"
                  required
                />
              </div>

              <div className="form-control mt-4">
                <button className="btn btn-primary">Longin</button>
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
          </div>
        </div>
      </main>
    </div>
  );
};

export default Longin;
