const Header = () => {
  return (
    <header className="bg-blue-600/95 text-white py-4 shadow-md fixed w-full z-10 top-0">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Forum Timeline</h1>
        <nav>
          <a href="#" className="text-white hover:underline ml-4">
            Home
          </a>
          <a href="#" className="text-white hover:underline ml-4">
            About
          </a>
          <a href="#" className="text-white hover:underline ml-4">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
