import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <main className="flex-grow flex flex-col items-center justify-center">
      <Helmet>
        <title>Home Page</title>
        <link
          rel="icon"
          type="image/svg+xml"
          href="/src/assets/icons/home-icon.svg"
        />
      </Helmet>
      <div className="card w-1/2 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Hello, World!</h2>
          <p>This is a simple home page using React and DaisyUI components.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
