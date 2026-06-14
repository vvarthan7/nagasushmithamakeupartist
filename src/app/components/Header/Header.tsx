"use client";

import Image from "next/image";
import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="container flex justify-between min-[1200px]:justify-around items-center pt-2.5 px-6 min-[1200px]:px-0 align-middle">
      <div className="flex items-center z-50 relative">
        <Image src="/images/logo.png" alt="Logo" width={80} height={100} />
      </div>

      <div className="min-[1200px]:hidden z-50 relative text-black">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="focus:outline-none"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <nav
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } fixed top-0 left-0 w-full h-screen bg-white flex-col items-center justify-center min-[1200px]:static min-[1200px]:w-auto min-[1200px]:h-auto min-[1200px]:bg-transparent min-[1200px]:flex min-[1200px]:flex-row min-[1200px]:mt-4 z-40`}
      >
        <ul className="flex flex-col min-[1200px]:flex-row gap-8 font-sackers text-2xl min-[1200px]:text-base items-center">
          <li className="hover:text-pink-500 cursor-pointer" onClick={() => setIsMenuOpen(false)}>Home</li>
          <li className="hover:text-pink-500 cursor-pointer" onClick={() => setIsMenuOpen(false)}>About</li>
          <li className="hover:text-pink-500 cursor-pointer" onClick={() => setIsMenuOpen(false)}>Services</li>
          <li className="hover:text-pink-500 cursor-pointer" onClick={() => setIsMenuOpen(false)}>Portfolio</li>
          <li className="hover:text-pink-500 cursor-pointer" onClick={() => setIsMenuOpen(false)}>Testimonials</li>
          <li className="hover:text-pink-500 cursor-pointer" onClick={() => setIsMenuOpen(false)}>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
