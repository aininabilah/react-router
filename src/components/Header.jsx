import React from "react";
import { Link } from "react-router-dom";
import PadiLogo from '../images/Padi.jpg';

const Header = () => {
  return (
    <header className="bg-white pt-3 text-white sticky top-0 z-50 m-0 mb-0 ">
      <nav>
       
        <ul className="flex space-x-4 justify-center mb-0 pl-0">
        <Link to="/">
       <img src={PadiLogo} alt="Logo" className="h-10  mb-2 mr-10" />
        </Link>
          <li>
            <Link to="/" className="font-semibold text-sky-400 hover:text-sky-600 mx-8 text-decoration-none pt-4">
              Beranda
            </Link>
          </li>
          <li>
            <Link to="/about" className="font-semibold text-sky-400 hover:text-sky-600 mx-8 text-decoration-none">
              Tentang Kami
            </Link>
          </li>
          <li>
            <Link to="/help" className="font-semibold text-sky-400 hover:text-sky-600 mx-8 text-decoration-none">
              Bantuan
            </Link>
          </li>
          <li>
            <Link to="/media" className="font-semibold text-sky-400 hover:text-sky-600 mx-8 text-decoration-none">
              Media
            </Link>
          </li>
          <li>
            <Link to="/contacts" className="font-semibold text-sky-400 hover:text-sky-600 mx-8 text-decoration-none">
              Kontak
            </Link>
          </li>

          <li>
            <Link to="/" className="font-semibold text-sky-400 hover:text-sky-600 mx-8 text-decoration-none border-2 border-sky-400 rounded px-3 py-1 hover:border-sky-600 pb-2">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
