"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CgGitFork } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineMessage,
} from "react-icons/ai";

function NavBar() {
  const [expand, setExpand] = useState(false);
  const [navColour, setNavColour] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      setNavColour(window.scrollY >= 20);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        navColour ? "bg-gray-900 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/">
          <h1 className="text-2xl font-bold text-purple-500">Saad Ahmed.</h1>
        </Link>

        {/* Hamburger Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setExpand(!expand)}
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>

        {/* Navigation Links */}
        <ul
          className={`absolute md:static top-full left-0 w-full md:w-auto bg-gray-900 md:bg-transparent transition-all duration-300 ease-in-out md:flex md:items-center md:space-x-6 ${
            expand ? "block py-4" : "hidden md:flex"
          }`}
        >
          {[
            { href: "/", label: "Home", icon: <AiOutlineHome /> },
            { href: "/About", label: "About", icon: <AiOutlineUser /> },
            { href: "/Project", label: "Projects", icon: <AiOutlineFundProjectionScreen /> },
            { href: "/Contact", label: "Contact", icon: <AiOutlineMessage /> },
          ].map((item, index) => (
            <li key={index} className="group px-4 py-2 md:py-0">
              <Link
                href={item.href}
                className="text-white flex items-center gap-1 relative"
                onClick={() => setExpand(false)}
              >
                {item.icon} {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}

          <li className="px-4 py-2 md:py-0">
            <a
              href="https://github.com/SaadAhmedSA/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
            >
              <CgGitFork className="text-xl" />
              <AiFillStar className="text-lg ml-1" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
