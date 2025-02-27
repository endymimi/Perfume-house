import React from "react";
import { Outlet } from "react-router-dom";
import navlogo from "../assets/navlogo.png";
import AuthBtn from "../components/AuthBtn";
import menuImg from "../assets/Vector.png";

const Navbar = () => {
  return (
    <>
      <nav className="container mx-auto  py-[25px] md:py-[33px] px-[99px] flex justify-between items-center">
        {/* div-1 for nav logo */}
        <div className="flex items-center gap-4">
          <img src={navlogo} alt="nav-logo" />
          <h2 className="hidden md:block">Perfume house</h2>
        </div>
        {/* div-2, for auth btn */}
        <div>
            {/* div for btns */}
          <div className="hidden md:block">
              <AuthBtn/>
          </div>
          {/* div for menu/hamburger img */}
          <div className="md:hidden">
            <img src={menuImg} alt=" menu-Img" />
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
