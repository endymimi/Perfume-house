import React from 'react'
import signupBg from "../assets/signupBg.png";
import group from "../assets/Group 9283 (1).png";





const SignUp = () => {
  return (
    
    <>
    <main className='container mx-auto'>
      <div>
      <h1 className='text-3xl my-2'>sign up</h1>
      <div className='relative'>
      <img src={signupBg} alt="" />
      </div>
      <img  className="absolute top-20" src={group} alt="" />
      
      </div>
        
    </main>
    </>
  )
}

export default SignUp