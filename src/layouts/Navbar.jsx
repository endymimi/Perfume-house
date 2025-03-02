import React from "react";
import { Outlet } from "react-router-dom";
import navlogo from "../assets/navlogo.png";
import AuthBtn from "../components/AuthBtn";
import menuImg from "../assets/Vector.png";

const Navbar = () => {
  return (
    <>
      <nav className="  py-[25px] md:px[15px] lg:py-[33px] lg:px-[99px] justify-between items-center flex">
        {/* div-1 for nav logo */}
        
        <div className="flex items-center ">
          <img  className="  md:block  ml-6" src={navlogo} alt="nav-logo" />
          <div>
          <h2 className="hidden md:block font-[sansita] ml-2 text-[28.33px] font-[700] ">Perfume house</h2>
          </div>
        </div>
        {/* div-2, for auth btn */}
        <div>
            {/* div for btns */}
          <div className="hidden md:block">
              <AuthBtn/>
          </div>
          {/* div for menu/hamburger img */}
          <div className="md:hidden">
            <img className="mr-25" src={menuImg} alt=" menu-Img" />
          </div>
        </div>
        
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
