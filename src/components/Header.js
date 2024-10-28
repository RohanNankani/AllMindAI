import Image from 'next/image';
import Logo from '../../public/mantleLogo.svg';

export default function Header() {
  return (
    <header className="header p-6 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image src={Logo} alt="Mantle Logo"/>
        </div>
        <nav className="navbar space-x-8 flex items-center">
          <a href="#features" className="text-lg hover:text-gray-600 transition-colors">Products</a>
          <a href="#solutions" className="text-lg hover:text-gray-600 transition-colors">Solutions</a>
          <a href="#resources" className="text-lg hover:text-gray-600 transition-colors">Resources</a>
          <button className="btn-outline">
            Login
          </button>
          <button className="btn-primary ml-4">
            Get Started
          </button>
        </nav>
      </div>
    </header>
  );
}
