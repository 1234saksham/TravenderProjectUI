import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-500 py-10 text-white">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div>
            <h4 className="font-bold">Company</h4>
            <ul className="mt-2 space-y-1">
              <li><a href="/">Home</a></li>
              <li><a href="/community">Community</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/login">Login</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold">Support</h4>
            <ul className="mt-2 space-y-1">
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/terms">Terms & Conditions</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/cancellation">Cancellation Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold">Contact</h4>
            <p className="mt-2">+91 9876619823</p>
            <p className="mt-2">hello@travander.com</p>
            <div className="flex space-x-2 mt-2">
              <a href="https://facebook.com" aria-label="Facebook">
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram">
                <FaInstagram size={24} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter">
                <FaTwitter size={24} />
              </a>
              <a href="https://youtube.com" aria-label="YouTube">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </div>
        <p className="text-center mt-6">2021 (c) — Mochilero Travel Ventures Pvt. Ltd. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
