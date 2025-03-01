import React from "react";
import { Link } from "react-router-dom";

const AuthBtn = () => {
  return (
    <>
      <div className="flex gap-[34px] ">
        <button className="w-[140px] h-[61px] bg-[#E6D2FF] rounded text-[Neurial Grotesk] cursor-pointer text-[#8D34FF]">
         <Link to="/auth/sign-up">
         Login
         </Link>
      
        </button>
        <button className="w-[140px] h-[61px] bg-[#8D34FF] rounded text-[#F5F5F5] cursor-pointer">
          
          <Link to="/auth/sign-in">
          Sign up
          </Link>
          
        </button>
      </div>
    </>
  );
};

export default AuthBtn;
