import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/logo.png'; // Adjust the path if necessary

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo Image */}
        <div className="flex items-center">
          <Image 
            src={logo} 
            alt="Travander Logo" 
            width={120} // Adjust width as needed
            height={30} // Adjust height as needed
          />
        </div>
        <nav className="space-x-6">
          <Link href="/" className="text-gray-700">Home</Link>
          <Link href="/community" className="text-gray-700">Community</Link>
          <Link href="/about" className="text-gray-700">About Us</Link>
          <Link href="/login" className="text-gray-700">Login</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
