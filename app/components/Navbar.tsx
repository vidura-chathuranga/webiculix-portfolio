import webiculix_logo from '../assets/images/webiculix_logo.png';
import MenuIcon from '../assets/icons/menu.svg';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="py-4 flex items-center justify-between">
          <div className="relative">
            <div className="absolute  w-full top-0 bottom-0 bg-gradient-to-r from-[#4D167D] via-[#02122F] to-[#36176E] blur-sm rounded-full"></div>
            <Image
              src={webiculix_logo}
              alt="Webiculix Logo"
              className="h-12 w-12 relative"
            />
          </div>
          <div className="border border-white/30 h-10 w-10 inline-flex items-center justify-center rounded-lg sm:hidden">
            <MenuIcon className="text-white" />
          </div>

          <nav className="hidden sm:inline-flex justify-center items-center gap-6 ">
            <a href="#" className="text-white/60 hover:text-white transition">
              Home
            </a>
            <a href="#" className="text-white/60 hover:text-white transition">
              About
            </a>
            <a href="#" className="text-white/60 hover:text-white transition">
              Projects
            </a>
            <a href="#" className="text-white/60 hover:text-white transition">
              Testimonials
            </a>
            <a href="#" className="text-white/60 hover:text-white transition">
              Team
            </a>
            <button className="bg-white py-2 px-4 rounded-lg font-medium cursor-pointer">
              Schedule a call
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
