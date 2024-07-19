const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <p className="text-center lg:text-left">
          &copy; 2024 Hitayu All rights reserved.
        </p>
        <nav className="flex space-x-4">
          <a href="#" className="hover:underline">
            About Us
          </a>
          <a href="#" className="hover:underline">
            Services
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
          <a href="#" className="hover:underline">
            Blog
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms & Conditions
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
