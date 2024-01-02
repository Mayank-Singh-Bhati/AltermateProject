import { Link } from "react-router-dom";
import { CgMenuLeft } from "react-icons/cg";
import { IoCloseOutline } from "react-icons/io5";
import { useState, useEffect } from "react";

const NavbarOne = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  if(isOpen) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "auto";
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className='flex justify-between items-center h-[70px] gap-[40px]'>
      {/* <h1 className="text-3xl text-white z-20">A.</h1> */}
      <Link to='/' className="z-20 h-[40px] w-[40px]"><img src="Images/Logo.png" alt="logo" /></Link>

      <button onClick={toggleMenu} className="text-[#F08A4B] text-[30px] md:hidden z-20">
        {isOpen ? <IoCloseOutline /> : <CgMenuLeft />}
      </button>

      <div
        className={`md:flex ${isOpen ? "flex bg-[#171A21]" : "hidden"} w-full z-10 h-[100dvh] items-center justify-between md:h-auto absolute top-0 left-0 md:relative md:top-0 md:left-0 p-10 md:p-0`}
      >
        {/* This div is to make slider on mobile and tablet view */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full py-[60px] md:py-0 gap-y-[40px] md:gap-y-0 h-full">
          <ul className="flex flex-col items-center md:items-start md:flex-row gap-[40px] text-[18px] md:text-[14px]">
            <Navlinks to="/">Home</Navlinks>
            <Navlinks to="/features">Features</Navlinks>
            <Navlinks to="/about">About Us</Navlinks>
            <Navlinks to="https://altermate.freshdesk.com/support/home">Contact</Navlinks>
          </ul>
          <Link
            to="/underDev"
            className="bg-[#F08A4B] hover:bg-orange-400 text-white flex items-center justify-center w-[100px] h-[35px] rounded-[5px]"
          >
            Sign in
          </Link>
        </div>
      </div>
    </nav>
  );
};

const Navlinks = ({ to, children, ...props }) => {
  return (
    <li className="relative w-fit group">
      <Link to={to} {...props} className={`${to === window.location.pathname ? "text-white font-semibold" : "text-[#B8B8B8]"}`}>
        {children}
      </Link>
      <div className="absolute -bottom-[2px] left-0 h-[1px] w-0 group-hover:w-[75%] transition-width duration-150 bg-[#F08A4B]"></div>
    </li>
  );
};

export default NavbarOne;