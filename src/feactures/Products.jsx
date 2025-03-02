import React from "react";
import { perfumeDatas } from "../product";
import perfStar from "../assets/Frame 27.png";
import amountImg from "../assets/Frame 1000005520.png";

const Products = () => {
  return (
    <>
      <main className="container mx-auto ">
        <div className= " container mx-auto md:grid md:grid-cols-3 gap-6">
          {perfumeDatas.map((perfumeData) => {
            const {
              id,
              image,
              title,
              rating,
              rateCount,
              price,
              discountPrice,
            } = perfumeData;

            return (
              <div key={perfumeData.id} >
                <div className="card bg-base-100 w-[256.62px] h-[415.55px] rounded-[
4.56px] border-[#F3F2FB] border-[
1.14px] shadow-sm ">
  <figure className="">
    <img
      className="w-[335px] h-[300px] ml-12" src={perfumeData.image}
      alt="Perfume" />
  </figure>
  <div className="card-body ">
    <h2 className="ml-5 font-HostGrotesk font-bold">{perfumeData.title}</h2>
    <img className="ml-5" src={perfStar} alt="Rating count" />
    <img className="w-33 ml-5" src={amountImg} alt="Price" />
    
    <div className="card-actions justify-end">
      <button className="w-[287.12px] h-[35px] ml-5 bg-[#8D34FF] font-poppins rounded-xl text-[#F5F5F5] cursor-pointer text-sm"> Add to Cart</button>
    </div>
  </div>
</div>

              </div>
            )
          })}
        </div>
      </main>
    </>
  );
};

export default Products