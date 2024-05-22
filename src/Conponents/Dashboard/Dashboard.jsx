const Dashboard = () => {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-base-200 p-4">
        <div className="text-xl font-bold mb-4">Dashboard</div>
        <ul className="menu">
          <li>
            <a className="active">Home</a>
          </li>
          <li>
            <a>Profile</a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </aside>
      <div className="flex-grow">
        <header className="bg-primary text-primary-content p-4">
          <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
        </header>
        <main className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Card 1</h2>
                <p>Content for card 1.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Card 2</h2>
                <p>Content for card 2.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Card 3</h2>
                <p>Content for card 3.</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
