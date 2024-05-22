const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <header className="bg-primary text-primary-content p-4 w-full text-center">
        <h1 className="text-3xl font-bold">Contact Us</h1>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Get in Touch</h2>
            <form>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  placeholder="Your Message"
                  className="textarea textarea-bordered"
                ></textarea>
              </div>
              <div className="form-control mt-4">
                <button className="btn btn-primary">Send</button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <footer className="bg-neutral text-neutral-content p-4 w-full text-center">
        <p>&copy; 2024 Md Sajal Hossain. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
