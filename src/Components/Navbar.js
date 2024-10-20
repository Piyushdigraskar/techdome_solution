const Navbar = () => {
    const signup = true;
  return (
    <nav className="bg-green-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Loan Manager</h1>
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:text-gray-200 transition duration-200">Home</a></li>
          <li><a href="/about" className="hover:text-gray-200 transition duration-200">About</a></li>
          {signup ? (<li><a href="/signup" className="hover:text-gray-200 transition duration-200">signup</a></li>) : (<li><a href="/" className="hover:text-gray-200 transition duration-200">Login</a></li>)}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
