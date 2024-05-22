import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);
    //create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        //reset data
        e.target.reset();
      })
      .catch((error) => {
        console.log(error.message);
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
                <button className="btn btn-primary">Sign up</button>
              </div>
            </form>
            <p>
              Already have an account? Please{" "}
              <Link className="text-yellow-500 underline" to={"/longin"}>
                Longin
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
