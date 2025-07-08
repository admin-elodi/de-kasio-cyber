import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-ng-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-display font-bold mb-4">About Us</h3>
            <p className="text-gray-300">
              Empowering Nigerian business centers to thrive with visibility and
              trust.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-ng-yellow">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-ng-yellow">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-ng-yellow">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Connect</h3>
            <p className="text-gray-300">
              Follow us on social media for the latest updates.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-ng-yellow">
                Twitter
              </a>
              <a href="#" className="hover:text-ng-yellow">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          &copy; 2025 Business Centers Nigeria. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;