import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white py-10">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-xl font-bold mb-4">Splash App</h3>
        <p className="text-gray-400 mb-4">
          Your one-stop platform for all your needs. Connecting people, creating opportunities.
        </p>
        <p className="text-gray-400">© 2024 Splash App. All rights reserved.</p>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
        <ul>
          {['about','services','contact'].map((path) => (
            <li key={path} className="mb-2">
              <Link href={`/${path}`} className="text-gray-400 hover:text-white transition duration-300">
                {path.charAt(0).toUpperCase() + path.slice(1)} Us
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
