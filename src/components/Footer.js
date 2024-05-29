const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto px-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Forum Timeline. All rights reserved.
        </p>
        <div className="mt-2">
          <a href="#" className="text-white hover:underline ml-4">
            Privacy Policy
          </a>
          <a href="#" className="text-white hover:underline ml-4">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
