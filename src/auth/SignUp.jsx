import React from "react";
import { useForm } from "react-hook-form";
import signupBg from "../assets/signupBg.png";
import group from "../assets/Group 9283 (1).png";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signUpSchema } from "../utils/ValidationSchema";

const SignUp = () => {
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <main className="main-wrapper ">
        <div className="container mx-auto pt-6 pb-10 px-8 md:pl-20 md:flex gap-15">
          <h1 className="text-white">logo</h1>
          <form className="bg-white p-8" onSubmit={handleSubmit(onSubmit)}>
            <h3>Get started</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <div className="md:flex gap-4 py-4">
              {/* div for first name  */}
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="first name"
                  {...register("firstName")}
                />
                <p className="text-red-600">{errors.firstName?.message}</p>
              </div>
              {/* div for last name  */}
              <div className="">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="last name"
                  {...register("lastName")}
                />
                <p className="text-red-600">{errors.lastName?.message}</p>
              </div>
            </div>

            {/* div for email */}
            <div className="py-3">
              <input
                className="w-full"
                type="email"
                name=""
                id=""
                placeholder="email" 
                {...register("email")}
              />
             <p className="text-red-600">{errors.email?.message}</p>
            </div>
            <div className="py-3">
              <input
                className="w-full"
                type="password"
                name=""
                id=""
                placeholder="password"
                {...register("password")}
              />
              <p className="text-red-600">{errors.password?.message}</p>
            </div>
            <div className="py-3">
              <input
                className="w-full"
                type="password"
                name=""
                id=""
                placeholder="confirm password"
                {...register("confirmPassword")}
              />
              <p className="text-red-600">{errors.confirmPassword?.message}</p>
            </div>

            <button className="btn btn-primary w-full">Primary</button>
          </form>
        </div>
      </main>
    </>
  );
};

export default SignUp;