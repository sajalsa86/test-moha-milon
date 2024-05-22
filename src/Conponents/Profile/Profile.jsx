const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <header className="bg-primary text-primary-content p-4 w-full text-center">
        <h1 className="text-3xl font-bold">Profile</h1>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Sajal Hossain</h2>
            <p>Email: sajalsm86@gmail.com</p>
            <p>
              I am experienced web developer specializing in modern JavaScript
              frameworks and libraries, with a focus on React, Next.js, and
              Node.js. With a strong background in building robust, scalable web
              applications, i am brings a blend of technical expertise and
              creative problem-solving to every project.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Edit Profile</button>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-neutral text-neutral-content p-4 w-full text-center">
        <p>&copy; 2024 My Sajal Hossain. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Profile;
