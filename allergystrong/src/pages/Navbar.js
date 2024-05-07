
const Navbar = () => {
    return (
      <nav className="bg-white p-10">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <a href="/" ><img src="Frame.png" alt="Logo"/></a>
          </div>
          <div>
            <a href="/" className="text-black hover:text-gray-300 mr-4">Home</a>
            <span className="inline-block mr-4"><img src="Line 6.png" alt="Line"/></span>
            <a href="/About" className="text-black hover:text-gray-300 mr-4">About</a>
            <span className="inline-block mr-4"><img src="Line 6.png" alt="Line"/></span>
            <a href="/Contact" className="text-black hover:text-gray-300 mr-4">Contact</a>
            <span className="inline-block mr-4"><img src="Line 6.png" alt="Line"/></span>
            <a href="/Login" className="text-black hover:text-gray-300 mr-4">Login</a>
          </div>
        </div>
      </nav>
    );
  };

  export default Navbar;