import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="container flex justify-around items-center pt-2.5 align-middle">
      <div className="flex items-center">
        <Image src="/images/logo.png" alt="Logo" width={80} height={100} />
      </div>
      <nav className="mt-4">
        <ul className="flex gap-8 font-sackers">
          <li className="hover:text-pink-500 cursor-pointer">Home</li>
          <li className="hover:text-pink-500 cursor-pointer">About</li>
          <li className="hover:text-pink-500 cursor-pointer">Services</li>
          <li className="hover:text-pink-500 cursor-pointer">Portfolio</li>
          <li className="hover:text-pink-500 cursor-pointer">Testimonials</li>
          <li className="hover:text-pink-500 cursor-pointer">Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
