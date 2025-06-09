import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-500 ${
        scrolled
          ? "bg-primary/90 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-10 h-10 object-contain drop-shadow-lg transition-transform duration-300 hover:scale-110' />
          <p className='text-white text-[20px] font-bold cursor-pointer flex tracking-wide'>
            P. Sai Eshwar&nbsp;
            <span className='sm:block hidden text-indigo-300 font-semibold'>| Web Developer</span>
          </p>
        </Link>

        {/* Desktop Nav */}
        <ul className='list-none hidden sm:flex flex-row gap-8'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`
                relative px-3 py-1 rounded-lg transition-all duration-300
                ${active === nav.title ? "text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg" : "text-secondary"}
                hover:text-white hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 hover:shadow-xl
                cursor-pointer font-semibold text-[17px] tracking-wide
                before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-[3px] before:bg-white before:rounded-full before:transition-all before:duration-300 hover:before:w-3/4
              `}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`} className="relative z-10">{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Nav */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[32px] h-[32px] object-contain transition-transform duration-300 hover:scale-110'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-gradient-to-br from-blue-900/90 via-indigo-900/90 to-purple-900/90 backdrop-blur-xl absolute top-20 right-0 mx-4 my-2 min-w-[160px] z-10 rounded-2xl shadow-2xl transition-all duration-300`}
          >
            <ul className='list-none flex flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`
                    font-poppins font-semibold cursor-pointer text-[17px] px-3 py-2 rounded-lg transition-all duration-300
                    ${active === nav.title ? "text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg" : "text-secondary"}
                    hover:text-white hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 hover:shadow-xl
                  `}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;